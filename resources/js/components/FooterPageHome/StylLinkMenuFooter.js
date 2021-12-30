import styled from 'styled-components';
import { StylLinkMainNav } from '..';

const StylLinkMenuFooter = styled(StylLinkMainNav)`
  position: relative;
  margin-right: 20px;
  font-size: 18px;
  max-width: 100px;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    left: 240%;
    top: 25%;
    display: block;
    width: 5px;
    height: 5px;
    border-top: 2px solid ${(props) => props.theme.palette.main};
    border-right: 2px solid ${(props) => props.theme.palette.main};
    border-radius: 5px;

    transform: rotate(135deg) translateY(-50%);
    transition: all 0.2s ease;
  }

  @media (min-width: 1024px) {
    &:hover {
      &:after {
        border-color: ${(props) => props.theme.palette.border.main};
      }
    }

    &:active {
      &:after {
        border-bottom: 2px solid ${(props) => props.theme.palette.border.main};
        border-left: 2px solid ${(props) => props.theme.palette.border.main};
        border-top: 2px solid transparent;
        border-right: 2px solid transparent;
      }
    }
  }
`;

export default StylLinkMenuFooter;
