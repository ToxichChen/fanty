import styled from 'styled-components';
import { StylBtnBasic } from './../../index';
import iconBurgerSvg from './../../../img/icons/icon-burger-menu.svg';

const StylBtnMenuNavPageHome = styled(StylBtnBasic)`
  position: relative;
  width: 40px;
  height: 30px;
  border-radius: 8px;
  transition: all 0.2s ease;

  transform: ${(props) => props.open && 'rotate(90deg)'};

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 15px;
    top: 50%;
    left: 25%;
    transform: translateY(-50%);
    background-image: url(${iconBurgerSvg});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default StylBtnMenuNavPageHome;
