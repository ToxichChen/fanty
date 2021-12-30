import styled from 'styled-components';

const StylIconPageHome = styled.i`
  position: relative;
  cursor: pointer;
  top: -7px;
  padding: 10px;
  margin-right: 12px;
  color: ${(props) => props.theme.palette.icon.light};
  font-size: ${(props) => props.theme.typography.textSmall.main};
  border-radius: 50%;
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      background-color: ${(props) => props.theme.palette.border.main};
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

export default StylIconPageHome;
