import React from 'react';
import {
  StylBoxIntroPageHome,
  StylComplexityList,
  StylComplexityItem,
  StylTitleComplexity,
  StylTextTypeComplexity,
  StylBoxFlexColumnSpaceBetween,
} from '../..';

const ComplexityHome = () => {
  return (
    <StylBoxIntroPageHome>
      <StylComplexityList>
        <StylComplexityItem>
          <StylTitleComplexity isComplexity='green'>
            Зеленый
          </StylTitleComplexity>
          <StylBoxFlexColumnSpaceBetween>
            <StylTextTypeComplexity>Флирт</StylTextTypeComplexity>
            <StylTextTypeComplexity>Более 200 заданий</StylTextTypeComplexity>
          </StylBoxFlexColumnSpaceBetween>
        </StylComplexityItem>

        <StylComplexityItem>
          <StylTitleComplexity isComplexity='orange'>
            ОРАНЖЕВЫЕ
          </StylTitleComplexity>
          <StylBoxFlexColumnSpaceBetween>
            <StylTextTypeComplexity>Ласки</StylTextTypeComplexity>
            <StylTextTypeComplexity>Более 500 заданий</StylTextTypeComplexity>
          </StylBoxFlexColumnSpaceBetween>
        </StylComplexityItem>

        <StylComplexityItem>
          <StylTitleComplexity isComplexity='red'>КРАСНЫЕ</StylTitleComplexity>
          <StylBoxFlexColumnSpaceBetween>
            <StylTextTypeComplexity>Секс</StylTextTypeComplexity>
            <StylTextTypeComplexity>Более 300 заданий</StylTextTypeComplexity>
          </StylBoxFlexColumnSpaceBetween>
        </StylComplexityItem>
      </StylComplexityList>
    </StylBoxIntroPageHome>
  );
};

export default ComplexityHome;
