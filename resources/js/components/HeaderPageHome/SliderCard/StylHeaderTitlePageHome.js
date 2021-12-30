import styled from 'styled-components';

const StylHeaderTitlePageHome = styled.h1`
  font-size: ${(props) => props.theme.typography.textLarge.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    font-size: 110px;
    margin: 0;
  }

  @media (min-width: 1024px) {
    font-size: 160px;
  }
`;

export default StylHeaderTitlePageHome;
