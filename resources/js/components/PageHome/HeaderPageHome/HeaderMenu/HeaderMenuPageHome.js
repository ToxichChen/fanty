import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../../../assets/logo.png";

import AddMenuNav from "./../AddMenuNav/AddMenuNav";

import {
    StylBoxMainMenuPageHome,
    StylItemMainNav,
    StylLinkMainNav,
    StylImgLogo,
    StylBtnMenuNavPageHome,
    StylBoxNavMenuPageHome,
} from "./HeaderMenu.styled";

import { routes } from "./../../../../Router";
import useActionUsers from "../../../../hooks/redux/useActionUsers";

const HeaderMenuPageHome = () => {
    const { profile, userLogout } = useActionUsers();
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
            <NavLink to={routes.home} style={{ margin: 0 }}>
                <StylImgLogo src={logo} alt="logo" />
            </NavLink>
            <StylBtnMenuNavPageHome
                type="button"
                onClick={handleMenu}
                open={isOpenMainMenu}
            />
            <StylBoxMainMenuPageHome open={isOpenMainMenu}>
                <StylItemMainNav>
                    <StylLinkMainNav onClick={handleMenu}>
                        <NavLink to={routes.home}>Домой</NavLink>
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
                        <NavLink to={routes.musicFromSex}>
                            Музыка для секса
                        </NavLink>
                    </StylLinkMainNav>
                </StylItemMainNav>
                <StylItemMainNav>
                    <StylLinkMainNav onClick={handleMenu}>
                        <NavLink to={routes.blogs.main}>Блог</NavLink>
                    </StylLinkMainNav>
                </StylItemMainNav>
                <StylItemMainNav isSpace={true}>
                    {Object.keys(profile).length === 0 && (
                        <StylItemMainNav>
                            <StylLinkMainNav onClick={handleMenu}>
                                <NavLink to={routes.formLogin}>Логин</NavLink>
                            </StylLinkMainNav>
                        </StylItemMainNav>
                    )}{" "}
                    {Object.keys(profile).length === 0 && (
                        <StylItemMainNav>
                            <StylLinkMainNav onClick={handleMenu}>
                                <NavLink to={routes.formRegister}>
                                    Регистрация
                                </NavLink>
                            </StylLinkMainNav>
                        </StylItemMainNav>
                    )}{" "}
                    {Object.keys(profile).length !== 0 && (
                        <StylItemMainNav>
                            <StylLinkMainNav onClick={handleMenu}>
                                <NavLink to={routes.profileUser}>
                                    Профиль
                                </NavLink>
                            </StylLinkMainNav>
                        </StylItemMainNav>
                    )}
                    {Object.keys(profile).length !== 0 && (
                        <StylItemMainNav>
                            <StylLinkMainNav onClick={profileRequest}>
                                <NavLink to={routes.home}>Выйти</NavLink>
                            </StylLinkMainNav>
                        </StylItemMainNav>
                    )}
                </StylItemMainNav>
            </StylBoxMainMenuPageHome>
        </StylBoxNavMenuPageHome>
    );
};

export default HeaderMenuPageHome;
