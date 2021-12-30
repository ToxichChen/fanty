import styled from 'styled-components';
import { StylBoxFlexColumnFlexStart } from '..';

const StylBoxIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
  background-color: ${(props) => props.theme.palette.backgroundColor.primary};
  border-top: 2px solid ${(props) => props.theme.palette.border.main};
  padding: 50px 20px;

  @media (min-width: 1024px) {
    padding: 115px 20px;
  }
`;

export default StylBoxIntroPageHome;
