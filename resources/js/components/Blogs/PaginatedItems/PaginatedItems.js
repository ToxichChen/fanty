import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  StylBoxPosts,
} from "./../Blogs.styled";
import Post from "./../BlogsPosts/Post";
import useActionBlogs from "../../../hooks/redux/useActionBlogs";
import MiniLoader from "../../Loader/MiniLoader";

const Posts = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Post item={item} key={index} />
        ))}
    </>
  );
};

const PaginatedItems = ({ itemsPerPage }) => {
  const { getBlogs, isLoadingBlogs } = useActionBlogs();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [isBlogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs(setBlogs);
  }, [getBlogs])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(isBlogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(isBlogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, isBlogs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % isBlogs.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <StylBoxPosts>
      {isLoadingBlogs ? <MiniLoader isHeight={true} /> :
        <Posts currentItems={currentItems} />}
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </StylBoxPosts>
  );
};

export default PaginatedItems;