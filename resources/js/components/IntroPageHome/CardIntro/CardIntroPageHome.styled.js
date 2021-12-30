import styled from 'styled-components';
import { StylBoxFlexColumnFlexStart } from '../../';
import { StylBtnReadMore } from '../..';
import { StylBasicLink } from '../..';

const StylTitleIntroCard = styled.h3`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 40px;
  text-align: left;
`;

const StylLinkIntorCard = styled(StylBasicLink)`
  color: ${(props) => props.theme.palette.text.primary};
`;

const StylBtnReadMoreIntro = styled(StylBtnReadMore)`
  background-color: transparent;
  color: ${(props) => props.theme.palette.main};
  box-shadow: none;
  padding: 0;
  margin-right: 0;
  align-self: flex-start;
  width: auto;

  & > img {
    left: 10%;
  }

  &::after {
    display: none;
  }

  &::before {
    display: none;
  }
`;

const StylBoxCardIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
  max-width: 360px;
  width: 100%;
  padding: 0 15px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const StylBoxCenterIntroPageHome = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StylDateIntroCard = styled.p`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 20px;
  text-align: left;
`;

const StylTextIntroCard = styled(StylDateIntroCard)`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 1.6;
  margin-bottom: 35px;
`;

export {
  StylTitleIntroCard,
  StylLinkIntorCard,
  StylBtnReadMoreIntro,
  StylBoxCardIntroPageHome,
  StylBoxCenterIntroPageHome,
  StylDateIntroCard,
  StylTextIntroCard,
};
