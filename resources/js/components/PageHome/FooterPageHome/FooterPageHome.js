import React, { useState } from 'react';
import { routes } from '../../../Router';
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
  AddMenuNav,
} from './../../';

import logo from './../../../assets/logo.png';
import useActionsWithRedux from '../../../hooks/useActionsWithRedux';

const FooterPageHome = () => {
  const {profile} = useActionsWithRedux()
  const [isOpenAdditional, setOpenAdditiona] = useState(false);

  const handleAdditionalMenu = () => {
    setOpenAdditiona(!isOpenAdditional);
  };
  return (
    <StylBoxFooterPageHome>
      <StylBoxContainerMaxWidth>
        <StylBoxFlexColumnCenter>
          <StylImgLogoMagin src={logo} alt='logo' />
          <StylMenuFooterPageHome>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>
                <NavLink exact to={routes.home}>
                  Домой
                </NavLink>
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter
                isAddMenu={true}
                onClick={handleAdditionalMenu}
              >
                Игры
                <AddMenuNav
                  typeMenu={false}
                  visibleContent={isOpenAdditional}
                  handleContent={handleAdditionalMenu}
                />
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>
                <NavLink exact to={routes.musicFromSex}>
                  Музыка для секса
                </NavLink>
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
            <StylItemMenuFooter>
              <StylLinkMenuFooter>
                <NavLink exact to={routes.blogs.main}>
                  Блог
                </NavLink>
              </StylLinkMenuFooter>
            </StylItemMenuFooter>
            {profile === null && (
              <StylItemMenuFooter>
                <StylLinkMenuFooter>
                  <NavLink exact to={routes.formLogin}>
                    Логин
                  </NavLink>
                </StylLinkMenuFooter>
              </StylItemMenuFooter>
            )}{' '}
            {profile ===null&& (
              <StylItemMenuFooter>
                <StylLinkMenuFooter>
                  <NavLink exact to={routes.formRegister}>
                    Регистрация
                  </NavLink>
                </StylLinkMenuFooter>
              </StylItemMenuFooter>
            )}{' '}
            {profile && (
              <StylItemMenuFooter>
                <StylLinkMenuFooter>
                  <NavLink exact to={routes.profileUser}>
                    Профиль
                  </NavLink>
                </StylLinkMenuFooter>
              </StylItemMenuFooter>
            )}
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
