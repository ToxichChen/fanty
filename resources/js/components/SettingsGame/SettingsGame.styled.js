import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StylTitleSettings = styled.h2`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  text-align: center;
  padding: 10px;
  background-color: rgba(35, 35, 35, 0.8);
  width: 100%;
`;

const StylLinkFeatureSettings = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  text-decoration: none;
  white-space: nowrap;

  @media (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }

  & > i {
    font-size: 35px;
    margin-bottom: 5px;
  }
`;

const StylBoxSettingsGame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 20px;
`;

const StylSettingsOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 45%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const StylListOptionsSettings = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StylBtnRadioList = styled.button`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  text-align: left;
  padding: 10px 40px;
  white-space: nowrap;
  width: 100%;
  border: 1px solid ${(props) => props.theme.palette.border.dark};
  outline: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  z-index: 1;
  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.palette.main};
    border-radius: 50%;
  }

  ${(props) =>
    props.isMode &&
    css`
      border-radius: 8px;
      &:after {
        background-color: ${(props) => props.theme.palette.backgroundBtn.dark};
      }
    `}

  ${(props) =>
    props.isMode !== true &&
    props.isMode !== false &&
    css`
      pointer-events: none;
      &:after {
        background-color: ${(props) => props.theme.palette.error.icon};
      }
    `}
`;

const StylBtnLine = styled.span`
  ${(props) =>
    props.isMode &&
    css`
      position: absolute;
      top: 50%;
      left: 15px;
      background-color: ${(props) => props.theme.palette.backgroundColor.main};
      transform: rotate(90deg);
      width: 10px;
      height: 2px;
      z-index: 1;

      &:last-child {
        position: absolute;
        top: 50%;
        left: 15px;
        background-color: ${(props) =>
          props.theme.palette.backgroundColor.main};
        transform: rotate(0);
        width: 10px;
        height: 2px;
        z-index: 1;
      }
    `}

  ${(props) =>
    props.isMode === false &&
    css`
      position: absolute;
      top: 50%;
      left: 18px;
      background-color: ${(props) => props.theme.palette.backgroundColor.main};
      transform: rotate(135deg);
      width: 10px;
      height: 2px;
      z-index: 1;

      &:last-child {
        position: absolute;
        top: 53%;
        left: 15px;
        background-color: ${(props) =>
          props.theme.palette.backgroundColor.main};
        transform: rotate(45deg);
        width: 6px;
        height: 2px;
        z-index: 1;
      }
    `}

    ${(props) =>
    props.isMode !== true &&
    props.isMode !== false &&
    css`
      position: absolute;
      top: 50%;
      left: 15px;
      background-color: ${(props) => props.theme.palette.backgroundColor.main};
      transform: rotate(135deg);
      width: 10px;
      height: 2px;
      pointer-events: none;
      z-index: 1;

      &:last-child {
        position: absolute;
        top: 50%;
        left: 15px;
        background-color: ${(props) =>
          props.theme.palette.backgroundColor.main};
        transform: rotate(45deg);
        width: 10px;
        height: 2px;
        z-index: 1;
      }
    `}
`;

const StylListAnotherOption = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  opacity: 0;
  flex-direction: column;
  transition: all 0.5s ease;
  z-index: -10;
  animation: ${(props) =>
    props.isShowOptions ? '0.5s slideOut' : '1s slideIn'};
  background-color: ${(props) => props.theme.palette.backgroundColor.main};

  ${(props) =>
    props.isShowOptions === false &&
    css`
      position: relative;
      display: flex;
      width: 100%;
      opacity: 1;
      height: auto;
      flex-direction: column;
      transition: all 0.2s ease;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      z-index: 2;
    `}

  @keyframes slideIn {
    from {
      height: 0px;
      top: 123px;
    }
    to {
      height: 123px;
      top: 0px;
    }
  }

  @keyframes slideOut {
    from {
      height: 123px;
      top: 0;
    }
    to {
      height: 0px;
      top: 123px;
    }
  }
`;

const StylBtnRadioBtn = styled.button`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  background-color: ${(props) => props.theme.palette.backgroundColor.main};
  text-align: left;
  padding: 10px 40px;
  white-space: nowrap;
  width: 100%;
  border: 1px solid ${(props) => props.theme.palette.border.dark};
  outline: none;
  transition: all 0.2s ease;
  z-index: 1;

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    background-color: ${(props) => props.theme.palette.backgroundColor.main};
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  ${(props) =>
    props.isChecked &&
    css`
      &:after {
        box-shadow: 0 0 10px 1px inset #000;
        box-shadow: 0 0 10px 1px #000;
        transition: all 0.2s ease;
      }

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 14px;
        transform: translateY(-50%);
        width: 11px;
        height: 11px;
        border: 1px solid transparent;
        border-radius: 50%;
        background-color: ${(props) => props.theme.palette.backgroundBtn.dark};
        transition: all 0.2s ease;
        z-index: 2;
      }
    `}
`;

export {
  StylBtnRadioBtn,
  StylListAnotherOption,
  StylBtnLine,
  StylListOptionsSettings,
  StylTitleSettings,
  StylLinkFeatureSettings,
  StylBoxSettingsGame,
  StylSettingsOptions,
  StylBtnRadioList,
};
