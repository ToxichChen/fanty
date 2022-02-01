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
    background: rgba(42, 46, 66, 0.97);
    border-radius: 31px;
    border: 1px solid rgba(0, 0, 0, 0.2);
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
    border: 3px solid #555abf;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#32325d),
        color-stop(90.87%, #555abf)
    );
    background: linear-gradient(180deg, #32325d 0, #555abf 90.87%);
    box-shadow: 0 2px 10px #257cff;
    border-radius: 69px;
    height: 50px;
    color: #fff;
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
