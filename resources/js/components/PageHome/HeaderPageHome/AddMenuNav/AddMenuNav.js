import React from "react";
import { routes } from "../../../../Router";
import {
    BoxAddMenu,
    StylItemAddMenu,
    StylLinkAddMenu,
} from "./AddMenuNav.styled";

const AddMenuNav = ({ typeMenu, visibleContent, handleContent }) => {
    return (
        <BoxAddMenu typeMenu={typeMenu} isShow={visibleContent}>
            <StylItemAddMenu>
                <StylLinkAddMenu
                    onClick={handleContent}
                    to={routes.blackAndWhite}
                >
                    Черное и белое
                </StylLinkAddMenu>
            </StylItemAddMenu>
            <StylItemAddMenu>
                <StylLinkAddMenu
                    onClick={handleContent}
                    to={routes.rolePlaying}
                >
                    Ролевые игры
                </StylLinkAddMenu>
            </StylItemAddMenu>
            <StylItemAddMenu>
                <StylLinkAddMenu
                    onClick={handleContent}
                    to={routes.taskGame.info}
                >
                    Секс фанты
                </StylLinkAddMenu>
            </StylItemAddMenu>
        </BoxAddMenu>
    );
};

export default AddMenuNav;
