import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../img/logo-border.png';

import {
  StylBoxMainMenuPageHome,
  StylItemMainNav,
  StylLinkMainNav,
  StylImgLogo,
  StylBtnMenuNavPageHome,
  StylBoxNavMenuPageHome,
} from '../../index';

import { routes } from './../../../Router';

const HeaderMenuPageHome = () => {
  const [isOpenMainMenu, setOpenMainMenu] = useState(false);

  const handleMenu = () => {
    setOpenMainMenu(!isOpenMainMenu);
  };

  return (
    <StylBoxNavMenuPageHome>
      <StylImgLogo src={logo} alt='logo' />
      <StylBtnMenuNavPageHome
        type='button'
        onClick={handleMenu}
        open={isOpenMainMenu}
      />
      <StylBoxMainMenuPageHome open={isOpenMainMenu}>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>
            <NavLink exact to={routes.home}>
              Home
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>Games</StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>Music from sex</StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>
            <NavLink exact to={routes.formLogin}>
              Login
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu} href={routes.formRegister}>
            <NavLink exact to={routes.formRegister}>
              Register
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
      </StylBoxMainMenuPageHome>
    </StylBoxNavMenuPageHome>
  );
};

export default HeaderMenuPageHome;
