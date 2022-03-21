import styled from "styled-components";

const StylModalSettings = styled.div`
    position: absolute;
    display: ${(props) =>
        props.isVisible ? "flex !important" : "none !important"};
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 850px;
    width: 100%;
    background: ${props => props.theme.palette.backgroundRGB.second};
    border-radius: 31px;
    border: 1px solid ${props => props.theme.palette.backgroundRGB.dark};
    padding: 25px;
    z-index: 100;
`;

const StylTitleModalSettings = styled.h3`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};'
`;

const StylBtnSaveAndClose = styled.button`
    cursor: pointer;
    display: block;
    padding: 5px 10px;
    align-self: flex-end;
    border: 3px solid ${props => props.theme.palette.border.second};
    background: linear-gradient(${props => props.theme.palette.backgroundGradien.light});
    box-shadow: 0 2px 10px ${props => props.theme.palette.shadow.main};
    border-radius: 69px;
    height: 50px;
    color: ${props => props.theme.palette.text.light};
    text-decoration: none;
`;

const StylImgModal = styled.img`
    margin-right: 10px;
`;

const StylTextModal = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
`;

export {
    StylModalSettings,
    StylTitleModalSettings,
    StylBtnSaveAndClose,
    StylImgModal,
    StylTextModal,
};
