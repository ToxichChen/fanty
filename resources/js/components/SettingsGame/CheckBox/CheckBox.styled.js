import styled, { css } from "styled-components";
import iconCloseSVG from "./../../../assets/icons/icon-close.svg";

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    pointer-events: ${(props) => props.checked === "a" && "none"};
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${(props) => props.checked === "a" && iconCloseSVG}),
        ${(props) =>
        props.checked === true
            ? props.theme.palette.backgroundGradienRange.main
            : props.checked === "a"
                ? "red"
                : "transparent"};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    border: 1px solid ${(props) => props.theme.palette.main};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px #00a6cb;
    }

    ${Icon} {
        visibility: ${(props) =>
        props.checked === true ? "visible" : "hidden"};
    }
`;

const StylLabel = styled.label`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    width: 100%;

    &:last-child {
        margin-bottom: 0;
    }

    ${props => props.isDisabled && css`
        cursor: none;
        pointer-events: none;
        opacity: 0.5;
    `}
`;

const StylTextLabel = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    width: 100%;
    margin-left: 8px;
`;

const StylBoxInfo = styled.p`
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    min-width: 150px;
    max-width: 200px;
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    background-color: transparent;
    text-align: center;
    border-radius: 8px;
    padding: 10px;
    letter-spacing: 1.2px;
    visibility: ${(props) => (props.isHidden ? "visible" : "hidden")};
    transition: all 0.2s ease;

    &:empty{
        display: none;
    }

    ${props => props.isTaskNow && css`
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
        @media(max-width: 1024px){    
            left: -150px;
            transform: translateX(0);
        }
    `}
`;

const StylBoxAddInfoTask = styled.button`
    position: absolute;
    right: 20px;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    border: none;
    outline: none;
    border-radius: 50%;

    & > i {
        font-size: 10px;
        color: ${(props) => props.theme.palette.icon.light};
    }

    ${(props) =>
        props.isTask &&
        css`
            right: 25px;
            top: 17px;
            max-width: 180px;

            ${StylBoxInfo} {
                top: calc(100% + 10px);
                max-width: 150px;
                background-color: ${props => props.theme.palette.backgroundRGB.middle};
                bottom: auto;
                background-color: ${props => props.theme.palette.backgroundBtn.main};
            }
        `}

    @media (min-width: 1024px) {
        &:hover {
            ${StylBoxInfo} {
                background-color: ${props => props.theme.palette.backgroundRGB.middle};
                visibility: visible;
            }
        }
    }
`;

export {
    StylBoxAddInfoTask,
    StylBoxInfo,
    CheckboxContainer,
    Icon,
    HiddenCheckbox,
    StyledCheckbox,
    StylLabel,
    StylTextLabel,
};
