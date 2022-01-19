import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {
  StylBoxBlogs,
  StylBoxCenter,
  StylBoxPosts,
  StylBoxOtherContent,
  StylBoxTrending,
  StylTrendTitle,
  StylBoxWrapper,
} from './Blogs.styled';
import { HeaderMenuPageHome, FooterPageHome } from '..';
import { Categories } from './Categories';
import { Post } from './BlogsPosts';
import { Trend } from './BlogsTrends';

import { blogPostsArr, blogTrendsArr } from '../../constants';

const Posts = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => <Post item={item} key={index} />)}
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
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </StylBoxPosts>
  );
};

const Blogs = () => {
  return (
    <>
      <StylBoxBlogs>
        <HeaderMenuPageHome />
        <StylBoxWrapper>
          <StylBoxCenter>
            <PaginatedItems itemsPerPage={3} />
            <StylBoxOtherContent>
              <StylBoxTrending>
                <StylTrendTitle>Trending</StylTrendTitle>
                {!!blogTrendsArr.length &&
                  blogTrendsArr.map((item, index) => (
                    <Trend item={item} key={index} />
                  ))}
              </StylBoxTrending>
              <Categories />
            </StylBoxOtherContent>
          </StylBoxCenter>
        </StylBoxWrapper>
      </StylBoxBlogs>
      <FooterPageHome />
    </>
  );
};

export default Blogs;
