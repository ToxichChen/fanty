import styled from 'styled-components';
import { StylBoxFlexRowSpaceBetween } from './../../';

const StylBoxNavMenuPageHome = styled(StylBoxFlexRowSpaceBetween)`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
  background-color: ${(props) => props.theme.palette.backgroundColor.dark};
  border-radius: 8px;
  padding: 20px;
  z-index: 2;
`;

export default StylBoxNavMenuPageHome;
