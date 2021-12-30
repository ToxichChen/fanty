import styled from 'styled-components';

const StylImgLogoMagin = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  text-align: center;
  opacity: 0.2;
`;

export default StylImgLogoMagin;
