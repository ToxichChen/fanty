import styled from "styled-components";
import bgMobileFantyPNG from "./../../assets/bg/fanty.png";

const SectionArticle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url(${bgMobileFantyPNG});
    min-height: 100vh;
    padding: 20px 20px;

`;

const BoxArticle = styled.div`
    padding: 20px;
    background-color: rgba(52, 22, 75, 0.8);
    margin-top: 20px;
    border-radius: 8px;

    @media (min-width: 768px) {
        padding: 20px 40px;
    }
`;

const TitleArticle = styled.h2`
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-transform: capitalize;
    margin-bottom: 20px;
`;

const WrapperImgArticle = styled.div`
    position: relative;
    width: 100%;
    max-height: 350px;
    background-color: #9d9d9d;
    position: relative;
    padding-bottom: 45%;
    margin-bottom: 24px;
    box-shadow: 0 2px 5px 0 black, 0.5;
    transition: all 0.5s ease;
    border-radius: 8px;
`;

const ImgArticle = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 8px;
`;

const TextArticle = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};

    @media (min-width: 1024px) {
        font-size: ${(props) => props.theme.typography.textMedium.primary};
    }
`;

const DateArticle = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.main};
    margin-bottom: 8px;
`;

const WrapperArticle = styled.div`
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-right: 40px;
        margin-bottom: 0;
    }
`;

export {
    WrapperArticle,
    DateArticle,
    SectionArticle,
    BoxArticle,
    TitleArticle,
    WrapperImgArticle,
    ImgArticle,
    TextArticle,
};
