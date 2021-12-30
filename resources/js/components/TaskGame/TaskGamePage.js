import React from 'react';
import { routes } from '../../Router';
import {
  StylBoxFlexRowFlexEnd,
  SectionTaskGame,
  StylBoxContentTask,
  StylBtnTask,
  StylBoxTask,
  StylTitleTask,
  StylTextTask,
  StylImgTask,
  StylBoxFeatures,
  StylTimeTask,
  StylLinkSettings,
} from './../index';

const TaskGamePage = ({ title, text, img, time, level }) => {
  return (
    <SectionTaskGame>
      <StylBoxContentTask>
        <StylBoxTask>
          <StylTitleTask>{title}, твой ход!</StylTitleTask>
          <StylTextTask>{text}</StylTextTask>
          <StylImgTask src={img} alt='img task' />
          <StylTimeTask className='fas fa-hourglass-start' isTime={time} />
        </StylBoxTask>
        <StylBoxFeatures>
          <StylLinkSettings to={routes.settingsGame.main}>
            <i className='fas fa-cog'></i>Настройки
          </StylLinkSettings>
          <StylBoxFlexRowFlexEnd>
            <StylBtnTask isType={level} isPreLastBtn={true}>
              <i className='fas fa-arrow-up'></i>Следующий уровень
            </StylBtnTask>
            <StylBtnTask isType='task' isLastBtn={true}>
              <i className='fas fa-arrow-down'></i>Следующее задание
            </StylBtnTask>
          </StylBoxFlexRowFlexEnd>
        </StylBoxFeatures>
      </StylBoxContentTask>
    </SectionTaskGame>
  );
};

export default TaskGamePage;
