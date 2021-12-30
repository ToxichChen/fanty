import styled from 'styled-components';

const StylCardFeatureBox = styled.article`
  padding: 40px 20px 30px 20px;
  border-radius: 5px;
  min-height: 350px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.07);
  width: 100%;
  transition: all 0.5s ease-in-out;

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 40px;
    width: 48%;
  }

  &:last-child {
    flex-grow: 100;
  }
`;

const StylTitleFeature = styled.h2`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 10px;
`;

const StylTextFeature = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.typography.textMedium.main};
  }
`;

const StylBoxCenterFeaturePageHome = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  display: flex;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export {
  StylCardFeatureBox,
  StylTitleFeature,
  StylTextFeature,
  StylBoxCenterFeaturePageHome,
};
