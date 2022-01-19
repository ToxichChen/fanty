import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  StylBoxIntroPageHome,
  StylComplexityList,
  StylComplexityItem,
  StylTitleComplexity,
  StylTextTypeComplexity,
  StylBoxFlexColumnSpaceBetween,
} from '../..';

const ComplexityHome = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <StylBoxIntroPageHome>
      <StylComplexityList>
        <StylComplexityItem data-aos='fade-right'>
          <StylTitleComplexity isComplexity='green'>
            ЗЕЛЕНЫЙ
          </StylTitleComplexity>
          <StylBoxFlexColumnSpaceBetween>
            <StylTextTypeComplexity>Флирт</StylTextTypeComplexity>
            <StylTextTypeComplexity>Более 200 заданий</StylTextTypeComplexity>
          </StylBoxFlexColumnSpaceBetween>
        </StylComplexityItem>

        <StylComplexityItem data-aos='fade-right'>
          <StylTitleComplexity isComplexity='orange'>
            ОРАНЖЕВЫЕ
          </StylTitleComplexity>
          <StylBoxFlexColumnSpaceBetween>
            <StylTextTypeComplexity>Ласки</StylTextTypeComplexity>
            <StylTextTypeComplexity>Более 500 заданий</StylTextTypeComplexity>
          </StylBoxFlexColumnSpaceBetween>
        </StylComplexityItem>

        <StylComplexityItem data-aos='fade-right'>
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
