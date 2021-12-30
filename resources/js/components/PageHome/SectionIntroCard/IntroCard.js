import React from 'react';

import doubleArrow from './../../../img/icons/icon-double-arrow.png';
import { dataCardGameArr } from '../../../constants';

import {
  StylImgDoubleArrow,
  StylBoxIntroCard,
  StylBoxCenterIntroCard,
  StylBoxCardGame,
  StylDataCardGame,
  StylLinkCardGame,
  StylTitleCardGame,
  StylTextCardGame,
  StylBtnCardGame,
} from './../../';
import { routes } from '../../../Router';

const IntroCard = () => {
  return (
    <StylBoxIntroCard>
      <StylBoxCenterIntroCard>
        {dataCardGameArr.map((item) => (
          <StylBoxCardGame key={item.id}>
            <StylDataCardGame>
              {item.data}
              <StylLinkCardGame to={routes.taskGame}>
                {item.link}
              </StylLinkCardGame>
            </StylDataCardGame>
            <StylTitleCardGame>{item.title}</StylTitleCardGame>
            <StylTextCardGame>{item.text}</StylTextCardGame>
            <StylBtnCardGame to={item.linkUrl}>
              {item.btnText}{' '}
              <StylImgDoubleArrow src={doubleArrow} alt='double arrow' />
            </StylBtnCardGame>
          </StylBoxCardGame>
        ))}
      </StylBoxCenterIntroCard>
    </StylBoxIntroCard>
  );
};

export default IntroCard;
