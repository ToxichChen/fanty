import styled from 'styled-components';

const StylTitleNotFound = styled.h1`
  font-size: 30px;
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 150px;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  display: block;
  color: ${props => props.theme.palette.backgroundBtn.main};
  text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
  animation: fadeInText 3s ease-in 3.5s forwards,
    flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;

  @keyframes flicker4 {
    0% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    30% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    31% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    32% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    36% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    37% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    41% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    42% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    85% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    86% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    95% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    96% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    100% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes fadeInText {
    1% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    70% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 14px ${props => props.theme.palette.text.primary};
    }
    100% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes hueRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(-120deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }
`;

const StylWrapperSvg = styled.svg`
  position: absolute;
  height: auto;
  width: 600px;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  #svgWrap_1,
  #svgWrap_2 {
    position: absolute;
    height: auto;
    width: 600px;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #svgWrap_1,
  #svgWrap_2,
  div {
    animation: hueRotate 6s ease-in-out 3s infinite;
  }

  #id1_1,
  #id2_1,
  #id3_1 {
    stroke: ${props => props.theme.palette.text.primary};
    stroke-width: 3px;
    fill: transparent;
    filter: url(#glow);
  }

  #id1_2,
  #id2_2,
  #id3_2 {
    stroke: ${props => props.theme.palette.backgroundBtn.main};
    stroke-width: 3px;
    fill: transparent;
    filter: url(#glow);
  }

  #id3_1 {
    stroke-dasharray: 940px;
    stroke-dashoffset: -940px;
    animation: drawLine3 2.5s ease-in-out 0s forwards,
      flicker3 4s linear 4s infinite;
  }

  #id2_1 {
    stroke-dasharray: 735px;
    stroke-dashoffset: -735px;
    animation: drawLine2 2.5s ease-in-out 0.5s forwards,
      flicker2 4s linear 4.5s infinite;
  }

  #id1_1 {
    stroke-dasharray: 940px;
    stroke-dashoffset: -940px;
    animation: drawLine1 2.5s ease-in-out 1s forwards,
      flicker1 4s linear 5s infinite;
  }

  @keyframes drawLine1 {
    0% {
      stroke-dashoffset: -940px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes drawLine2 {
    0% {
      stroke-dashoffset: -735px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes drawLine3 {
    0% {
      stroke-dashoffset: -940px;
    }
    100% {
      stroke-dashoffset: 0px;
    }
  }

  @keyframes flicker1 {
    0% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    1% {
      stroke: transparent;
    }
    3% {
      stroke: transparent;
    }
    4% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    6% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    7% {
      stroke: transparent;
    }
    13% {
      stroke: transparent;
    }
    14% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    100% {
      stroke: ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes flicker2 {
    0% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    50% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    51% {
      stroke: transparent;
    }
    61% {
      stroke: transparent;
    }
    62% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    100% {
      stroke: ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes flicker3 {
    0% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    1% {
      stroke: transparent;
    }
    10% {
      stroke: transparent;
    }
    11% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    40% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    41% {
      stroke: transparent;
    }
    45% {
      stroke: transparent;
    }
    46% {
      stroke: ${props => props.theme.palette.text.primary};
    }
    100% {
      stroke: ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes flicker4 {
    0% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    30% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    31% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    32% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    36% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    37% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    41% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    42% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    85% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    86% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    95% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    96% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
    100% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes fadeInText {
    1% {
      color: ${props => props.theme.palette.backgroundBtn.main};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.backgroundBtn.main};
    }
    70% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 14px ${props => props.theme.palette.text.primary};
    }
    100% {
      color: ${props => props.theme.palette.text.primary};
      text-shadow: 0px 0px 4px ${props => props.theme.palette.text.primary};
    }
  }

  @keyframes hueRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(-120deg);
    }
    100% {
      filter: hue-rotate(0deg);
    }
  }
`;

export { StylTitleNotFound, StylWrapperSvg };
