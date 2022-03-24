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

import { blogTrendsArr } from "../../constants";


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
                        </StylBoxOtherContent>
                    </StylBoxCenter>
                </StylBoxWrapper>
            </StylBoxBlogs>
            <FooterPageHome />
        </>
    );
};

export default Blogs;
