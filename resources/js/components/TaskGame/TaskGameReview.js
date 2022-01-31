import { useState } from "react";
import { StylBoxReview, BtnReview } from "./TaskGamePage.styled";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import {
    activeFantyDisLikeFanty,
    activeFantyLikeFanty,
} from "./../../redux/activeFantyFeatures/activeFantyFeaturesOperation";

const TaskGameReview = ({ id }) => {
    const [isChooseUser, setChooseUser] = useState(false);
    const { likesFanty, disLikesFanty } = useActionsWithRedux();

    const selectUser = (state) => {
        setChooseUser(true);

        state === 1 ? activeFantyLikeFanty(id) : activeFantyDisLikeFanty(id);
    };

    return (
        <StylBoxReview>
            <BtnReview
                type="button"
                onClick={() => selectUser(1)}
                isClick={isChooseUser}
            >
                <i className="far fa-thumbs-up" />: {likesFanty}
            </BtnReview>
            <BtnReview
                type="button"
                onClick={() => selectUser(0)}
                isClick={isChooseUser}
            >
                <i className="far fa-thumbs-down" />: {disLikesFanty}
            </BtnReview>
        </StylBoxReview>
    );
};

export default TaskGameReview;
