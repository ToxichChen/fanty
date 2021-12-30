import styled from 'styled-components';

const StylFollowUsPageHome = styled.p`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  letter-spacing: 1.1px;
  margin-right: 12px;
`;

export default StylFollowUsPageHome;
