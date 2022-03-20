import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";

import { StylImgDoubleArrow } from "./../common/ImgLogo/ImgLogo.styled";
import { StylBtnReadMore } from "./../PageHome/HeaderPageHome/SliderCard/SliderCard.styled";
import {
    StylTaskInfoSlider,
    StylTaskInfoBoxCenter,
    StylTaskInfoTitle,
    StylTaskInfoDescription,
} from "./TaskInfoSlider.styled";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";

const TaskInfoSlider = ({
    title,
    description,
    taskUrl = "/seks-fanty/settings",
}) => {
    return (
        <StylTaskInfoSlider>
            <StylBoxContainerMaxWidth>
                <StylBoxFlexColumnFlexStart>
                    <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                    <HeaderMenuPageHome />
                </StylBoxFlexColumnFlexStart>
            </StylBoxContainerMaxWidth>
            <StylTaskInfoBoxCenter>
                <StylTaskInfoTitle>{title}</StylTaskInfoTitle>
                <StylTaskInfoDescription>{description}</StylTaskInfoDescription>
                <StylBtnReadMore to={taskUrl}>
                    Играть 18+
                    <StylImgDoubleArrow src={doubleArrow} alt="double arrow" />
                </StylBtnReadMore>
            </StylTaskInfoBoxCenter>
        </StylTaskInfoSlider>
    );
};

export default TaskInfoSlider;
