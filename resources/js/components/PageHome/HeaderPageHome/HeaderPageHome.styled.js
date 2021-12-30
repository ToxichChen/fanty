import styled, { css } from 'styled-components';
import { StylBtnBasic } from '../..';
import { StylBoxFlexColumnSpaceBetween } from './../../common/BasicBoxes/';

const StylHeaderPageHome = styled(StylBoxFlexColumnSpaceBetween)`
  min-height: 100vh;
  padding: 25px 15px;
  z-index: 2;
`;

const StylCounterHeaderPageHome = styled(StylBtnBasic)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 40px;
  height: 40px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  border-radius: 25%;
  transition: all 0.2s ease;

  ${(props) =>
    props.isSelect &&
    css`
      border-radius: 50%;
      color: ${(props) => props.theme.palette.text.primary};
      border: 2px solid ${(props) => props.theme.palette.border.main};
    `}

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.primary};
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

const StylArrowNextPageHome = styled.img`
  content: '';
  position: absolute;
  cursor: pointer;
  display: block;
  width: 55px;
  height: 55px;
  bottom: 20px;
  right: 10px;
  transition: all 0.2s ease;
  z-index: 2;

  @media (min-width: 768px) {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    right: 100px;
    &:hover {
      transform: scale(1.1) translateY(-50%) translateX(5px);
    }
  }
`;

export { StylHeaderPageHome, StylCounterHeaderPageHome, StylArrowNextPageHome };
