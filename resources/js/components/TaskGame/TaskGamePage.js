import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    StylSubTitleTask,
} from "./TaskGamePage.styled";
import MiniLoader from "./../Loader/MiniLoader";
import useActionFanty from "../../hooks/redux/useActionFanty";
import useActionUsers from "../../hooks/redux/useActionUsers";
import useActionAlert from "../../hooks/redux/useActionAlert";
import useActionSettings from "../../hooks/redux/useActionSettings";

const TaskGamePage = () => {
    const navigate = useNavigate();
    const { clearDataSettingAndFant } = useActionUsers();
    const { NotifySuccess } = useActionAlert();
    const { settingsUsers } = useActionSettings();
    const {
        isLoadingFanty,
        getFanty,
        getCountTask,
        getCountCanceledTask,
        getNumberFanty,
        getLevelFanty,
        getFantyPunishment,
        isPunishment,
        changeSexFant,
        getFantSex,
        lastFantGame,
        clearPunishmentFant,
        getFant,
        canceledTask,
        sendNumberFanty,
        sendLevelFanty,
        punishmentFant,
        punishmentFinalFant,
    } = useActionFanty();
    const [isLastFant, setLastFant] = useState(false);
    const [isLevelFant, setLevelFant] = useState(
        getLevelFanty !== ""
            ? getLevelFanty
            : getCountTask.is_green === "0" && getCountTask.is_yellow === "0"
                ? "red"
                : getCountTask.is_yellow === "0"
                    ? "green"
                    : "yellow"
    );

    useEffect(() => {
        getFant({
            current_level: isLevelFant,
            fant_number: getNumberFanty,
            sex: getFantSex,
        });
    }, []);

    const upLevelFant = () => {
        clearPunishmentFant();

        if (getCountCanceledTask === 4) {
            clearDataSettingAndFant();
            NotifySuccess("Вы прошли последнее наказание. Игра окончена");
            navigate("/");
        }

        if (isLevelFant === "green" && getCountTask.is_yellow !== "0") {
            setLevelFant("yellow");
            sendNumberFanty(0);
            sendLevelFanty("yellow");
            changeSexFant(2);
            getFant({ current_level: "yellow", fant_number: 0, sex: 2 });
        } else if (getCountTask.is_red !== "0") {
            setLevelFant("red");
            sendNumberFanty(0);
            sendLevelFanty("red");
            changeSexFant(2);
            getFant({ current_level: "red", fant_number: 0, sex: 2 });
        }
    };

    const nextTask = () => {
        clearPunishmentFant();

        if (getCountCanceledTask === 4 || isLastFant) {
            clearDataSettingAndFant();
            NotifySuccess("Вы прошли последнее наказание. Игра окончена");
            navigate("/");
        } else if (
            isLevelFant === "red" &&
            getNumberFanty === getCountTask.is_red - 2
        ) {
            lastFantGame();
            setLastFant(true);
        } else if (
            isLevelFant === "yellow" &&
            getNumberFanty === getCountTask.is_yellow - 2 &&
            "0" === getCountTask.is_red
        ) {
            setLastFant(true);
        } else if (
            isLevelFant === "green" &&
            getNumberFanty === getCountTask.is_green - 2 &&
            "0" === getCountTask.is_red &&
            "0" === getCountTask.is_yellow
        ) {
            setLastFant(true);
        }
        else {
            if (
                getNumberFanty < getCountTask.is_green - 1 &&
                isLevelFant === "green"
            ) {

                changeSexFant(getFantSex === 1 ? 2 : 1);
                getFant({
                    current_level: isLevelFant,
                    fant_number: getNumberFanty + 1,
                    sex: getFantSex === 1 ? 2 : 1,
                });
                sendNumberFanty(getNumberFanty + 1);
            } else if (
                getNumberFanty === getCountTask.is_green - 1 &&
                isLevelFant === "green"
            ) {
                changeSexFant(2);
                getFant({ current_level: "yellow", fant_number: 0, sex: 2 });
                setLevelFant("yellow");
                sendNumberFanty(0);
                sendLevelFanty("yellow");
            } else if (
                getNumberFanty < getCountTask.is_yellow - 1 &&
                isLevelFant === "yellow"
            ) {
                changeSexFant(getFantSex === 1 ? 2 : 1);
                getFant({
                    current_level: isLevelFant,
                    fant_number: getNumberFanty + 1,
                    sex: getFantSex === 1 ? 2 : 1,
                });
                sendNumberFanty(getNumberFanty + 1);
            } else if (
                getNumberFanty === getCountTask.is_yellow - 1 &&
                isLevelFant === "yellow"
            ) {
                changeSexFant(2);
                getFant({ current_level: "red", fant_number: 0, sex: 2 });
                setLevelFant("red");
                sendNumberFanty(0);
                sendLevelFanty("red");
            } else if (
                getNumberFanty < getCountTask.is_red - 2 &&
                isLevelFant === "red"
            ) {
                getFant({
                    current_level: isLevelFant,
                    fant_number: getNumberFanty + 1,
                    sex: getFantSex === 1 ? 2 : 1,
                });
                changeSexFant(getFantSex === 1 ? 2 : 1);
                sendNumberFanty(getNumberFanty + 1);
            } else if (
                getNumberFanty === getCountTask.is_red &&
                isLevelFant === "red"
            ) {
                navigate("/", { replace: true });
                clearDataSettingAndFant();
                NotifySuccess("Вы успешно прошли все задания");
            }
        }
    };

    const cancelTask = (sex) => {
        if (getCountCanceledTask === 3) {
            punishmentFinalFant();
            canceledTask();
        } else {
            canceledTask();
            punishmentFant({ current_level: isLevelFant, sex: sex });
        }
    };

    return (
        <div>
            <SectionTaskGame>
                <StylBoxContentTask>
                    {isLoadingFanty ? (
                        <MiniLoader isHeight={true} />
                    ) : (
                        <>
                            <StylBoxTask>
                                <StylTitleTask>
                                    {getFantSex === 1
                                        ? settingsUsers.is_man
                                        : settingsUsers.is_female}
                                    , твой ход!
                                </StylTitleTask>
                                <StylSubTitleTask>
                                    {Object.keys(getFantyPunishment).length > 1
                                        ? getFantyPunishment.title
                                        : getFanty.title}
                                </StylSubTitleTask>
                                <StylTextTask dangerouslySetInnerHTML={{
                                    __html:
                                        Object.keys(getFantyPunishment).length > 1
                                            ? getFantyPunishment.content
                                            : getFanty.content

                                }}>

                                </StylTextTask>
                                <StylImgTask
                                    isHidden={
                                        Object.keys(getFantyPunishment).length >
                                            1 &&
                                            getFantyPunishment.media.trim() === ""
                                            ? true
                                            : Object.keys(getFantyPunishment)
                                                .length > 1 &&
                                                getFantyPunishment.media.trim() !== ""
                                                ? false
                                                : Object.keys(getFanty).length >= 1 &&
                                                    getFanty.media.trim() === ""
                                                    ? true
                                                    : false
                                    }
                                    src={
                                        Object.keys(getFantyPunishment).length >
                                            1 &&
                                            getFantyPunishment.media.trim() === ""
                                            ? ''
                                            : Object.keys(getFantyPunishment)
                                                .length > 1 &&
                                                getFantyPunishment.media.trim() !== ""
                                                ? getFantyPunishment.media
                                                : Object.keys(getFanty).length >= 1 &&
                                                    getFanty.media.trim() === ""
                                                    ? ''
                                                    : getFanty.media
                                    }
                                    alt="img task"
                                />
                                {
                                    (getFantyPunishment.is_timer_active > 0 && getFantyPunishment.timer > 0) &&
                                    <TaskGameBar
                                        isTimeDuration={getFantyPunishment.timer}
                                        isTime={getFantyPunishment.is_timer_active}
                                    />
                                }
                                {
                                    (getFanty.is_timer_active > 0 && getFanty.timer > 0) &&
                                    <TaskGameBar
                                        isTimeDuration={getFanty.timer
                                        }
                                        isTime={getFanty.is_timer_active}
                                        nextTask={nextTask}
                                    />
                                }

                                <TaskGameReview
                                    idFanty={
                                        Object.keys(getFantyPunishment).length > 1
                                            ? getFantyPunishment.id
                                            : getFanty.id
                                    }
                                />
                            </StylBoxTask>
                            <StylBoxFeatures>
                                <StylBoxBtn>
                                    <StylBtnTask
                                        type="button"
                                        isType={
                                            isLevelFant === "green" &&
                                                getCountTask.is_yellow === "0" &&
                                                getCountCanceledTask.is_red === "0"
                                                ? "none"
                                                : isLevelFant === "yellow" &&
                                                    getCountTask.is_red === "0"
                                                    ? "none"
                                                    : isLevelFant === "red"
                                                        ? "none"
                                                        : isLevelFant
                                        }
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
                                            isLastFant
                                                ? "none"
                                                : isLevelFant === "green"
                                                    ? "none"
                                                    : getCountCanceledTask === 4
                                                        ? "none"
                                                        : isPunishment === false ? 'none' :
                                                            isLevelFant
                                        }
                                        onClick={() =>
                                            cancelTask(getFantSex === 1 ? 1 : 2)
                                        }
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
        </div>
    );
};

export default TaskGamePage;
