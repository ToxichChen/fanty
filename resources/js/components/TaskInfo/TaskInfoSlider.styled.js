import styled from "styled-components";
import imageMobileBGJPG from "./../../assets/bg/fanty.png";
import imageBGJPG from "./../../assets/bg/fanty-pk.png";

const StylTaskInfoSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-blend-mode: multiply;
    background-image: url(${imageMobileBGJPG});
    background-color: rgba(111, 43, 149, 0.8);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 20px 50px 20px;
    min-height: 100vh;

    @media (min-width: 1024px) {
        background-image: url(${imageBGJPG});
        padding: 20px 20px 115px 20px;
    }
`;

const StylTaskInfoBoxCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 950px;
    width: 100%;
    min-height: 400px;
    margin: auto;
    padding: 0 20px;
`;

const StylTaskInfoTitle = styled.h1`
    font-size: ${(props) => props.theme.typography.textMedium.small};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.typography.textLarge.primary};
        margin-bottom: 50px;
    }
`;

const StylTaskInfoDescription = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.small};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.main};
    text-align: center;
    line-height: 1.5;
    white-space: normal;
    max-width: 800px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.typography.textMedium.primary};
        margin-bottom: 50px;
    }
`;

export {
    StylTaskInfoSlider,
    StylTaskInfoBoxCenter,
    StylTaskInfoTitle,
    StylTaskInfoDescription,
};
