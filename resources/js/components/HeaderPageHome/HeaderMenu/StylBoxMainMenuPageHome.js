import styled from 'styled-components';

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
  animation: ${(props) => (props.open ? '2s slidein' : '1s slideout')};

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

export default StylBoxMainMenuPageHome;
