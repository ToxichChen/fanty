import { useState } from "react";
import { StylBoxReview, BtnReview, CountTask } from "./TaskGamePage.styled";
import {
    activeFantyDisLikeFanty,
    activeFantyLikeFanty,
} from "./../../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const TaskGameReview = ({ id }) => {
    const { getCountCanceledTask } = useActionsWithRedux();
    const [isChooseUser, setChooseUser] = useState(false);

    const selectUser = (state) => {
        setChooseUser(true);

        state === 1 ? activeFantyLikeFanty(id) : activeFantyDisLikeFanty(id);
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
