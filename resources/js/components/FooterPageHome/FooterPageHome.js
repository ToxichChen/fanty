import React from 'react';
import { routes } from '../../Router';
import { NavLink } from 'react-router-dom';
import {
  StylBoxFooterPageHome,
  StylBoxContainerMaxWidth,
  StylBoxFlexColumnCenter,
  StylImgLogoMagin,
  StylMenuFooterPageHome,
  StylItemMenuFooter,
  StylLinkMenuFooter,
  HeaderFollowUs,
  StylCopyrightFooter,
} from './../';

import logo from './../../img/logo.png';

const FooterPageHome = () => {
  return (
    <StylBoxFooterPageHome>
      <StylBoxContainerMaxWidth>
        <StylBoxFlexColumnCenter>
          <StylImgLogoMagin src={logo} alt='logo' />
          <StylMenuFooterPageHome>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>Home</StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>Games</StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>Music from sex</StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>
                <NavLink exact to={routes.formLogin}>
                  Login
                </NavLink>
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>
                <NavLink exact to={routes.formRegister}>
                  Register
                </NavLink>
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
          </StylMenuFooterPageHome>
          <HeaderFollowUs />
          <StylCopyrightFooter>
            ColorLib 2018 @ All rights reserved
          </StylCopyrightFooter>
        </StylBoxFlexColumnCenter>
      </StylBoxContainerMaxWidth>
    </StylBoxFooterPageHome>
  );
};

export default FooterPageHome;
