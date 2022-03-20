import styled from 'styled-components';
import bgMobileFantyPNG from './../../assets/bg/muzyka.png';

const StylBoxBlogs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.palette.backgroundColor.second};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${bgMobileFantyPNG});
  min-height: 100vh;
  padding: 20px 0;

`;

const StylBoxWrapper = styled.div`
  padding: 20px;
  background-color: rgba(52, 22, 75, 0.8);
  margin-top: 20px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

const StylBoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 40px;
  max-width: 1170px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StylBoxPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    padding-right: 30px;
  }
`;

const StylBoxOtherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const StylBoxTrending = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const StylTrendTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  margin-bottom: 40px;
`;

export {
  StylBoxBlogs,
  StylBoxCenter,
  StylBoxPosts,
  StylBoxOtherContent,
  StylBoxTrending,
  StylTrendTitle,
  StylBoxWrapper,
};
