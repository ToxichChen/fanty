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
            ? props => props.theme.palette.backgroundGradienRange.main
            : props.isRange === "range2"
                ? props => props.theme.palette.backgroundGradienRange.primary
                : props => props.theme.palette.backgroundGradienRange.second};

    box-shadow: 0 4px 41px ${props => props.theme.palette.shadow.middle};
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
    border: 3px solid ${props => props.theme.palette.border.second};
    background: linear-gradient(${props => props.theme.palette.backgroundGradien.light});
    box-shadow: 0 2px 10px ${props => props.theme.palette.shadow.main};
    border-radius: 69px;
    height: 50px;
    color: ${props => props.theme.palette.text.light};
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
    border: 3px solid ${props => props.theme.palette.error.border};
    background: linear-gradient(${props => props.theme.palette.backgroundGradien.error});
    transition: all 0.2s ease;

    @media (min-width: 768px) {
        width: auto;
    }

    @media (min-width: 1024px) {
        &:hover {
            box-shadow: 0 0 10px 2px ${props => props.theme.palette.error.shadow};
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
            ? props => props.theme.palette.backgroundGradienRange.main
            : props.isRange === "range2"
                ? props => props.theme.palette.backgroundGradienRange.primary
                : props => props.theme.palette.backgroundGradienRange.second};
                width: ${(props) => props.isWidth};
        transition: all 0.5s ease;
    }

    @keyframes rangeGreen {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.main};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.main};
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.primary};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.primary};
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.second};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.second};
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
            ? props => props.theme.palette.backgroundGradienRange.main
            : props.isRange === "range2" && props.isActive
                ? props => props.theme.palette.backgroundGradienRange.primary
                : props.isRange === "range3" && props.isActive
                    ? props => props.theme.palette.backgroundGradienRange.second
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
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.main};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.main};
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.primary};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.primary};
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.second};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.second};
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
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.main};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.main};
        }
    }

    @keyframes rangeYellow {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.primary};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.primary};
        }
    }

    @keyframes rangeRed {
        from,
        to {
            box-shadow: 0 0 1px ${props => props.theme.palette.shadowRange.second};
        }
        50% {
            box-shadow: 0 0 10px ${props => props.theme.palette.shadowRange.second};
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
