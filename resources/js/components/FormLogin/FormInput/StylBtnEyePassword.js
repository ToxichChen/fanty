import styled from 'styled-components';
import { StylBtnBasic } from '../..';

const StylBtnEyePassword = styled(StylBtnBasic)`
  position: absolute;
  right: 26px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  transition: all 0.2s ease;
  z-index: 1;
  background-color: transparent;
`;

export default StylBtnEyePassword;
