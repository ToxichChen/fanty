import styled from 'styled-components';

const StylDateIntroCard = styled.p`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 20px;
  text-align: left;
`;

export default StylDateIntroCard;
