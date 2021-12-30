import styled, { css } from 'styled-components';
import { StylBtnBasic } from '..';

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

export default StylCounterHeaderPageHome;
