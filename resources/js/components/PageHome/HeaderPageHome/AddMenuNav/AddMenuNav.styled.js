import styled, { css } from "styled-components";

const BoxAddMenu = styled.ul`
    position: absolute;
    animation: ${(props) => (props.isShow ? "1s slideIn" : "0.5s slideOut")};
    opacity: ${(props) => (props.isShow ? "1" : "0")};
    z-index: ${(props) => (props.isShow ? "1" : "-1")};
    visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
    display: flex;
    top: 30px;
    left: 10px;
    min-width: 150px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 10px;
    border-radius: 8px;
    list-style: none;
    transition: all 0.5s ease;

    @keyframes slideIn {
        0% {
            height: 0px;
        }
        100% {
            height: 135px;
        }
    }

    @keyframes slideOut {
        0% {
            height: 135px;
        }
        100% {
            height: 0;
        }
    }

    ${(props) =>
        props.typeMenu
            ? css`
                  background-color: ${(props) =>
                      props.theme.palette.backgroundColor.dark};
              `
            : css`
                  background-image: linear-gradient(
                      ${(props) =>
                          props.theme.palette.backgroundGradien.primary}
                  );
              `}
`;

const StylItemAddMenu = styled.li`
    padding: 0 10px;
    width: 100%;
    white-space: nowrap;
    text-align: left;

    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

const StylLinkAddMenu = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    width: 100%;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
        &:hover {
            color: ${(props) => props.theme.palette.text.primary};
        }
    }
`;

export { BoxAddMenu, StylItemAddMenu, StylLinkAddMenu };
