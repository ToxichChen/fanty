import React, { useState } from "react";
import { routes } from "../../../Router";
import { NavLink } from "react-router-dom";
import AddMenuNav from "./../HeaderPageHome/AddMenuNav/AddMenuNav";
import HeaderFollowUs from "./../HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import {
    StylBoxFooterPageHome,
    StylImgLogoMagin,
    StylCopyrightFooter,
    StylItemMenuFooter,
    StylLinkMenuFooter,
    StylMenuFooterPageHome,
    LinkFooter,
    LinkImg,
} from "./FooterPageHome.styled";
import {
    StylBoxContainerMaxWidth,
    StylBoxFlexColumnCenter,
} from "./../../common/BasicBoxes/BasicBoxes.styled";

import logo from "./../../../assets/logo.png";
import useActionUsers from "../../../hooks/redux/useActionUsers";

const FooterPageHome = () => {
    const { profile, userLogout } = useActionUsers();
    const [isOpenAdditional, setOpenAdditiona] = useState(false);

    const handleAdditionalMenu = () => {
        setOpenAdditiona(!isOpenAdditional);
    };

    return (
        <StylBoxFooterPageHome>
            <StylBoxContainerMaxWidth>
                <StylBoxFlexColumnCenter>
                    <LinkImg to={routes.home}>
                        <StylImgLogoMagin src={logo} alt="logo" />
                    </LinkImg>
                    <StylMenuFooterPageHome>
                        <StylItemMenuFooter>
                            <StylLinkMenuFooter>
                                <NavLink to={routes.home}>Домой</NavLink>
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
                                <NavLink to={routes.musicFromSex}>
                                    Музыка для секса
                                </NavLink>
                            </StylLinkMenuFooter>
                        </StylItemMenuFooter>
                        <StylItemMenuFooter>
                            <StylLinkMenuFooter>
                                <NavLink to={routes.blogs.main}>Блог</NavLink>
                            </StylLinkMenuFooter>
                        </StylItemMenuFooter>
                        <StylItemMenuFooter>
                            <StylLinkMenuFooter>
                                <NavLink to={routes.support}>Поддержка</NavLink>
                            </StylLinkMenuFooter>
                        </StylItemMenuFooter>
                        {Object.keys(profile).length === 0 && (
                            <StylItemMenuFooter>
                                <StylLinkMenuFooter>
                                    <NavLink to={routes.formLogin}>
                                        Логин
                                    </NavLink>
                                </StylLinkMenuFooter>
                            </StylItemMenuFooter>
                        )}{" "}
                        {Object.keys(profile).length === 0 && (
                            <StylItemMenuFooter>
                                <StylLinkMenuFooter>
                                    <NavLink to={routes.formRegister}>
                                        Регистрация
                                    </NavLink>
                                </StylLinkMenuFooter>
                            </StylItemMenuFooter>
                        )}{" "}
                        {Object.keys(profile).length !== 0 && (
                            <StylItemMenuFooter>
                                <StylLinkMenuFooter>
                                    <NavLink to={routes.profileUser}>
                                        Профиль
                                    </NavLink>
                                </StylLinkMenuFooter>
                            </StylItemMenuFooter>
                        )}
                        {Object.keys(profile).length !== 0 && (
                            <StylItemMenuFooter>
                                <StylLinkMenuFooter>
                                    <button
                                        onClick={userLogout}
                                    >
                                        Выйти
                                    </button>
                                </StylLinkMenuFooter>
                            </StylItemMenuFooter>
                        )}
                    </StylMenuFooterPageHome>
                    <HeaderFollowUs />
                    <StylCopyrightFooter>
                        <LinkFooter to={routes.offer}>
                            Публичная оферта
                        </LinkFooter>
                        <LinkFooter to={routes.politics}>
                            Политика и конфиденцальность
                        </LinkFooter>
                    </StylCopyrightFooter>
                </StylBoxFlexColumnCenter>
            </StylBoxContainerMaxWidth>
        </StylBoxFooterPageHome>
    );
};

export default FooterPageHome;
