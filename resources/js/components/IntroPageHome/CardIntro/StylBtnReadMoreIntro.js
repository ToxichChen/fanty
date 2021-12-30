import styled from 'styled-components';
import { StylBtnReadMore } from '../..';

const StylBtnReadMoreIntro = styled(StylBtnReadMore)`
  background-color: transparent;
  color: ${(props) => props.theme.palette.main};
  box-shadow: none;
  padding: 0;
  margin-right: 0;
  align-self: flex-start;
  width: auto;

  & > img {
    left: 10%;
  }

  &::after {
    display: none;
  }

  &::before {
    display: none;
  }
`;

export default StylBtnReadMoreIntro;
