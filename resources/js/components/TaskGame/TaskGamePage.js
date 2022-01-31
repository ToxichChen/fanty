import { useEffect } from "react";
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
} from "./TaskGamePage.styled";

const TaskGamePage = ({ title, text, img, isTime, level, isTimeDuration }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <SectionTaskGame>
            <StylBoxContentTask data-aos="fade-right">
                <StylBoxTask data-aos="fade-right" data-aos-duration="2000">
                    <StylTitleTask>{title}, твой ход!</StylTitleTask>
                    <StylTextTask>{text}</StylTextTask>
                    <StylImgTask src={img} alt="img task" />
                    <TaskGameBar
                        isTimeDuration={isTimeDuration}
                        isTime={isTime}
                    />
                    <TaskGameReview idFanty={1} />
                </StylBoxTask>
                <StylBoxFeatures>
                    <StylBtnTask isType={level} isPreLastBtn={true}>
                        <i className="fas fa-arrow-up"></i>Следующий уровень
                    </StylBtnTask>
                    <StylBtnTask isType="task" isLastBtn={true}>
                        <i className="fas fa-arrow-down"></i>Следующее задание
                    </StylBtnTask>
                </StylBoxFeatures>
            </StylBoxContentTask>
        </SectionTaskGame>
    );
};

export default TaskGamePage;
