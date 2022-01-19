import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  StylBoxFlexStartColumn,
  StylBoxFooterSettings,
  StylBtnFooterSettings,
  StylBtnFooterSettingsComplexity,
} from '..';
import { routes } from '../../Router';

const SettingsGameFooter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <StylBoxFooterSettings>
      <StylBoxFlexStartColumn>
        <StylBtnFooterSettings to={routes.home}>
          <i className='fas fa-sign-out-alt'></i>
          Выйти из игры
        </StylBtnFooterSettings>
      </StylBoxFlexStartColumn>
      <StylBtnFooterSettingsComplexity to={routes.settingsGame.complexity}>
        <i className='fas fa-align-left'></i>
        Количество заданий
      </StylBtnFooterSettingsComplexity>
    </StylBoxFooterSettings>
  );
};

export default SettingsGameFooter;
