import styled from 'styled-components';
import { StylBoxFlexRowSpaceBetween } from './../../';
import { StylBtnBasic } from './../../index';
import iconBurgerSvg from './../../../img/icons/icon-burger-menu.svg';

const StylImgLogo = styled.img`
  position: relative;
  width: 120px;
  height: 20px;
  align-self: center;
  object-fit: contain;

  @media (min-width: 768px) {
    min-width: 170px;
    min-height: 30px;
  }
`;

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

const StylBoxNavMenuPageHome = styled(StylBoxFlexRowSpaceBetween)`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
  background-color: ${(props) => props.theme.palette.backgroundColor.dark};
  border-radius: 8px;
  padding: 20px;
  z-index: 2;
`;

const StylBoxMainMenuPageHome = styled.ul`
  position: absolute;
  top: calc(100% - 10px);
  left: ${(props) => (props.open ? '0' : '-120%')};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.backgroundColor.dark};
  list-style: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: all 0.2s ease-in-out;
  animation: ${(props) => (props.open ? '1s slidein' : '0.5s slideout')};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: static;
  }

  @media (min-width: 1024px) {
    width: auto;
  }

  @keyframes slidein {
    0% {
      left: -120%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes slideout {
    0% {
      left: 0;
    }
    100% {
      left: -120%;
    }
  }
`;

const StylItemMainNav = styled.li`
  width: 100%;
  display: flex;

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const StylLinkMainNav = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-align: left;
  text-transform: capitalize;
  width: 100%;
  padding: 10px 15px;
  transition: all 0.2s ease;

  & > a {
    text-decoration: none;
    transition: all 0.2s ease;
    color: ${(props) => props.theme.palette.text.light};
  }

  &:visited {
    color: ${(props) => props.theme.palette.text.light};
  }

  @media (min-width: 768px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    width: auto;

    &:hover {
      & > a {
        color: ${(props) => props.theme.palette.text.primary};
      }
    }

    &:active {
      & > a {
        transform: scale(1.1);
      }
    }
  }
`;

export {
  StylImgLogo,
  StylBtnMenuNavPageHome,
  StylBoxNavMenuPageHome,
  StylBoxMainMenuPageHome,
  StylItemMainNav,
  StylLinkMainNav,
};
