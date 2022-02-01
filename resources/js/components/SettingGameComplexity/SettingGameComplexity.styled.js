import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StylBoxRange = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 110px;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const StylLevelRange = styled.span`
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    background: ${(props) =>
        props.isRange === "range1"
            ? "linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%)"
            : props.isRange === "range2"
            ? "linear-gradient(            to right, #ffbe40 0%,  #ff6618 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255,   255, 10%) 100%)"
            : "linear-gradient(to right, #FF4242 0%, #F12A2A 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255, 255, 10%) 100%) "};

    box-shadow: 0 4px 41px #02b6c7;
`;

const StylTitleRange = styled.h3`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
`;

const StylHeaderRange = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
`;

const BtnSettings = styled(NavLink)`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding: 0 25px;
    margin-bottom: 20px;

    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    border: 3px solid #555abf;
    background: linear-gradient(180deg, #32325d 0, #555abf 90.87%);
    box-shadow: 0 2px 10px #257cff;
    border-radius: 69px;
    height: 50px;
    color: #fff;
    text-decoration: none;

    & > i {
        position: relative;
        margin-right: 10px;
        transition: all 0.2s ease;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }

    @media (min-width: 1024px) {
        &:hover {
            & > i {
                transform: rotate(45deg);
            }
        }
    }
`;

const StylStartBtn = styled.button`
    width: 100%;
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
    text-decoration: none;
    padding: 15px 60px;
    border-radius: 100px;
    align-self: center;
    border: 3px solid #982926;
    background: linear-gradient(180deg, #bd2726 0, #982926 90.87%);
    transition: all 0.2s ease;

    @media (min-width: 768px) {
        width: auto;
    }

    @media (min-width: 1024px) {
        &:hover {
            box-shadow: 0 0 10px 2px #982926;
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

const StylRangeBoxWidth = styled.div`
    position: relative;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.theme.palette.backgroundColor.dark};
    border-radius: 5px;

    #range1,
    div {
        animation: ${(props) =>
            props.isRange === "range1"
                ? "rangeGreen  6s infinite"
                : props.isRange === "range2"
                ? "rangeYellow 6s infinite"
                : "rangeRed 6s infinite"};

        box-shadow: ${(props) =>
            props.isRange === "range1"
                ? "0 0 6px rgb(9 252 179 / 60%)"
                : props.isRange === "range2"
                ? "0 0 6px rgb(255 181 85 / 60%)"
                : "0 0 6px #ff5546"};
    }

    div:first-child {
        position: absolute;
        height: 5px;
        background-color: ${(props) =>
            props.theme.palette.backgroundColor.main};
        width: ${(props) =>
            props.isMinCount ? "33%" : props.isActive ? "99%" : "66%"};
        transition: all 0.5s ease;
    }

    div:nth-child(2) {
        position: absolute;
        height: 5px;
        background: ${(props) =>
            props.isRange === "range1"
                ? "linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%)"
                : props.isRange === "range2"
                ? "linear-gradient(            to right, #ffbe40 0%,  #ff6618 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255, 255, 10%) 100%)"
                : "linear-gradient(to right, #FF4242 0%, #F12A2A 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255, 255, 10%) 100%) "};
        width: ${(props) => props.isWidth};
        transition: all 0.5s ease;
    }

    @keyframes rangeGreen {
        from,
        to {
            box-shadow: 0 0 1px #09fcb3;
        }
        50% {
            box-shadow: 0 0 10px #09fcb3;
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px #ffb555;
        }
        50% {
            box-shadow: 0 0 10px #ffb555;
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px #ff5a49;
        }
        50% {
            box-shadow: 0 0 10px #ff5a49;
        }
    }
`;

const StylBtnSelectRange = styled.button`
    cursor: ${(props) => props.isVip && "pointer"};
    pointer-events: ${(props) => (props.isVip ? "auto" : "none")};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${(props) =>
        props.isRange === "range1" && props.isActive
            ? "linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%)"
            : props.isRange === "range2" && props.isActive
            ? "linear-gradient(to right, #ffbe40 0%,  #ff6618 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255, 255, 10%) 100%)"
            : props.isRange === "range3" && props.isActive
            ? "linear-gradient(to right, #FF4242 0%, #F12A2A 100%, rgba(255, 255, 255, 10%) 100%, rgba(255, 255, 255, 10%) 100%)"
            : props.theme.palette.backgroundColor.main};

    box-shadow: ${(props) =>
        props.isRange === "range1"
            ? "0 4px 41px #02b6c7"
            : props.isRange === "range2"
            ? "0 0 16px #ffb555"
            : "0 0 16px #ff5a49"};
    border: none;
    outline: none;

    animation: ${(props) =>
        props.isRange === "range1"
            ? "rangeGreen  6s infinite"
            : props.isRange === "range2"
            ? "rangeYellow 6s infinite"
            : "rangeRed 6s infinite"};

    @media (min-width: 768px) {
        width: 20px;
        height: 20px;
    }

    @keyframes rangeGreen {
        from,
        to {
            box-shadow: 0 0 1px #09fcb3;
        }
        50% {
            box-shadow: 0 0 10px #09fcb3;
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px #ffb555;
        }
        50% {
            box-shadow: 0 0 10px #ffb555;
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px #ff5a49;
        }
        50% {
            box-shadow: 0 0 10px #ff5a49;
        }
    }
`;

const StylCenterRange = styled.div`
    position: relative;
    top: -7px;
    left: -5px;
    box-shadow: none !important;
    animation: none !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 103%;

    @media (min-width: 768px) {
        width: 101%;
    }
`;

const StylCenterListNumberTask = styled.ul`
    list-style: none;
    position: relative;
    top: 10px;
    left: -5px;
    box-shadow: none !important;
    animation: none !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 103%;

    @media (min-width: 768px) {
        width: 101%;
    }
`;

const StylItemNumberTask = styled.li`
    cursor: ${(props) => props.isVip && "pointer"};
    pointer-events: ${(props) => (props.isVip ? "auto" : "none")};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    width: 20px;
    height: 20px;
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) =>
        props.isActive
            ? props.theme.palette.text.light
            : props.theme.palette.text.main};
    border-radius: 50%;

    animation: ${(props) =>
        props.isRange === "range1"
            ? "rangeGreen  6s infinite"
            : props.isRange === "range2"
            ? "rangeYellow 6s infinite"
            : "rangeRed 6s infinite"};

    @media (min-width: 1024px) {
        width: 25px;
        height: 25px;
    }

    @keyframes rangeGreen {
        from,
        to {
            box-shadow: 0 0 1px #09fcb3;
        }
        50% {
            box-shadow: 0 0 10px #09fcb3;
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px #ffb555;
        }
        50% {
            box-shadow: 0 0 10px #ffb555;
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px #ff5a49;
        }
        50% {
            box-shadow: 0 0 10px #ff5a49;
        }
    }
`;

const StylBoxCountTask = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: auto;
`;

export {
    StylBoxRange,
    StylLevelRange,
    StylTitleRange,
    StylHeaderRange,
    BtnSettings,
    StylStartBtn,
    StylRangeBoxWidth,
    StylBtnSelectRange,
    StylCenterRange,
    StylCenterListNumberTask,
    StylItemNumberTask,
    StylBoxCountTask,
};
