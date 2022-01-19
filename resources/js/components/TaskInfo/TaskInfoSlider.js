import React from 'react';
import {
  StylBtnReadMore,
  StylImgDoubleArrow,
  StylTaskInfoSlider,
  StylTaskInfoBoxCenter,
  StylTaskInfoTitle,
  StylTaskInfoDescription,
  HeaderMenuPageHome,
} from './../';
import doubleArrow from './../../assets/icons/icon-double-arrow.png';

const TaskInfoSlider = ({
  title,
  description,
  taskUrl = '/settingsGame/1',
}) => {
  return (
    <StylTaskInfoSlider>
      <HeaderMenuPageHome />
      <StylTaskInfoBoxCenter>
        <StylTaskInfoTitle>{title}</StylTaskInfoTitle>
        <StylTaskInfoDescription>{description}</StylTaskInfoDescription>
        <StylBtnReadMore to={taskUrl}>
          Начать игру
          <StylImgDoubleArrow src={doubleArrow} alt='double arrow' />
        </StylBtnReadMore>
      </StylTaskInfoBoxCenter>
    </StylTaskInfoSlider>
  );
};

export default TaskInfoSlider;
