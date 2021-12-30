import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../../../img/logo.png';

import {
  StylBoxMainMenuPageHome,
  StylItemMainNav,
  StylLinkMainNav,
  StylImgLogo,
  StylBtnMenuNavPageHome,
  StylBoxNavMenuPageHome,
  AddMenuNav,
} from '../../../index';

import { routes } from './../../../../Router';

const HeaderMenuPageHome = () => {
  const [isOpenMainMenu, setOpenMainMenu] = useState(false);
  const [isOpenAdditional, setOpenAdditiona] = useState(false);

  const handleAdditionalMenu = () => {
    setOpenAdditiona(!isOpenAdditional);
  };

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
              Домой
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleAdditionalMenu} isAddMenu={true}>
            Игры
            <AddMenuNav
              typeMenu={true}
              visibleContent={isOpenAdditional}
              handleContent={handleAdditionalMenu}
            />
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>
            <NavLink exact to={routes.musicFromSex}>
              Музыка для секса
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu}>
            <NavLink exact to={routes.formLogin}>
              Логин
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
        <StylItemMainNav>
          <StylLinkMainNav onClick={handleMenu} href={routes.formRegister}>
            <NavLink exact to={routes.formRegister}>
              Регистрация
            </NavLink>
          </StylLinkMainNav>
        </StylItemMainNav>
      </StylBoxMainMenuPageHome>
    </StylBoxNavMenuPageHome>
  );
};

export default HeaderMenuPageHome;
