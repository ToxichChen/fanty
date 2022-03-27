import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  width: 100%;
  margin-bottom: 60px;
`;

const StylWrapperImg = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  max-width: 800px;
  max-height: 350px;
  background-color: ${props => props.theme.palette.backgroundColor.middle};
  position: relative;
  padding-bottom: 45%;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px 0 black, 0.5;
  transition: all 0.5s ease;
  border-radius: 8px;
`;

const StylPostImg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
  border-radius: 8px;
`;

const StylTitlePost = styled.h3`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  margin-bottom: 40px;
`;

const StylDataPost = styled.p`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  margin-bottom: 20px;
`;

const StylTextPost = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
  margin-bottom: 10px;
`;

const StylLinkMorePost = styled(NavLink)`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  font-style: italic;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease;

  & > img {
    margin-left: 10px;
    transition: all 0.2s ease;
  }

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.primary};
    }

    &:active {
      & > img {
        transform: translateX(10px);
      }
    }
  }
`;

export {
  Article,
  StylPostImg,
  StylWrapperImg,
  StylTitlePost,
  StylDataPost,
  StylTextPost,
  StylLinkMorePost,
};
