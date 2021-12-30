import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StylBoxIntroCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 115px 20px;
  background-color: ${(props) => props.theme.palette.backgroundColor.primary};
`;

const StylBoxCenterIntroCard = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StylBoxCardGame = styled.article`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const StylDataCardGame = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 20px;
`;

const StylLinkCardGame = styled(NavLink)`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  margin-left: 5px;
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.light};
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

const StylTitleCardGame = styled.p`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  margin-bottom: 40px;
`;

const StylTextCardGame = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  margin-bottom: 35px;
`;

const StylBtnCardGame = styled(NavLink)`
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-decoration: none;
  text-transform: uppercase;
  font-style: italic;
  transition: all 0.2s ease;

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.primary};

      & > img {
        transform: translateX(10px);
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }
`;

export {
  StylBoxIntroCard,
  StylBoxCenterIntroCard,
  StylBoxCardGame,
  StylDataCardGame,
  StylLinkCardGame,
  StylTitleCardGame,
  StylTextCardGame,
  StylBtnCardGame,
};
