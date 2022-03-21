import styled from "styled-components";
import imageMobileBGJPG from "./../../assets/bg/muzyka.png";

const SectionPolitics = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${imageMobileBGJPG});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 20px;
    min-height: 100vh;
`;

const CenterPolitics = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const ShortText = styled.p`
    margin-top: 20px;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 20px;
`;

const ListRules = styled.ol`
    list-style: none;
    counter-reset: li;
    margin-bottom: 10px;
`;

const ItemRule = styled.li`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 10px;
    padding-left: 10px;

    &:before {
        counter-increment: li;
        content: counters(li, ".") ". ";
        font-size: ${(props) => props.theme.typography.textMedium.main};
        color: ${(props) => props.theme.palette.text.light};
        opacity: 0.5;
    }
`;

const LinkEdit = styled.a`
    cursor: pointer;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
    margin-left: 5px;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
        &:hover {
            color: ${(props) => props.theme.palette.text.light};
        }
    }
`;

const DataPublic = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
`;

const BoxPolitics = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    border-radius: 8px;
    margin: 30px 0 10px;
    background-color: ${props => props.theme.palette.backgroundRGB.primary};
`;

export {
    SectionPolitics,
    ShortText,
    ListRules,
    ItemRule,
    LinkEdit,
    DataPublic,
    CenterPolitics,
    BoxPolitics,
};
