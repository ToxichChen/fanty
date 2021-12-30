import styled from 'styled-components';
import { StylBoxFlexRowFlexEnd } from '../..';

const StylFollowUsPageHome = styled(StylBoxFlexRowFlexEnd)`
  justify-content: ${(props) => (props.isFollow ? '' : 'center')};
  margin-bottom: ${(props) => (props.isFollow ? '' : '40px')};
`;

export default StylFollowUsPageHome;
