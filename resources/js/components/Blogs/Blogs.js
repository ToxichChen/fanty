import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
    StylBoxBlogs,
    StylBoxCenter,
    StylBoxPosts,
    StylBoxOtherContent,
    StylBoxTrending,
    StylTrendTitle,
    StylBoxWrapper,
} from "./Blogs.styled";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import Categories from "./Categories/Categories";
import Post from "./BlogsPosts/Post";
import Trend from "./BlogsTrends/Trend";

import { blogPostsArr, blogTrendsArr } from "../../constants";

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

const Blogs = () => {
    return (
        <>
            <StylBoxBlogs>
                <StylBoxContainerMaxWidth>
                    <StylBoxFlexColumnFlexStart>
                        <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                        <HeaderMenuPageHome />
                    </StylBoxFlexColumnFlexStart>
                </StylBoxContainerMaxWidth>
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
