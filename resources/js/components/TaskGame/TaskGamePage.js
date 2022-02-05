import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TaskGameReview from "./TaskGameReview";
import TaskGameBar from "./TaskGameBar";

import {
    SectionTaskGame,
    StylBoxContentTask,
    StylBtnTask,
    StylBoxTask,
    StylTitleTask,
    StylTextTask,
    StylImgTask,
    StylBoxFeatures,
    StylBoxBtn,
} from "./TaskGamePage.styled";
import imgBgJPG from "./../../assets/bg/bg-image.jpg";
import MiniLoader from "./../Loader/MiniLoader";
import { useParams } from "react-router-dom";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const TaskGamePage = () => {
    const [isFant, setFant] = useState({});
    const { getFant, isLoadingFanty } = useActionsWithRedux();
    const { id } = useParams();

    useEffect(() => {
        getFant({ current_level: "green", fant_number: id, sex: 1 }, setFant);
    }, [id, getFant]);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <SectionTaskGame>
            {isLoadingFanty ? (
                <MiniLoader />
            ) : (
                <StylBoxContentTask data-aos="fade-right">
                    <StylBoxTask data-aos="fade-right" data-aos-duration="2000">
                        <StylTitleTask>{isFant.title}, твой ход!</StylTitleTask>
                        <StylTextTask>{isFant.text}</StylTextTask>
                        <StylImgTask src={imgBgJPG} alt="img task" />
                        <TaskGameBar
                            isTimeDuration={isFant.isTimeDuration}
                            isTime={isFant.isTime}
                        />
                        <TaskGameReview idFanty={1} />
                    </StylBoxTask>
                    <StylBoxFeatures>
                        <StylBoxBtn>
                            <StylBtnTask
                                isType={isFant.level}
                                isPreLastBtn={true}
                            >
                                <i className="fas fa-arrow-up"></i>Следующий
                                уровень
                            </StylBtnTask>
                            <StylBtnTask
                                isType={isFant.level}
                                isPreLastBtn={true}
                            >
                                <i className="fas fa-arrow-down"></i>Понизить
                                уровень уровень
                            </StylBtnTask>
                        </StylBoxBtn>
                        <StylBoxBtn>
                            <StylBtnTask isType="task" isLastBtn={true}>
                                <i className="fas fa-arrow-down"></i>Отказаться
                                от задания
                            </StylBtnTask>
                            <StylBtnTask isType="task" isLastBtn={true}>
                                <i className="fas fa-arrow-down"></i>Следующее
                                задание
                            </StylBtnTask>
                        </StylBoxBtn>
                    </StylBoxFeatures>
                </StylBoxContentTask>
            )}
        </SectionTaskGame>
    );
};

export default TaskGamePage;
