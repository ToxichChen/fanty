import styled from 'styled-components';

const StylTitleIntroCard = styled.h3`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 40px;
  text-align: left;
`;

export default StylTitleIntroCard;
