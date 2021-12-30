import styled from 'styled-components';
import { StylBoxFlexColumnSpaceBetween } from './../../';
import { StylBtnBasic } from '../../';

const StylBtnReadMore = styled(StylBtnBasic)`
  position: relative;
  display: block;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.dark};
  background-color: ${(props) => props.theme.palette.backgroundColor.light};
  font-style: italic;
  text-transform: uppercase;
  max-width: 190px;
  width: 100%;
  padding: 24px 30px;
  text-align: center;
  align-self: center;
  margin-right: 12px;
  box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
  border-radius: 8px;
  z-index: 2 !important;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.palette.backgroundColor.light};
    border-radius: 8px;
    z-index: -1;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 9px;
    top: 10px;
    background: ${(props) => props.theme.palette.border.main};
    z-index: -2;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    &:hover {
      & > img {
        transform: translateX(10px);
      }
    }
  }
`;

const StylHeaderTitlePageHome = styled.h1`
  font-size: ${(props) => props.theme.typography.textLarge.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    font-size: 110px;
    margin: 0;
  }

  @media (min-width: 1024px) {
    font-size: 160px;
  }
`;

const StylHeaderTextPageHome = styled.p`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 1.6;
  text-align: center;
  transition: all 0.2s ease;
  padding: 0 20px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    top: -10px;
    font-size: ${(props) => props.theme.typography.textMedium.main};
    margin-bottom: 70px;
    opacity: 0.8;
    padding: 0;
    margin-bottom: 70px;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.typography.textMedium.primary};
  }
`;

const StylBoxContentHeaderPageHome = styled(StylBoxFlexColumnSpaceBetween)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  justify-content: center;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-image: url(${(props) => props.imgUrl});
  transition: all 0.2s ease;

  animation: ${(props) => (props.isSelect ? '2s opacityIn' : '1s opacityOut')};

  @keyframes opacityIn {
    0% {
      min-height: 0;
      opacity: 0.5;
    }

    100% {
      min-height: 100vh;
      opacity: 1;
    }
  }

  @keyframes opacityOut {
    0% {
      min-height: 100vh;
      opacity: 1;
    }

    100% {
      min-height: 0;
      opacity: 0;
    }
  }
`;

export {
  StylBtnReadMore,
  StylHeaderTitlePageHome,
  StylHeaderTextPageHome,
  StylBoxContentHeaderPageHome,
};
