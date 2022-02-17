import { useEffect, useState } from "react";
import {
    StylBoxReview,
    BtnReview,
    CountTask,
    StylArrowBackToHome,
} from "./TaskGamePage.styled";
import useActionFanty from "../../hooks/redux/useActionFanty";
import {
    StylBoxAddInfoTask,
    StylBoxInfo,
} from "../SettingsGame/CheckBox/CheckBox.styled";

const TaskGameReview = ({ id }) => {
    const {
        getCountCanceledTask,
        getFantLike,
        getLikeFanty,
        likeFantNow,
        disLikeFantNow,
    } = useActionFanty();

    useEffect(() => getFantLike(), [id]);

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
                onClick={() => setHiddenInfo(!isHiddenInfo)}
                onFocus={() => setHiddenInfo(true)}
                onBlur={() => setHiddenInfo(false)}
            >
                <i className="fas fa-question"></i>
                <StylBoxInfo isHidden={isHiddenInfo}>
                    У вас есть возможность отказаться от 3 заданий. На 4 раз вы
                    получить последнее наказание и на этом игра закончится!
                </StylBoxInfo>
            </StylBoxAddInfoTask>
            <StylArrowBackToHome to="/">
                <i className="fa fa-door-open" />
            </StylArrowBackToHome>
        </StylBoxReview>
    );
};

export default TaskGameReview;
