import { useEffect, useState } from "react";
import {
    StylBoxReview,
    BtnReview,
    CountTask,
    StylBoxLeftAngle,
    StylArrowBackToHome
} from "./TaskGamePage.styled";
import useActionFanty from "../../hooks/redux/useActionFanty";
import {
    StylBoxAddInfoTask,
    StylBoxInfo,
} from "../SettingsGame/CheckBox/CheckBox.styled";
import { routes } from "../../Router";
import { BtnSettings } from "../SettingGameComplexity/SettingGameComplexity.styled";

const TaskGameReview = ({ id }) => {
    const {
        getCountCanceledTask,
        getFantLike,
        getLikeFanty,
        likeFantNow,
        disLikeFantNow,
    } = useActionFanty();

    useEffect(() => getFantLike(), [getFantLike]);

    const [isHiddenInfo, setHiddenInfo] = useState(false);
    const [isChooseUser, setChooseUser] = useState(
        getLikeFanty === 0 || getLikeFanty === "" ? false : true
    );

    const selectUser = (state) => {
        setChooseUser(true);

        state ? likeFantNow(id) : disLikeFantNow(id);
    };

    return (
        <StylBoxReview>
            <CountTask>Отмененные задания: {getCountCanceledTask}</CountTask>
            <BtnReview
                type="button"
                onClick={() => selectUser(1)}
                isClick={isChooseUser}
            >
                <i className="far fa-thumbs-up" />
            </BtnReview>
            <BtnReview
                type="button"
                onClick={() => selectUser(0)}
                isClick={isChooseUser}
            >
                <i className="far fa-thumbs-down" />
            </BtnReview>
            <StylBoxAddInfoTask
                isTask={true}
                type="button"
                onClick={() => setHiddenInfo(true)}
                onMouseEnter={() => setHiddenInfo(!isHiddenInfo)}
                onMouseLeave={() => setHiddenInfo(!isHiddenInfo)}
            >
                <i className="fas fa-question"></i>
                <StylBoxInfo isHidden={isHiddenInfo}>
                    У вас есть возможность отказаться от 3 заданий. На 4 раз вы
                    получить последнее наказание и на этом игра закончится!
                </StylBoxInfo>
            </StylBoxAddInfoTask>
            {window.screen.width >= 768 ? (
                <StylBoxLeftAngle>
                    <BtnSettings to={routes.seksFanty.settings}>
                        <i className="fas fa-cog"></i> Настройки
                    </BtnSettings>
                </StylBoxLeftAngle>) : (
                <StylArrowBackToHome to={routes.seksFanty.settings}>
                    <i className="fa fa-door-open" />
                </StylArrowBackToHome>)}
        </StylBoxReview>
    );
};

export default TaskGameReview;
