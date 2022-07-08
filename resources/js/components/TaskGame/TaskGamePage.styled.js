import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import imgBGMobileFromGameJPG from "./../../assets/bg/fanty.png";
import imgJPG from "./../../assets/bg/fanty-pk.png";

const SectionTaskGame = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-blend-mode: multiply;
    background-image: url(${imgBGMobileFromGameJPG});
    background-color: ${(props) => props.theme.palette.backgroundRGB.main};
    background-size: cover;
    padding: 130px 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;

    @media (min-width: 1024px) {
        background-image: url(${imgJPG});
        padding: 50px 20px;
        background-size: cover;
    }
`;

const StylBoxContentTask = styled.div`
    position: relative;
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
    opacity: ${(props) =>
        props.isType === "green"
            ? "1"
            : props.isType === "yellow"
                ? "1"
                : props.isType === "red"
                    ? "1"
                    : "0.5"};
    pointer-events: ${(props) =>
        props.isType === "green"
            ? "auto"
            : props.isType === "yellow"
                ? "auto"
                : props.isType === "red"
                    ? "auto"
                    : "none"};
    width: 100%;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    background-color: ${(props) =>
        props.isType === "green"
            ? props.theme.palette.backgroundBtn.primary
            : props.isType === "yellow"
                ? props.theme.palette.backgroundBtn.second
                : props.isType === "red"
                    ? props.theme.palette.error.btn
                    : props.theme.palette.backgroundBtn.dark};
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    transition: all 0.2s ease;

    & > i {
        margin-right: 5px;
        transition: all 0.2s ease;
    }

    @media (min-width: 768px) {
        width: auto;
        margin-bottom: 0;

        &:last-child {
            margin-left: 5px;
        }
    }

    @media (min-width: 1024px) {
        &:active {
            transform: scale(1.1);
        }
    }

    ${(props) =>
        props.isPreLastBtn &&
        css`
            pointer-events: ${(props) => props.isType === "red" && "none"};
            backgroun-color: ${(props) =>
                props.isType === "red" &&
                props.theme.palette.backgroundBtn.dark};
            margin-right: 0;
            border-radius: 5px;

            opacity: ${(props) => props.isType === "red" && "0.5"};

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
        props.isArrowRight &&
        css`
            @media (min-width: 1024px) {
                &:hover {
                    & > i {
                        transform: translateX(5px);
                    }
                }
            }
        `}

        ${(props) =>
        props.isCancel &&
        css`
            @media (min-width: 1024px) {
                &:hover {
                    & > i {
                        animation: 5s rotate-circle linear infinite;
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

        @keyframes rotate-circle {
        100% {
            transform: rotate(360deg);
        }
    }
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
    transition: all 0.2s ease;
    margin-top: 25px;

    @media (min-width: 1024px){
        margin-top: 0;
    }
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
    margin: 0 auto;
    margin-bottom: 20px;
`;

const StylBoxFeatures = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${props => props.theme.palette.backgroundRGB.middle};

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
    margin-right: 10px;
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
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
    }
`;

const CountTask = styled.p`
    position: absolute;
    top: 20px;
    right: 50px;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
`;

const StylSubTitleTask = styled.h4`
    text-align: center;
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 10px;
`;

const StylArrowBackToHome = styled(NavLink)`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 20px;
    height: 20px;
    text-decoration: none;

    & > i {
        color: ${(props) => props.theme.palette.icon.light};
        transition: all 0.2s ease;
    }

    @media (min-width: 1024px) {
        &:hover {
            color: ${(props) => props.theme.palette.icon.main};
        }
    }
`;

const StylBoxLeftAngle = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
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
    CountTask,
    StylSubTitleTask,
    StylArrowBackToHome,
    StylBoxLeftAngle
};
