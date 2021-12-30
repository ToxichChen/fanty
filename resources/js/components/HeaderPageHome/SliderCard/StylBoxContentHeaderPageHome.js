import styled from 'styled-components';
import { StylBoxFlexColumnSpaceBetween } from './../../';

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

export default StylBoxContentHeaderPageHome;
