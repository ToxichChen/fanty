import styled from "styled-components";
import { StylBoxFlexColumnFlexStart } from "./../../../common/BasicBoxes/BasicBoxes.styled";

const StylTitleIntroCard = styled.h3`
    font-size: ${(props) => props.theme.typography.textLarge.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 10px;
    text-align: left;
`;

const StylLinkIntorCard = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.primary};
`;

const StylBoxCardIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
    width: 100%;
    max-width: auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 5px;
    margin-bottom: 20px;

    @media (min-width: 900px) {
        max-width: 100%;
        width: 49%;
    }

    @media (min-width: 1150px) {
        max-width: 360px;
        width: 100%;
    }
`;

const StylBoxCenterIntroPageHome = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;

    @media (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

const StylTextIntroCard = styled.p`
    font-family: ${(props) => props.theme.typography.textFamily.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    color: ${(props) => props.theme.palette.text.main};
    text-align: left;
    line-height: 1.6;
`;

const StylIconIntorCard = styled.i`
    color: ${(props) => props.theme.palette.main};
    font-size: 50px;
    margin-bottom: 20px;
`;

export {
    StylIconIntorCard,
    StylTitleIntroCard,
    StylLinkIntorCard,
    StylBoxCardIntroPageHome,
    StylBoxCenterIntroPageHome,
    StylTextIntroCard,
};
