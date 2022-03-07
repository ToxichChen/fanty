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
import Categories from "../Blogs/Categories/Categories";
import Trend from "../Blogs/BlogsTrends/Trend";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import FooterPageHome from "./../PageHome/FooterPageHome/FooterPageHome";

import { article, blogTrendsArr } from "../../constants";

const Article = () => {
    return (
        <>
            <SectionArticle>
                <HeaderMenuPageHome />
                <BoxArticle>
                    <StylBoxCenter>
                        <WrapperArticle>
                            <WrapperImgArticle>
                                <ImgArticle
                                    src={article.imgUrl}
                                    alt="article img"
                                />
                            </WrapperImgArticle>
                            <DateArticle>{article.data}</DateArticle>
                            <TitleArticle>{article.title}</TitleArticle>
                            <TextArticle>{article.text}</TextArticle>
                        </WrapperArticle>
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
                </BoxArticle>
            </SectionArticle>
            <FooterPageHome />
        </>
    );
};

export { Article };
