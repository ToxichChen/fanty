import styled from "styled-components";

const StylBtnEyePassword = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    right: 26px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: none;
    transition: all 0.2s ease;
    z-index: 1;
    background-color: transparent;
`;

const StylIconInputEnd = styled.img`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: all 0.2s ease;
    z-index: 1;
`;

const StylIconInputStart = styled.img`
    position: absolute;
    left: 26px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    transition: all 0.2s ease;
    z-index: 1;
    border: none;
`;

const StylInputForm = styled.input`
    position: relative;
    border: none;
    outline: none;
    max-height: 58px;
    width: 100%;
    padding: 20px 26px 20px 64px;
    background-color: transparent;
    border-bottom: 2px solid
        ${(props) =>
            props.err
                ? `${props.theme.palette.error.border} !important`
                : props.theme.palette.border.main};
    transition: all 0.2s ease;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    font-weight: 400;
    color: ${(props) => props.theme.palette.main};

    ::placeholder {
        font-size: ${(props) => props.theme.typography.textSmall.primary};
        font-family: ${(props) => props.theme.typography.textFamily.main};
        color: ${(props) => props.theme.palette.main};
    }

    &:focus {
        border-color: ${(props) => props.theme.palette.backgroundBtn.main};
    }

    @media (min-width: 768px) {
        font-size: ${(props) => props.theme.typography.textMedium.main};

        ::placeholder {
            font-size: ${(props) => props.theme.typography.textMedium.main};
        }

        &:hover {
            border-color: ${(props) => props.theme.palette.backgroundBtn.main};
        }
    }
`;

const StylLabelFromInput = styled.label`
    display: block;
    position: absolute;
    top: calc(100% + 14px);
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.error.text};
    letter-spacing: -0.24px;
`;

const StylWrapperFormInput = styled.div`
    position: relative;
    width: 100%;
    min-width: 256px;
    transition: all 0.2s ease;
    margin-bottom: ${(props) => (props.err ? "60px" : "24px")};
    transition: all 0.2s ease;

    &:last-child {
        margin-bottom: 50px;
    }

    @media (min-width: 768px) {
        margin-bottom: ${(props) => (props.err ? "70px" : "40px")};
    }
`;

export {
    StylInputForm,
    StylBtnEyePassword,
    StylIconInputEnd,
    StylIconInputStart,
    StylLabelFromInput,
    StylWrapperFormInput,
};
