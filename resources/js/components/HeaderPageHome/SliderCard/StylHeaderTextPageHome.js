import styled from 'styled-components';

const StylHeaderTextPageHome = styled.p`
  position: relative;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 1.6;
  text-align: center;
  transition: all 0.2s ease;
  padding: 0 20px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    top: -10px;
    font-size: ${(props) => props.theme.typography.textMedium.main};
    margin-bottom: 70px;
    opacity: 0.8;
    padding: 0;
    margin-bottom: 70px;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.typography.textMedium.primary};
  }
`;

export default StylHeaderTextPageHome;
