import styled from 'styled-components';

const StylTitleForm = styled.h1`
  position: relative;
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  text-align: center;

  margin-bottom: 30px;
`;

export default StylTitleForm;
