import React from 'react';
import { routes } from '../../../../Router';

import {
  StylBoxFlexColumnFlexStart,
  StylBoxContentHeaderPageHome,
  StylHeaderTitlePageHome,
  StylHeaderTextPageHome,
  StylBtnReadMore,
  StylImgDoubleArrow,
} from '../../../index';

import doubleArrow from './../../../../img/icons/icon-double-arrow.png';

const SliderCard = ({ id, title, text, isSelect, index, imgUrl }) => {
  return (
    <StylBoxContentHeaderPageHome
      imgUrl={imgUrl}
      isSelect={isSelect}
      key={index}
      id={id}
    >
      <StylBoxFlexColumnFlexStart>
        <StylHeaderTitlePageHome>{title}</StylHeaderTitlePageHome>
        <StylHeaderTextPageHome>{text}</StylHeaderTextPageHome>
      </StylBoxFlexColumnFlexStart>
      <StylBtnReadMore to={routes.taskGame}>
        Начать игру
        <StylImgDoubleArrow src={doubleArrow} alt='double arrow' />
      </StylBtnReadMore>
    </StylBoxContentHeaderPageHome>
  );
};

export default SliderCard;
