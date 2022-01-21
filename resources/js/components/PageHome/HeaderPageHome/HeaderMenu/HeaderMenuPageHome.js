import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../../../assets/logo.png";

import {
    StylBoxMainMenuPageHome,
    StylItemMainNav,
    StylLinkMainNav,
    StylImgLogo,
    StylBtnMenuNavPageHome,
    StylBoxNavMenuPageHome,
    AddMenuNav,
} from "../../../index";

import { routes } from "./../../../../Router";
import useActionsWithRedux from "../../../../hooks/useActionsWithRedux";

const HeaderMenuPageHome = () => {
    const { profile, userLogout } = useActionsWithRedux();
    const [isOpenMainMenu, setOpenMainMenu] = useState(false),
        [isOpenAdditional, setOpenAdditiona] = useState(false);

    const handleAdditionalMenu = () => {
        setOpenAdditiona(!isOpenAdditional);
    };

    const handleMenu = () => {
        setOpenMainMenu(!isOpenMainMenu);
    };

    const profileRequest = () => {
        handleMenu();
        userLogout();
    };

    return (
        <StylBoxNavMenuPageHome>
            <StylImgLogo src={logo} alt="logo" />
            <StylBtnMenuNavPageHome
                type="button"
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
                    <StylLinkMainNav
                        onClick={handleAdditionalMenu}
                        isAddMenu={true}
                    >
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
                        <NavLink exact to={routes.blogs.main}>
                            Блог
                        </NavLink>
                    </StylLinkMainNav>
                </StylItemMainNav>
                {Object.keys(profile).length === 0 && (
                    <StylItemMainNav>
                        <StylLinkMainNav onClick={handleMenu}>
                            <NavLink exact to={routes.formLogin}>
                                Логин
                            </NavLink>
                        </StylLinkMainNav>
                    </StylItemMainNav>
                )}{" "}
                {Object.keys(profile).length === 0 && (
                    <StylItemMainNav>
                        <StylLinkMainNav onClick={handleMenu}>
                            <NavLink exact to={routes.formRegister}>
                                Регистрация
                            </NavLink>
                        </StylLinkMainNav>
                    </StylItemMainNav>
                )}{" "}
                {Object.keys(profile).length !== 0 && (
                    <StylItemMainNav>
                        <StylLinkMainNav onClick={handleMenu}>
                            <NavLink exact to={routes.profileUser}>
                                Профиль
                            </NavLink>
                        </StylLinkMainNav>
                    </StylItemMainNav>
                )}
                {Object.keys(profile).length !== 0 && (
                    <StylItemMainNav>
                        <StylLinkMainNav onClick={profileRequest}>
                            <NavLink exact to={routes.home}>
                                Выйти
                            </NavLink>
                        </StylLinkMainNav>
                    </StylItemMainNav>
                )}
            </StylBoxMainMenuPageHome>
        </StylBoxNavMenuPageHome>
    );
};

export default HeaderMenuPageHome;
