import styled, { css } from 'styled-components';
import bgMobileFantyPNG from './../../assets/bg/muzyka.png';

const StylBoxPagePlayer = styled.section`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-conten: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.backgroundColor.second};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${bgMobileFantyPNG});
`;

const StylBoxCenterPlayer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 800px;
  width: 100%;
  border-radius: 8px;
  background-color: ${props => props.theme.palette.backgroundRGB.middle};
`;

const StylImgPlayer = styled.img`
  position: relative;
  top: -40px;
  align-self: center;
  max-width: 100px;
  max-height: 100px;
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 5px 20px 50px 0px rgb(17 17 17 / 40%);
  border-radius: 8px;
  transition: all 0.2s ease;

  @media (min-width: 550px) {
    max-width: 230px;
    min-height: 230px;
  }
`;

const StylBoxFuncPlayer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
`;

const StylBtnPlayer = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  background-color: transparent;
  transition: all 0.2s ease;

  & > i {
    color: ${(props) => props.theme.palette.icon.light};
    font-size: 15px;
    transition: all 0.2s ease;
  }

  &:first-child {
    margin-right: 10px;
  }

  @media (min-width: 1024px) {
    &:hover {
      & > i {
        color: ${(props) => props.theme.palette.icon.main};
      }
    }

    &:active {
      transform: scale(1.5);
    }
  }

  ${(props) =>
    props.isActiveLike &&
    css`
      & > i {
        color: ${(props) => props.theme.palette.icon.main};
        opacity: 0.9;
      }
    `}
`;

const StylInfoPlayer = styled.div`
  position: relative;
  width: 80%;
  left: 20%;
  display: flex;
  flex-direction: column;
`;

const StylTitlePlayer = styled.h3`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
`;

const StylArtistPlayer = styled.p`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
`;

const StylAlbumPlayer = styled.p`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};

  margin-bottom: 40px;
`;

const StylLinePlayer = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.palette.backgroundColor.dark};
`;

const StylControlMusic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const StylSecondsMusicNow = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
`;

const StylSecondsMusicDuration = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
`;

const StylBoxPlayMusic = styled.div`
  position: relative;
  left: 20px;
  display: flex;
  flex-direction: row;
`;

const StylBtnNavMusic = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  outline: none;
  padding: 15px;
  background-color: transparent;
  transition: all 0.2s ease;

  & > i {
    font-size: 20px;
    color: ${(props) => props.theme.palette.icon.light};
    transition: all 0.2s ease;
  }

  @media (min-width: 1024px) {
    padding: 20px;

    &:hover {
      & > i {
        color: ${(props) => props.theme.palette.icon.main};
      }
    }

    &:active {
      transform: scale(1.2);
    }
  }
`;

const StylLinePlayerNow = styled.input`
  position: absolute;
  display: ${props => props.isShow ? 'block' : 'none'};
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border: none;
  outline: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: all 0.2s ease;
  z-index: 10;

  &[type='range']::-webkit-slider-runnable-track {
    cursor: pointer;
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.palette.backgroundRGB.light};
    transition: all 0.2s ease;
  }

  &[type='range']::before {
    position: absolute;
    cursor: pointer;
    content: '';
    top: 0;
    left: 0;
    width: ${(props) => props.isWidth <= 100 ? props.isWidth : 100}%;
    height: 5px;
    background-color: ${(props) => props.theme.palette.icon.main};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: all 0.2s ease;
  }

  &[type='range']::-webkit-slider-thumb {
    position: relative;
    visibility: hidden;
    -webkit-appearance: none;
    box-sizing: content-box;
    border: 1px solid ${props => props.theme.palette.border.middle};
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.backgroundColor.light};
    cursor: pointer;
    margin: -7px 0 0 0;
    transition: all 0.2s ease;
  }

  &[type='range']:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: ${(props) => props.theme.palette.icon.main};
    transition: all 0.2s ease;
  }

  ${props => props.isShowMini && css`
    left: 7px;
    top: -20px;
    transform: rotate(270deg);
    width: 50px;

    &[type='range']::-webkit-slider-runnable-track {
      height: 10px;
    }
  `}
`;

const StylWrapperPlayer = styled.div`
  background-color: ${props => props.theme.palette.backgroundRGB.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  min-height: 400px;
  width: 100%;
  margin: auto;
  border-radius: 8px;
  transform: translateY(20px);

  @media (min-width: 768px) {
    min-height: 600px;
  }
`;

export {
  StylWrapperPlayer,
  StylLinePlayer,
  StylBoxCenterPlayer,
  StylBoxPagePlayer,
  StylImgPlayer,
  StylBoxFuncPlayer,
  StylBtnPlayer,
  StylInfoPlayer,
  StylTitlePlayer,
  StylArtistPlayer,
  StylAlbumPlayer,
  StylControlMusic,
  StylSecondsMusicNow,
  StylBoxPlayMusic,
  StylSecondsMusicDuration,
  StylBtnNavMusic,
  StylLinePlayerNow,
};
