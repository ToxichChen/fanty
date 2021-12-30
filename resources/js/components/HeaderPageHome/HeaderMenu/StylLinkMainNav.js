import styled from 'styled-components';
import { StylBasicLink } from './../../';

const StylLinkMainNav = styled(StylBasicLink)`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-align: left;
  text-transform: capitalize;
  width: 100%;
  padding: 10px 15px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    width: auto;

    :hover {
      color: ${(props) => props.theme.palette.text.primary};
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

export default StylLinkMainNav;
