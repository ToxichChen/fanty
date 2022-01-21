import styled, { css } from "styled-components";

const StylBoxWrapperOptions = styled.div`
    flex-direction: column;

    display: ${(props) => (props.isVip ? "flex" : "none")};

    ${(props) =>
        props.isVip &&
        css`
            display: flex;
        `}
`;
const StylLabelRadio = styled.label`
    position: absolute;
    top: 0;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #151924;
    transition: all 0.2s ease;

    &::after {
        display: block;
        color: white;
        width: 12px;
        height: 12px;
        margin: 4px;
    }

    ${(props) =>
        props.isVip &&
        css`
            pointer-events: none;
            width: 20px;
            height: 20px;
            border: 4px solid #191c2b;
            border-radius: 50%;
            background: red !important;
        `}
`;

const StylWrapperRadioBtn = styled.div`
    position: relative;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`;

const StylRadioSetting = styled.input`
    position: relative;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 10px;

    ${(props) =>
        props.isVip &&
        css`
            pointer-events: none;

            &:checked + ${StylLabelRadio} {
                background: red;
            }

            &:checked + ${StylWrapperRadioBtn} {
                &::after {
                    background: red;
                }
            }
        `}

    &:hover ~ ${StylLabelRadio} {
        background: #ccc;
    }

    &:checked + ${StylWrapperRadioBtn} {
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%);
        }
    }

    &:checked + ${StylLabelRadio} {
        width: 20px;
        height: 20px;
        border: 4px solid #191c2b;
        border-radius: 50%;
        background: linear-gradient(270deg, #09ffb1 0, #00a6cb 105.26%);
    }
`;

export {
    StylBoxWrapperOptions,
    StylRadioSetting,
    StylWrapperRadioBtn,
    StylLabelRadio,
};
