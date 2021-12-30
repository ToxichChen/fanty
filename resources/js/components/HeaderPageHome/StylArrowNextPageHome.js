import styled from 'styled-components';

const StylArrowNextPageHome = styled.img`
  content: '';
  position: absolute;
  cursor: pointer;
  display: block;
  width: 55px;
  height: 55px;
  bottom: 20px;
  right: 10px;
  transition: all 0.2s ease;
  z-index: 2;

  @media (min-width: 768px) {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    right: 100px;
    &:hover {
      transform: scale(1.1) translateY(-50%) translateX(5px);
    }
  }
`;

export default StylArrowNextPageHome;
