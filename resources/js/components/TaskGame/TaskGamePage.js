import { useEffect, useState } from "react";
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
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import { useNavigate } from "react-router";

const TaskGamePage = () => {
    const {
        getFant,
        isLoadingFanty,
        getFanty,
        NotifySuccess,
        getCountTask,
        clearDataSettingAndFant,
        canceledTask,
    } = useActionsWithRedux();
    const navigate = useNavigate();
    const [isNumberFant, setNumberFant] = useState(0);
    const [isLevelFant, setLevelFant] = useState(
        getCountTask.is_green === "0" && getCountTask.is_yellow === "0"
            ? "red"
            : getCountTask.is_green === "0"
            ? "yellow"
            : "green"
    );

    console.log(isLevelFant);

    useEffect(
        () =>
            Object.keys(getFanty).length === 0 &&
            getFant({
                current_level: isLevelFant,
                fant_number: isNumberFant,
                sex: 0,
            }),
        []
    );

    const upLevelFant = () => {
        if (isLevelFant === "green") {
            setLevelFant("yellow");
            setNumberFant(0);
            getFant({ current_level: "yellow", fant_number: 0, sex: 0 });
        } else {
            setLevelFant("red");
            setNumberFant(0);
            getFant({ current_level: "red", fant_number: 0, sex: 0 });
        }
    };

    const nextTask = () => {
        if (isNumberFant < getCountTask.is_green && isLevelFant === "green") {
            setNumberFant(isNumberFant + 1);
            getFant({
                current_level: isLevelFant,
                fant_number: isNumberFant + 1,
                sex: getFanty.sex ? 0 : 1,
            });
        } else if (
            isNumberFant === getCountTask.is_green &&
            isLevelFant === "green"
        ) {
            getFant({ current_level: "yellow", fant_number: 0, sex: 0 });
            setLevelFant("yellow");
            setNumberFant(0);
        } else if (
            isNumberFant < getCountTask.is_yellow &&
            isLevelFant === "yellow"
        ) {
            setNumberFant(isNumberFant + 1);
            getFant({
                current_level: isLevelFant,
                fant_number: isNumberFant + 1,
                sex: getFanty.sex ? 0 : 1,
            });
        } else if (
            isNumberFant === getCountTask.is_yellow &&
            isLevelFant === "yellow"
        ) {
            setLevelFant("red");
            getFant({ current_level: "red", fant_number: 0, sex: 0 });
            setNumberFant(0);
        } else if (
            isNumberFant < getCountTask.is_red &&
            isLevelFant === "red"
        ) {
            getFant({
                current_level: isLevelFant,
                fant_number: isNumberFant + 1,
                sex: getFanty.sex ? 0 : 1,
            });
            setNumberFant(isNumberFant + 1);
        } else if (
            isNumberFant === getCountTask.is_red &&
            isLevelFant === "red"
        ) {
            navigate("/", { replace: true });
            clearDataSettingAndFant();
            NotifySuccess("Вы успешно прошли все задания");
        }
    };

    const cancelTask = () => {
        nextTask();
        canceledTask();
    };

    return (
        <SectionTaskGame>
            <StylBoxContentTask data-aos="fade-right">
                {isLoadingFanty ? (
                    <MiniLoader />
                ) : (
                    <>
                        <StylBoxTask
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <StylTitleTask>
                                {getFanty.title}, твой ход!
                            </StylTitleTask>
                            <StylTextTask>{getFanty.text}</StylTextTask>
                            <StylImgTask src={imgBgJPG} alt="img task" />
                            <TaskGameBar
                                isTimeDuration={getFanty.isTimeDuration}
                                isTime={getFanty.isTime}
                            />
                            <TaskGameReview idFanty={getFanty.id} />
                        </StylBoxTask>
                        <StylBoxFeatures>
                            <StylBoxBtn>
                                <StylBtnTask
                                    type="button"
                                    isType={isLevelFant}
                                    isPreLastBtn={true}
                                    onClick={upLevelFant}
                                >
                                    <i className="fas fa-arrow-up"></i>Следующий
                                    уровень
                                </StylBtnTask>
                            </StylBoxBtn>
                            <StylBoxBtn>
                                <StylBtnTask
                                    type="button"
                                    isType={isLevelFant}
                                    onClick={cancelTask}
                                    isCancel={true}
                                >
                                    <i className="fas fa-ban"></i>Отказаться от
                                    задания
                                </StylBtnTask>
                                <StylBtnTask
                                    type="button"
                                    onClick={nextTask}
                                    isType={isLevelFant}
                                    isArrowRight={true}
                                >
                                    <i className="fas fa-arrow-right"></i>
                                    Следующее задание
                                </StylBtnTask>
                            </StylBoxBtn>
                        </StylBoxFeatures>
                    </>
                )}
            </StylBoxContentTask>
        </SectionTaskGame>
    );
};

export default TaskGamePage;
