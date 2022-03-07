import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import {
    StylImgLogo,
    StylLinkMainNav,
} from "./../HeaderPageHome/HeaderMenu/HeaderMenu.styled";

const StylBoxFooterPageHome = styled.div`
    background: linear-gradient(
        ${(props) => props.theme.palette.backgroundGradien.primary}
    );
    padding: 60px 15px 25px;
    width: 100%;
`;

const StylImgLogoMagin = styled(StylImgLogo)`
    max-width: 200px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    margin-bottom: 62px;
`;

const StylCopyrightFooter = styled.p`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.main};
    text-align: center;
`;

const StylItemMenuFooter = styled.li`
    position: relative;
    text-align: center;
    padding: 10px;
`;

const StylLinkMenuFooter = styled(StylLinkMainNav)`
    cursor: pointer;
    position: relative;
    margin-right: 20px;
    font-size: 18px;
    white-space: nowrap;

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

const StylMenuFooterPageHome = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-self: center;
    padding-bottom: 20px;

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

const LinkFooter = styled(NavLink)`
    cursor: pointer;
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-decoration: none;
    transition: all 0.2s ease;

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
`;

export {
    StylBoxFooterPageHome,
    StylImgLogoMagin,
    StylCopyrightFooter,
    StylItemMenuFooter,
    StylLinkMenuFooter,
    StylMenuFooterPageHome,
    LinkFooter,
};
