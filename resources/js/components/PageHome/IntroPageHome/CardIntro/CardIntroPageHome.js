import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  StylBoxCardIntroPageHome,
  StylTextIntroCard,
  StylTitleIntroCard,
  StylIconIntorCard,
} from '../../..';

const CardIntroPageHome = ({ svg, title, text }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <StylBoxCardIntroPageHome data-aos='fade-right'>
      <StylIconIntorCard className={svg} />
      <StylTitleIntroCard>{title}</StylTitleIntroCard>
      <StylTextIntroCard>{text}</StylTextIntroCard>
    </StylBoxCardIntroPageHome>
  );
};

export default CardIntroPageHome;
