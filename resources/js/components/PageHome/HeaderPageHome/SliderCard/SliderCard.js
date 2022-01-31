import React from "react";
import { routes } from "../../../../Router";
import { StylImgDoubleArrow } from "./../../../common/ImgLogo/ImgLogo.styled";
import { StylBoxFlexColumnFlexStart } from "./../../../common/BasicBoxes/BasicBoxes.styled";

import {
    StylBtnReadMore,
    StylHeaderTitlePageHome,
    StylHeaderTextPageHome,
    StylBoxContentHeaderPageHome,
} from "./SliderCard.styled";

import doubleArrow from "./../../../../assets/icons/icon-double-arrow.png";

const SliderCard = ({ id, title, text, isSelect, index, imgUrl }) => {
    return (
        <StylBoxContentHeaderPageHome
            imgUrl={imgUrl}
            isSelect={isSelect}
            key={index}
            id={id}
        >
            <StylBoxFlexColumnFlexStart>
                <StylHeaderTitlePageHome>{title}</StylHeaderTitlePageHome>
                <StylHeaderTextPageHome>{text}</StylHeaderTextPageHome>
            </StylBoxFlexColumnFlexStart>
            <StylBtnReadMore to={routes.settingsGame.complexity}>
                Начать игру
                <StylImgDoubleArrow src={doubleArrow} alt="double arrow" />
            </StylBtnReadMore>
        </StylBoxContentHeaderPageHome>
    );
};

export default SliderCard;
