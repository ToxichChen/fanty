import styled, { css } from "styled-components";
import { StylBoxFlexRowSpaceBetween } from "./../../../common/BasicBoxes/BasicBoxes.styled";
import iconBurgerSvg from "./../../../../assets/icons/icon-burger-menu.svg";

const StylImgLogo = styled.img`
    position: relative;
    width: 120px;
    height: 20px;
    align-self: center;
    object-fit: contain;

    @media (min-width: 768px) {
        min-width: 170px;
        min-height: 30px;
    }
`;

const StylBtnMenuNavPageHome = styled.a`
    cursor: pointer;
    text-decoration: none;
    position: relative;
    width: 40px;
    height: 30px;
    border-radius: 8px;
    transition: all 0.2s ease;

    transform: ${(props) => props.open && "rotate(90deg)"};

    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 15px;
        top: 50%;
        left: 25%;
        transform: translateY(-50%);
        background-image: url(${iconBurgerSvg});
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 1;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

const StylBoxNavMenuPageHome = styled(StylBoxFlexRowSpaceBetween)`
    position: relative;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    background-color: ${(props) => props.theme.palette.backgroundColor.dark};
    border-radius: 8px;
    padding: 20px;
    z-index: 2;
`;

const StylBoxMainMenuPageHome = styled.ul`
    position: absolute;
    top: calc(100% - 10px);
    left: ${(props) => (props.open ? "0" : "-120%")};
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.palette.backgroundColor.dark};
    list-style: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.2s ease-in-out;
    animation: ${(props) => (props.open ? "1s slidein" : "0.5s slideout")};

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        position: static;
    }

    @media (min-width: 1024px) {
        width: auto;
    }

    @keyframes slidein {
        0% {
            left: -120%;
        }
        100% {
            left: 0;
        }
    }

    @keyframes slideout {
        0% {
            left: 0;
        }
        100% {
            left: -120%;
        }
    }
`;

const StylItemMainNav = styled.li`
    width: 100%;
    display: flex;

    @media (min-width: 1024px) {
        width: auto;
    }
`;

const StylLinkMainNav = styled.div`
    cursor: pointer;
    display: flex;
    position: relative;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: left;
    text-transform: capitalize;
    width: 100%;
    padding: 10px 15px;
    transition: all 0.2s ease;

    & > a {
        text-decoration: none;
        white-space: nowrap;
        transition: all 0.2s ease;
        width: 100%;
        color: ${(props) => props.theme.palette.text.light};
    }

    &:visited {
        color: ${(props) => props.theme.palette.text.light};
    }

    @media (min-width: 768px) {
        text-align: center;
    }

    @media (min-width: 1024px) {
        width: auto;

        &:hover {
            color: ${(props) => props.theme.palette.text.primary};
            & > a {
                color: ${(props) => props.theme.palette.text.primary};
            }
        }

        &:active {
            & > a {
                transform: scale(1.1);
            }
        }
    }

    ${(props) =>
        props.isAddMenu &&
        css`
            &:after {
                content: "";
                position: absolute;
                left: 90%;
                top: 30%;
                display: block;
                width: 5px;
                height: 5px;
                border-top: 2px solid ${(props) => props.theme.palette.main};
                border-right: 2px solid ${(props) => props.theme.palette.main};

                transform: rotate(135deg) translateY(-50%);
                transition: all 0.2s ease;
            }

            @media (min-width: 1024px) {
                &:hover {
                    &:after {
                        border-color: ${(props) =>
                            props.theme.palette.border.main};
                    }
                }

                &:active {
                    &:after {
                        border-bottom: 2px solid
                            ${(props) => props.theme.palette.border.main};
                        border-left: 2px solid
                            ${(props) => props.theme.palette.border.main};
                        border-top: 2px solid transparent;
                        border-right: 2px solid transparent;
                    }
                }
            }
        `}
`;

export {
    StylImgLogo,
    StylBtnMenuNavPageHome,
    StylBoxNavMenuPageHome,
    StylBoxMainMenuPageHome,
    StylItemMainNav,
    StylLinkMainNav,
};
