import { useParams } from "react-router";
import { useEffect, useState } from "react";
import {
    SectionArticle,
    TitleArticle,
    WrapperImgArticle,
    ImgArticle,
    TextArticle,
    DateArticle,
    BoxArticle,
    WrapperArticle,
} from "./Article.styled";
import {
    StylBoxOtherContent,
    StylBoxCenter,
    StylBoxTrending,
    StylTrendTitle,
} from "../Blogs/Blogs.styled";
import Trend from "../Blogs/BlogsTrends/Trend";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import FooterPageHome from "./../PageHome/FooterPageHome/FooterPageHome";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";

import useActionBlogs from "../../hooks/redux/useActionBlogs";
import MiniLoader from "../Loader/MiniLoader";

const Article = () => {
    const [isBlogs, setBlogs] = useState([]);
    const { isLoadingBlog, getBlog, getBlogs, isLoadingBlogs } = useActionBlogs();
    const { id } = useParams();
    const [blog, setBlog] = useState({ created_at: '"2022-03-27T14:39:55.000000Z"' });

    useEffect(() => getBlog(id, setBlog), []);
    useEffect(() => {
        getBlogs(setBlogs);
      }, [getBlogs])
  

    return (
        <>
            <SectionArticle>
                <StylBoxContainerMaxWidth>
                    <StylBoxFlexColumnFlexStart>
                        <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                        <HeaderMenuPageHome />
                    </StylBoxFlexColumnFlexStart>
                </StylBoxContainerMaxWidth>
                {isLoadingBlog ? <MiniLoader isHeight={true} /> :
                    <BoxArticle>
                        <StylBoxCenter>
                            <WrapperArticle>
                                <WrapperImgArticle>
                                    <ImgArticle
                                        src={blog.media}
                                        alt="article img"
                                    />
                                </WrapperImgArticle>
                                <DateArticle>{blog.created_at.substring(0, 10)}</DateArticle>
                                <TitleArticle>{blog.title}</TitleArticle>
                                <TextArticle>{blog.text}</TextArticle>
                            </WrapperArticle>
                            <StylBoxOtherContent>
                                <StylBoxTrending>
                                    <StylTrendTitle>Trending</StylTrendTitle>
                                    {isLoadingBlogs ? <MiniLoader/> : isBlogs.map((item, index) => index < 4 && (
                                        <Trend item={item} key={index} />
                                    ))}
                                </StylBoxTrending>
                            </StylBoxOtherContent>
                        </StylBoxCenter>
                    </BoxArticle>}
            </SectionArticle>
            <FooterPageHome />
        </>
    );
};

export { Article };
