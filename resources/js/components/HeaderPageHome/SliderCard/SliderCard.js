import React from 'react';

import {
  StylBoxFlexColumnFlexStart,
  StylBoxContentHeaderPageHome,
  StylHeaderTitlePageHome,
  StylHeaderTextPageHome,
  StylBtnReadMore,
  StylImgDoubleArrow,
} from '../../index';

import doubleArrow from './../../../img/icons/icon-double-arrow.png';

const SliderCard = ({ id, title, text1, text2, isSelect, index, imgUrl }) => {
  return (
    <StylBoxContentHeaderPageHome
      imgUrl={imgUrl}
      isSelect={isSelect}
      key={index}
      id={id}
    >
      <StylBoxFlexColumnFlexStart>
        <StylHeaderTitlePageHome>{title}</StylHeaderTitlePageHome>
        <StylHeaderTextPageHome>
          {text1}
          <br /> {text2}
        </StylHeaderTextPageHome>
      </StylBoxFlexColumnFlexStart>
      <StylBtnReadMore>
        Read More
        <StylImgDoubleArrow src={doubleArrow} alt='double arrow' />
      </StylBtnReadMore>
    </StylBoxContentHeaderPageHome>
  );
};

export default SliderCard;
