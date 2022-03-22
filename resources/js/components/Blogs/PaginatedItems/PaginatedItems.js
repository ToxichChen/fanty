import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import {
  StylBoxPosts,
} from "./../Blogs.styled";

import { blogPostsArr } from "../../../constants";
import Post from "./../BlogsPosts/Post";

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
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogPostsArr.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogPostsArr.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogPostsArr.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <StylBoxPosts>
      <Posts currentItems={currentItems} />
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