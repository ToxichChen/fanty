import styled from "styled-components";

const WrapperImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;

  & > i {
    font-size: 100px;
    color: ${props => props.theme.palette.icon.main};
  }

  @media (min-width: 768px){
    margin-bottom: 0;
  }
`;

const BoxRowFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BoxColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: auto;

  @media(min-width: 768px){
    width: 60%;
  }
`;

const TitleProfile = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  margin-bottom: 20px;
  align-self: center;
`;

export { WrapperImg, BoxRowFlex, BoxColumnFlex, TitleProfile }
