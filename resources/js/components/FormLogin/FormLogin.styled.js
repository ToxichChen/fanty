import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";

const BoxBtnForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 100px;

@media(min-width: 500px){
    flex-direction: row;
    min-height: auto;
}
`;

const OtherForm = styled(NavLink)`
cursor: pointer;
border: none;
outline: none;
background-color: transparent;
display: inline-block;
padding: 10px 20px;
transition: all 0.2s ease;
backgroun-color: transparent;
letter-spacing: 4px;
text-transform: uppercase;
text-decoration: none;
font-size: ${(props) => props.theme.typography.textSmall.primary};
font-weight: ${(props) => props.theme.typography.textWeigth.main};
font-family: ${(props) => props.theme.typography.textFamily.main};
color: ${(props) => props.theme.palette.text.primary};

@media (min-width: 1024px) {
    &:hover {
        background: ${(props) => props.theme.palette.text.primary};
        color: ${(props) => props.theme.palette.text.light};
        border-radius: 5px;
        box-shadow: 0 0 5px ${(props) => props.theme.palette.text.primary},
            0 0 25px ${(props) => props.theme.palette.text.primary},
            0 0 50px ${(props) => props.theme.palette.text.primary},
            0 0 100px ${(props) => props.theme.palette.text.primary};
    }
}`;

const StylBtnSubmitForm = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    display: inline-block;
    padding: 10px 20px;
    transition: all 0.2s ease;
    backgroun-color: transparent;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};

    @media (min-width: 1024px) {
        &:hover {
            background: ${(props) => props.theme.palette.text.primary};
            color: ${(props) => props.theme.palette.text.light};
            border-radius: 5px;
            box-shadow: 0 0 5px ${(props) => props.theme.palette.text.primary},
                0 0 25px ${(props) => props.theme.palette.text.primary},
                0 0 50px ${(props) => props.theme.palette.text.primary},
                0 0 100px ${(props) => props.theme.palette.text.primary};
        }
    }

    ${props => props.isLoading && css`
        cursor: none;
        pointer-events: none;
    `}
`;

const StylLineBorder = styled.span`
    position: absolute;
    display: block;

    :nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
            90deg,
            transparent,
            ${(props) => props.theme.palette.text.primary}
        );
        animation: btn-anim1 2s linear infinite;
    }

    :nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
            180deg,
            transparent,
            ${(props) => props.theme.palette.text.primary}
        );
        animation: btn-anim2 2s linear infinite;
        animation-delay: 0.25s;
    }

    :nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(
            270deg,
            transparent,
            ${(props) => props.theme.palette.text.primary}
        );
        animation: btn-anim3 2s linear infinite;
        animation-delay: 0.5s;
    }

    :nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
            360deg,
            transparent,
            ${(props) => props.theme.palette.text.primary}
        );
        animation: btn-anim4 2s linear infinite;
        animation-delay: 0.75s;
    }

    @keyframes btn-anim4 {
        0% {
            bottom: -100%;
        }
        50%,
        100% {
            bottom: 100%;
        }
    }

    @keyframes btn-anim3 {
        0% {
            right: -100%;
        }
        50%,
        100% {
            right: 100%;
        }
    }

    @keyframes btn-anim2 {
        0% {
            top: -100%;
        }
        50%,
        100% {
            top: 100%;
        }
    }

    @keyframes btn-anim1 {
        0% {
            left: -100%;
        }
        50%,
        100% {
            left: 100%;
        }
    }
`;

const StylCenterBoxGradientForm = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    background-image: linear-gradient(
        ${(props) => props.theme.palette.backgroundGradien.primary}
    );
`;

const StylFormLogin = styled.form`
    position: relative;
    width: 100%;
    padding: 30px;
    top: 20px;
    min-height: calc(100vh - 20px);

    background-image: linear-gradient(
        ${(props) => props.theme.palette.backgroundGradien.main}
    );

    @media (min-width: 768px) {
        max-width: 450px;
        position: absolute;
        min-height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-right: -50%;
    }

    border-radius: 8px;
`;

const StylTitleForm = styled.h1`
    position: relative;
    font-size: ${(props) => props.theme.typography.textLarge.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    text-align: center;

    margin-bottom: 30px;
`;

const ArrowBack = styled(NavLink)`
    position: absolute;
    top: 42%;
    transform: traslateY(-50%);
    left: 0;

    @media (min-width: 1024px) {
        &:hover {
            &:after {
                transform: rotate(225deg) scale(1.1);
            }
        }

        &:active {
            &:after {
                border-color: ${(props) => props.theme.palette.main};
            }
        }
    }

    &:after {
        content: "";
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        transition: all 0.2s ease;
        border-top: 2px solid ${(props) => props.theme.palette.border.main};
        border-right: 2px solid ${(props) => props.theme.palette.border.main};
        transform: rotate(225deg);
    }
`;

export {
    StylBtnSubmitForm,
    StylLineBorder,
    StylCenterBoxGradientForm,
    StylFormLogin,
    StylTitleForm,
    ArrowBack,
    OtherForm,
    BoxBtnForm
};
