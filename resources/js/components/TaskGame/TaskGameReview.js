import { useEffect, useState } from "react";
import { StylBoxReview, BtnReview, CountTask } from "./TaskGamePage.styled";
import {
    activeFantyDisLikeFanty,
    activeFantyLikeFanty,
} from "./../../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const TaskGameReview = ({ id }) => {
    const {
        getCountCanceledTask,
        getFantLike,
        getLikeFanty,
        likeFantNow,
        disLikeFantNow,
    } = useActionsWithRedux();
    useEffect(() => getFantLike(), [id]);

    const [isChooseUser, setChooseUser] = useState(
        getLikeFanty === 0 ? false : true
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
        </StylBoxReview>
    );
};

export default TaskGameReview;
