import React, {useState, useEffect} from 'react';
import {
    StylBoxBlogs,
    StylBoxCenter,
    StylBoxOtherContent,
    StylBoxTrending,
    StylTrendTitle,
    StylBoxWrapper,
} from "./Blogs.styled";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import Trend from "./BlogsTrends/Trend";
import PaginatedItems from "./PaginatedItems/PaginatedItems";
import useActionBlogs from "../../hooks/redux/useActionBlogs";
import MiniLoader from "../Loader/MiniLoader";



const Blogs = () => {
    const { getBlogs, isLoadingBlogs } = useActionBlogs();  
    const [isBlogs, setBlogs] = useState([]);

    useEffect(() => {
      getBlogs(setBlogs);
    }, [getBlogs])

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
                               {isLoadingBlogs ? <MiniLoader/> : isBlogs.map((item, index) => index < 4 && (
                                        <Trend item={item} key={index} />
                                    ))}
                            </StylBoxTrending>
                        </StylBoxOtherContent>
                    </StylBoxCenter>
                </StylBoxWrapper>
            </StylBoxBlogs>
            <FooterPageHome />
        </>
    );
};

export default Blogs;
