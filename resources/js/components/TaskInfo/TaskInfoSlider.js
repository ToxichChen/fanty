import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";

import { StylImgDoubleArrow } from "./../common/ImgLogo/ImgLogo.styled";
import { StylBtnReadMore } from "./../PageHome/HeaderPageHome/SliderCard/SliderCard.styled";
import {
    StylTaskInfoSlider,
    StylTaskInfoBoxCenter,
    StylTaskInfoTitle,
    StylTaskInfoDescription,
} from "./TaskInfoSlider.styled";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";
import useActionWithRedux from "./../../hooks/useActionsWithRedux";

const TaskInfoSlider = ({
    title,
    description,
    taskUrl = "/settingsGame/1",
}) => {
    const { settings } = useActionWithRedux();
    return (
        <StylTaskInfoSlider>
            <HeaderMenuPageHome />
            <StylTaskInfoBoxCenter>
                <StylTaskInfoTitle>{title}</StylTaskInfoTitle>
                <StylTaskInfoDescription>{description}</StylTaskInfoDescription>
                <StylBtnReadMore to={taskUrl} onClick={settings}>
                    Начать игру
                    <StylImgDoubleArrow src={doubleArrow} alt="double arrow" />
                </StylBtnReadMore>
            </StylTaskInfoBoxCenter>
        </StylTaskInfoSlider>
    );
};

export default TaskInfoSlider;
