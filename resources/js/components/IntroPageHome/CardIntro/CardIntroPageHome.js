import React from 'react';
import {
  StylBoxFlexRowFlexStart,
  StylBoxCardIntroPageHome,
  StylTextIntroCard,
  StylLinkIntorCard,
  StylTitleIntroCard,
  StylDateIntroCard,
  StylBtnReadMoreIntro,
  StylImgDoubleArrow,
} from '../..';

import doubleArrow from './../../../img/icons/icon-double-arrow.png';

const CardIntroPageHome = ({ date, link, title, text }) => {
  return (
    <StylBoxCardIntroPageHome>
      <StylBoxFlexRowFlexStart>
        <StylDateIntroCard>
          {date} <StylLinkIntorCard>{link}</StylLinkIntorCard>
        </StylDateIntroCard>
      </StylBoxFlexRowFlexStart>
      <StylTitleIntroCard>{title}</StylTitleIntroCard>
      <StylTextIntroCard>{text}</StylTextIntroCard>

      <StylBtnReadMoreIntro>
        Read More
        <StylImgDoubleArrow src={doubleArrow} alt='double arrow' />
      </StylBtnReadMoreIntro>
    </StylBoxCardIntroPageHome>
  );
};

export default CardIntroPageHome;
