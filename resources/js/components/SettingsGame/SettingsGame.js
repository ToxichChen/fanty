import React from 'react';
import { dataOptionsList } from '../../constants';
import { routes } from '../../Router';
import { StylBoxFlexRowSpaceBetween } from '../common/BasicBoxes';
import {
  SectionTaskGame,
  StylBoxContentTask,
  StylTitleSettings,
  StylLinkFeatureSettings,
  StylBoxFeatures,
  StylBoxSettingsGame,
  StylLinkSettings,
  OptionItem,
} from './../';

const SettingsGame = () => {
  return (
    <SectionTaskGame>
      <StylBoxContentTask>
        <StylTitleSettings>Эротические фанты онлайн</StylTitleSettings>
        <StylBoxFlexRowSpaceBetween>
          <StylLinkFeatureSettings to={routes.home}>
            <i className='fas fa-pencil-alt'></i>
            Свои задания
          </StylLinkFeatureSettings>
          <StylLinkFeatureSettings to={routes.home}>
            <i className='fas fa-print'></i>
            Распечатать
          </StylLinkFeatureSettings>
          <StylLinkFeatureSettings to={routes.home}>
            <i className='fas fa-trash-alt'></i>
            Черный список
          </StylLinkFeatureSettings>
          <StylLinkFeatureSettings to={routes.home}>
            <i className='fas fa-sliders-h'></i>
            Статистика
          </StylLinkFeatureSettings>
        </StylBoxFlexRowSpaceBetween>
        <StylBoxSettingsGame>
          {dataOptionsList.map((item, index) => (
            <OptionItem item={item} key={index} />
          ))}
        </StylBoxSettingsGame>
        <StylBoxFeatures>
          <StylLinkSettings to={routes.home} isDontRoll={true}>
            <i className='fas fa-door-open'></i>
            Выйти из игры
          </StylLinkSettings>
          <StylLinkSettings to={routes.taskGame} isGameTo={true}>
            Следующее задание
            <i className='fas fa-arrow-right'></i>
          </StylLinkSettings>
        </StylBoxFeatures>
      </StylBoxContentTask>
    </SectionTaskGame>
  );
};

export default SettingsGame;
