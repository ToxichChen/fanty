import React from 'react';
import {
  StylBoxCardIntroPageHome,
  StylTextIntroCard,
  StylTitleIntroCard,
  StylIconIntorCard,
} from '../../..';

const CardIntroPageHome = ({ svg, title, text }) => {
  return (
    <StylBoxCardIntroPageHome>
      <StylIconIntorCard className={svg} />
      <StylTitleIntroCard>{title}</StylTitleIntroCard>
      <StylTextIntroCard>{text}</StylTextIntroCard>
    </StylBoxCardIntroPageHome>
  );
};

export default CardIntroPageHome;
