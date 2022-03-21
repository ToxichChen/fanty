import styled from "styled-components";
import imageMobileBGJPG from "./../../assets/bg/fanty.png";
import imageBGJPG from "./../../assets/bg/fanty-pk.png";

const SectionPay = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-blend-mode: multiply;
    background-image: url(${imageMobileBGJPG});
    background-color: ${props => props.theme.palette.backgroundRGB.main};
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 20px;
    min-height: 100vh;

    @media(min-width: 1024px){
        background-image: url(${imageBGJPG});

    }
`;

const CenterPay = styled.div`
    max-width: 800px;
    min-height: 400px;
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    border-radius: 8px;
    margin: 30px 0 10px;
    background-color: ${props => props.theme.palette.backgroundRGB.primary};
`;

const TitlePay = styled.h2`
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-transform: capitalaze;
    margin-bottom: 20px;

    & > i {
        color: ${(props) => props.theme.palette.icon.main};
        font-size: ${(props) => props.theme.typography.textMedium.primary};
        margin-right: 10px;
    }
`;

const BoxSelectPay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.palette.backgroundRGB.ultraPrimary};
    padding: 20px;
    margin-bottom: 50px;
    border-radius: 8px;
`;

const Select = styled.select`
    position: relative;
    appearance: none;
    display: flex;
    max-width: 350px;
    width: 100%;
    min-height: 35px;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    color: ${(props) => props.theme.palette.text.light};
    padding: 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    margin-bottom: ${(props) => (props.isMargin ? "20px" : "")};

    option {
        color: ${(props) => props.theme.palette.text.light};
        background-color: ${(props) =>
        props.theme.palette.backgroundColor.second};
        border: none;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

const BoxBonus = styled.div`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
`;
export { SectionPay, CenterPay, TitlePay, BoxSelectPay, Select, BoxBonus };
