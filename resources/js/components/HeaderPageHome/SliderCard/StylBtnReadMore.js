import styled from 'styled-components';
import { StylBtnBasic } from '../../';

const StylBtnReadMore = styled(StylBtnBasic)`
  position: relative;
  display: block;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.dark};
  background-color: ${(props) => props.theme.palette.backgroundColor.light};
  font-style: italic;
  text-transform: uppercase;
  max-width: 190px;
  width: 100%;
  padding: 24px 30px;
  text-align: center;
  align-self: center;
  margin-right: 12px;
  box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
  border-radius: 8px;
  z-index: 2 !important;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.palette.backgroundColor.light};
    border-radius: 8px;
    z-index: -1;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 9px;
    top: 10px;
    background: ${(props) => props.theme.palette.border.main};
    z-index: -2;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    &:hover {
      & > img {
        transform: translateX(10px);
      }
    }
  }
`;

export default StylBtnReadMore;
