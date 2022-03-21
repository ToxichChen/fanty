import styled from "styled-components";
import imageMobileBGJPG from "./../../assets/bg/muzyka.png";

const SectionSupport = styled.section`
    isplay: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background-blend-mode: multiply;
    background-image: url(${imageMobileBGJPG});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 20px;
    min-height: 100vh;
`;

const CenterSupport = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    border-radius: 8px;
    background-color: ${props => props.theme.palette.backgroundRGB.primary};

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

const BoxContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    @media (min-width: 1024px) {
        width: 45%;
    }
`;

const TitleContent = styled.h2`
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 30px;
`;

const TextContent = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 30px;
`;

const FormSupport = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    @media (min-width: 1024px) {
        width: 45%;
    }
`;

const FormInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding: 20px;
    margin-bottom: 10px;
    background-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.palette.border.light};
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};

    &:placeholder,
    &:placeholder-shown {
        font-style: italic;
        font-size: ${(props) => props.theme.typography.textSmall.primary};
        font-weight: ${(props) => props.theme.typography.textWeigth.primary};
        font-family: ${(props) => props.theme.typography.textFamily.main};
        color: ${(props) => props.theme.palette.text.light};
    }
`;

const FormTextArea = styled.textarea`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    min-height: 200px;
    outline: none;
    border: none;
    padding: 20px;
    margin-bottom: 20px;
    background-color: transparent;
    resize: vertical;
    border-bottom: 1px solid ${(props) => props.theme.palette.border.light};

    &:placeholder,
    &:placeholder-shown {
        font-style: italic;
        font-size: ${(props) => props.theme.typography.textSmall.primary};
        font-weight: ${(props) => props.theme.typography.textWeigth.primary};
        font-family: ${(props) => props.theme.typography.textFamily.main};
        color: ${(props) => props.theme.palette.text.light};
    }
`;

const BtnSendForm = styled.button`
    position: relative;
    cursor: pointer;
    display: block;
    font-size: ${(props) => props.theme.typography.textSmall.small};
    font-weight: ${(props) => props.theme.typography.textWeigth.second};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.dark};
    background-color: ${(props) => props.theme.palette.backgroundColor.light};
    font-style: italic;
    text-transform: uppercase;
    width: 100%;
    text-decoration: none;
    padding: 24px 30px;
    text-align: center;
    align-self: center;
    margin-right: 12px;
    box-shadow: 0 0 9px 3px ${(props) => props.theme.palette.shadow.primary};
    border-radius: 8px;
    z-index: 2 !important;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: ${(props) =>
        props.theme.palette.backgroundColor.light};
        border-radius: 8px;
        z-index: -1;
    }

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 9px;
        top: 10px;
        background: ${(props) => props.theme.palette.border.main};
        z-index: -2;
        box-shadow: 0 0 9px 3px ${(props) => props.theme.palette.shadow.primary};
        border-radius: 8px;
    }

    @media (min-width: 1024px) {
        font-size: ${(props) => props.theme.typography.textSmall.primary};

        &:hover {
            & > img {
                transform: translateX(10px);
            }
        }
    }
`;

const IconSupport = styled.p`
font-size: ${(props) => props.theme.typography.textSmall.small};
font-weight: ${(props) => props.theme.typography.textWeigth.second};
font-family: ${(props) => props.theme.typography.textFamily.main};
color: ${(props) => props.theme.palette.text.light};

&>i{
    margin-right: 20px;
    color: ${(props) => props.theme.palette.icon.main};
}
`;

export {
    IconSupport,
    SectionSupport,
    CenterSupport,
    BoxContent,
    TitleContent,
    TextContent,
    FormSupport,
    FormInput,
    FormTextArea,
    BtnSendForm,
};
