import { useEffect, useState } from "react";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

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
    StylSubTitleTask,
} from "./TaskGamePage.styled";
import imgBgJPG from "./../../assets/bg/bg-image.jpg";
import MiniLoader from "./../Loader/MiniLoader";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const TaskGamePage = () => {
    const navigate = useNavigate();
    const {
        isLoadingFanty,
        getFanty,
        getCountTask,
        getCountCanceledTask,
        settingsUsers,
        getNumberFanty,
        getLevelFanty,
        getFantyPunishment,
        clearPunishmentFant,
        getFant,
        NotifySuccess,
        clearDataSettingAndFant,
        canceledTask,
        sendNumberFanty,
        sendLevelFanty,
        punishmentFant,
        punishmentFinalFant,
    } = useActionsWithRedux();
    const [isLevelFant, setLevelFant] = useState(
        getLevelFanty !== ""
            ? getLevelFanty
            : getCountTask.is_green === "0" && getCountTask.is_yellow === "0"
            ? "red"
            : getCountTask.is_green === "0"
            ? "yellow"
            : "green"
    );

    useEffect(() => {
        sendLevelFanty(
            getCountTask.is_green === "0" && getCountTask.is_yellow === "0"
                ? "red"
                : getCountTask.is_green === "0"
                ? "yellow"
                : "green"
        );
        Object.keys(getFanty).length <= 1 &&
            getFant({
                current_level: isLevelFant,
                fant_number: getNumberFanty,
                sex: 0,
            });
    }, []);

    const upLevelFant = () => {
        clearPunishmentFant();

        if (getCountCanceledTask === 3) {
            clearDataSettingAndFant();
            NotifySuccess("Вы прошли последнее наказание. Игра окончена");
            navigate("/");
        }

        if (isLevelFant === "green" && getCountTask.is_yellow !== "0") {
            setLevelFant("yellow");
            sendNumberFanty(0);
            sendLevelFanty("yellow");
            getFant({ current_level: "yellow", fant_number: 0, sex: 0 });
        } else if (getCountTask.is_red !== "0") {
            setLevelFant("red");
            sendNumberFanty(0);
            sendLevelFanty("red");
            getFant({ current_level: "red", fant_number: 0, sex: 0 });
        }
    };

    const nextTask = () => {
        clearPunishmentFant();

        if (getCountCanceledTask === 3) {
            clearDataSettingAndFant();
            NotifySuccess("Вы прошли последнее наказание. Игра окончена");
            navigate("/");
        }

        if (
            getNumberFanty < getCountTask.is_green - 1 &&
            isLevelFant === "green"
        ) {
            getFant({
                current_level: isLevelFant,
                fant_number: getNumberFanty + 1,
                sex: getFanty.sex ? 0 : 1,
            });
            sendNumberFanty(getNumberFanty + 1);
        } else if (
            getNumberFanty === getCountTask.is_green - 1 &&
            isLevelFant === "green"
        ) {
            getFant({ current_level: "yellow", fant_number: 0, sex: 0 });
            setLevelFant("yellow");
            sendNumberFanty(0);
            sendLevelFanty("yellow");
        } else if (
            getNumberFanty < getCountTask.is_yellow - 1 &&
            isLevelFant === "yellow"
        ) {
            getFant({
                current_level: isLevelFant,
                fant_number: getNumberFanty + 1,
                sex: getFanty.sex ? 0 : 1,
            });
            sendNumberFanty(getNumberFanty + 1);
        } else if (
            getNumberFanty === getCountTask.is_yellow - 1 &&
            isLevelFant === "yellow"
        ) {
            getFant({ current_level: "red", fant_number: 0, sex: 0 });
            setLevelFant("red");
            sendNumberFanty(0);
            sendLevelFanty("red");
        } else if (
            getNumberFanty < getCountTask.is_red &&
            isLevelFant === "red"
        ) {
            getFant({
                current_level: isLevelFant,
                fant_number: getNumberFanty + 1,
                sex: getFanty.sex ? 0 : 1,
            });
            sendNumberFanty(getNumberFanty + 1);
        } else if (
            getNumberFanty === getCountTask.is_red &&
            isLevelFant === "red"
        ) {
            navigate("/", { replace: true });
            clearDataSettingAndFant();
            NotifySuccess("Вы успешно прошли все задания");
        }
    };

    const cancelTask = () => {
        if (getCountCanceledTask === 3) {
            punishmentFinalFant();
        } else {
            canceledTask();
            punishmentFant({ current_level: isLevelFant, sex: getFanty.sex });
        }
    };

    return (
        <SectionTaskGame>
            <StylBoxContentTask>
                {isLoadingFanty ? (
                    <MiniLoader />
                ) : (
                    <>
                        <StylBoxTask>
                            <StylTitleTask>
                                {getFanty.sex
                                    ? settingsUsers.is_man
                                    : settingsUsers.is_female}
                                , твой ход!
                            </StylTitleTask>
                            <StylSubTitleTask>
                                {Object.keys(getFantyPunishment).length <= 1
                                    ? getFantyPunishment.title
                                    : getFanty.title}
                            </StylSubTitleTask>
                            <StylTextTask>{getFanty.content}</StylTextTask>
                            <StylImgTask
                                src={
                                    Object.keys(getFantyPunishment).length <=
                                        1 &&
                                    getFantyPunishment.media.trim() === ""
                                        ? imgBgJPG
                                        : Object.keys(getFanty).length <= 1
                                        ? getFantyPunishment.media
                                        : getFanty.media.trim() === ""
                                        ? imgBgJPG
                                        : getFanty.media
                                }
                                alt="img task"
                            />
                            <TaskGameBar
                                isTimeDuration={
                                    Object.keys(getFantyPunishment).length <= 1
                                        ? getFantyPunishment.isTimget
                                        : getFanty.isTimeDuration
                                }
                                isTime={
                                    Object.keys(getFantyPunishment).length <= 1
                                        ? getFantyPunishment.isTime
                                        : getFanty.isTime
                                }
                                nextTask={nextTask}
                            />
                            <TaskGameReview
                                idFanty={
                                    Object.keys(getFantyPunishment).length <= 1
                                        ? getFantyPunishment.id
                                        : getFanty.id
                                }
                            />
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
                                    isType={
                                        isLevelFant === "green"
                                            ? "none"
                                            : getCountCanceledTask === 4
                                            ? "none"
                                            : isLevelFant
                                    }
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
