import styled from 'styled-components';
import { StylBasicLink } from '..';

const ArrowBack = styled(StylBasicLink)`
  position: absolute;
  top: 42%;
  transform: traslateY(-50%);
  left: 0;

  @media (min-width: 1024px) {
    &:hover {
      &:after {
        transform: rotate(225deg) scale(1.1);
      }
    }

    &:active {
      &:after {
        border-color: ${(props) => props.theme.palette.main};
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    transition: all 0.2s ease;
    border-top: 2px solid ${(props) => props.theme.palette.border.main};
    border-right: 2px solid ${(props) => props.theme.palette.border.main};
    transform: rotate(225deg);
  }
`;

export default ArrowBack;
