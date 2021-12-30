import styled from 'styled-components';
import { StylBoxFlexColumnFlexStart } from '../../';

const StylBoxCardIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
  max-width: 360px;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export default StylBoxCardIntroPageHome;
