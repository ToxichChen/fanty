import styled from 'styled-components';
import { StylBoxFlexColumnFlexStart } from '../../../';
import { StylBasicLink } from '../../..';

const StylTitleIntroCard = styled.h3`
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  margin-bottom: 10px;
  text-align: left;
`;

const StylLinkIntorCard = styled(StylBasicLink)`
  color: ${(props) => props.theme.palette.text.primary};
`;

const StylBoxCardIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
  max-width: 360px;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 5px;
  margin-bottom: 20px;
`;

const StylBoxCenterIntroPageHome = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const StylTextIntroCard = styled.p`
  font-family: ${(props) => props.theme.typography.textFamily.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  color: ${(props) => props.theme.palette.text.main};
  text-align: left;
  line-height: 1.6;
`;

const StylIconIntorCard = styled.i`
  color: ${(props) => props.theme.palette.main};
  font-size: 50px;
  margin-bottom: 20px;
`;

export {
  StylIconIntorCard,
  StylTitleIntroCard,
  StylLinkIntorCard,
  StylBoxCardIntroPageHome,
  StylBoxCenterIntroPageHome,
  StylTextIntroCard,
};
