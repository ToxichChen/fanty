import styled from 'styled-components';

const TitleOffer = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 20px;

  @media(min-width: 768px){
    font-size: ${(props) => props.theme.typography.textMedium.primary};
  }
`;


export {TitleOffer}