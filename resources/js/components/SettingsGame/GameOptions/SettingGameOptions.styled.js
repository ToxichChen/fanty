import styled, { css } from "styled-components";

const StylBtnOpenSetting = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 18px;

    & > i {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: 10px;
        font-size: 12px;
        background: linear-gradient(180deg, #555abf 0, #32325d 90.87%);
        transition: all 0.2s ease;
        transform: rotate(${(props) => (props.isShow ? "90deg" : "0")});
    }

    ${(props) =>
        props.isOpen &&
        css`
            & > i {
                transform: rotate(90deg);
            }
        `}
`;

const StylWrapperSettings = styled.div`
    display: ${(props) => (props.isShow ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;

    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export { StylBtnOpenSetting, StylWrapperSettings };
