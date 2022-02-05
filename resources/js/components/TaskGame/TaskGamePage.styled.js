import styled, { css } from "styled-components";
import imgBGFromGameJPG from "./../../assets/bg/bg-image.jpg";
import imgBGMobileFromGameJPG from "./../../assets/bg/bg-image-mobile.jpg";
import { NavLink } from "react-router-dom";

const SectionTaskGame = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${imgBGMobileFromGameJPG});
    padding: 130px 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    box-shadow: 0 0 0 1000px inset rgba(0, 0, 0, 0.5);

    @media (min-width: 1024px) {
        padding: 50px 20px;
        background-size: cover;
        background-image: url(${imgBGFromGameJPG});
    }
`;

const StylBoxContentTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    width: 100%;
`;

const StylBoxTaskBtnsPeople = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.theme.palette.backgroundColor.main};

    @media (min-width: 500px) {
        flex-direction: row;
    }
`;

const StylBtnTask = styled.button`
    cursor: pointer;
    width: 100%;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) =>
        props.isType === "level2"
            ? props.theme.palette.backgroundBtn.second
            : props.isType === "level3"
            ? props.theme.palette.error.btn
            : props.isType === "task"
            ? props.theme.palette.backgroundBtn.primary
            : props.theme.palette.backgroundBtn.dark};
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:last-child {
        margin-right: 0;
        margin-bottom: 0;
    }

    & > i {
        margin-right: 5px;
        transition: all 0.2s ease;
    }

    @media (min-width: 500px) {
        margin-right: 10px;
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        width: auto;
    }

    @media (min-width: 1024px) {
        &:active {
            transform: scale(1.1);
        }
    }

    ${(props) =>
        props.isPreLastBtn &&
        css`
            margin-right: 0;
            border-radius: 5px;

            @media (min-width: 500px) {
                margin-right: 0;
            }

            @media (min-width: 1024px) {
                margin-right: 0;
                &:hover {
                    & > i {
                        transform: translateY(-5px);
                    }
                }
            }
        `}

    ${(props) =>
        props.isLastBtn &&
        css`
            border-radius: 5pxx;

            @media (min-width: 1024px) {
                &:hover {
                    & > i {
                        transform: translateY(5px);
                    }
                }
            }
        `}
`;

const StylBoxTask = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    padding: 50px 20px;
`;

const StylTitleTask = styled.h2`
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 20px;
    text-align: center;
`;

const StylTextTask = styled.p`
    max-width: 600px;
    width: 100%;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 15px;
    text-align: center;
`;

const StylImgTask = styled.img`
    max-width: 500px;
    width: 100%;
    object-fit: cover;
    filter: blur(4px);
    margin: 0 auto;
    margin-bottom: 20px;
`;

const StylBoxFeatures = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(58, 58, 58, 0.8);

    @media (min-width: 500px) {
        flex-direction: row;
    }
`;

const StylTimeTask = styled.i`
    display: ${(props) => (props.isTime ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border-radius: 50%;
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.error.icon};
    box-shadow: 0 0 10px 2px ${(props) => props.theme.palette.error.icon};
`;

const StylLinkSettings = styled(NavLink)`
    cursor: pointer;
    width: 100%;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) => props.theme.palette.backgroundBtn.dark};
    text-decoration: none;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: all 0.2s ease;

    & > i {
        margin-right: 5px;
    }

    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 500px) {
        margin-right: 10px;
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        width: auto;
    }

    @media (min-width: 1024px) {
        &:hover {
            & > i {
                animation: ${(props) =>
                    props.isDontRoll
                        ? "none"
                        : "rotating 1.5s linear infinite"};
            }
        }

        &:active {
            transform: scale(1.1);
        }
    }

    ${(props) =>
        props.isGameTo &&
        css`
            background-color: ${(props) =>
                props.theme.palette.backgroundBtn.primary};

            & > i {
                position: relative;
                margin-left: 5px;
                top: 1px;
                transition: all 0.2s ease;
            }

            @media (min-width: 1024px) {
                &:hover {
                    & > i {
                        animation: none;
                        transform: translateX(5px);
                    }
                }
            }
        `}

    @keyframes rotating {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const StylBoxReview = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    margin-top: 15px;
`;

const BtnReview = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    pointer-events: ${(props) => props.isClick && "none"};
    opacity: ${(props) => (props.isClick ? "0.5" : "1")};
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;

    &:first-child {
        margin-right: 10px;
    }

    & > i {
        color: ${(props) => props.theme.palette.text.light};
        font-size: 20px;
        transition: all 0.2s ease;
    }

    @media (min-width: 1024px) {
        &:hover {
            & > i {
                color: ${(props) => props.theme.palette.text.primary};
            }
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

const StylBoxBtn = styled.div`
    display: flex;
    flex-direction: row;
`;

export {
    StylBoxReview,
    BtnReview,
    StylLinkSettings,
    StylTimeTask,
    SectionTaskGame,
    StylBoxContentTask,
    StylBoxTaskBtnsPeople,
    StylBtnTask,
    StylBoxTask,
    StylTitleTask,
    StylTextTask,
    StylImgTask,
    StylBoxFeatures,
    StylBoxBtn,
};
