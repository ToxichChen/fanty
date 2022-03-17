import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import { SectionTaskGame } from "./../TaskGame/TaskGamePage.styled";
import {
    StylBoxFlexStartColumn,
    StylBoxFooterSettings,
    StylBoxFeaturesGame,
    StylOptionsAddedWrapper,
} from "./../SettingsGame/SettingsGame.styled";

import {
    StylBoxRange,
    StylLevelRange,
    StylTitleRange,
    StylHeaderRange,
    BtnSettings,
    StylStartBtn,
    StylRangeBoxWidth,
    StylBtnSelectRange,
    StylCenterRange,
    StylCenterListNumberTask,
    StylItemNumberTask,
    StylBoxCountTask,
} from "./SettingGameComplexity.styled";

import { routes } from "../../Router";
import useActionUsers from "../../hooks/redux/useActionUsers";
import useActionFanty from "../../hooks/redux/useActionFanty";
import useActionAlert from "../../hooks/redux/useActionAlert";
import useActionSettings from "../../hooks/redux/useActionSettings";

const SettingGameComplexity = () => {
    const navigate = useNavigate();
    const { profile } = useActionUsers();
    const { NotifyError } = useActionAlert();
    const { settingsCountTask, countTask } = useActionSettings();
    const { sendLevelFanty } = useActionFanty();

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const vip = profile.is_premium === 1 ? true : false;
    const [isRange1, setRange1] = useState(vip ? "4" : "4");
    const [isRange2, setRange2] = useState(vip ? "4" : "3");
    const [isRange3, setRange3] = useState(vip ? "4" : "2");

    const checkRanges = () => {
        if (isRange1 === "1" && isRange2 === "1" && isRange3 === "1") {
            NotifyError("Ошибка, выберите хотя-бы минимальное количество игр");
        } else {
            countTask({
                is_green:
                    isRange1 === "4"
                        ? "20"
                        : isRange1 === "3"
                        ? "16"
                        : isRange1 === "2"
                        ? "12"
                        : "0",
                is_yellow:
                    isRange2 === "4"
                        ? "20"
                        : isRange2 === "3"
                        ? "16"
                        : isRange2 === "2"
                        ? "12"
                        : "0",
                is_red:
                    isRange3 === "4"
                        ? "20"
                        : isRange3 === "3"
                        ? "16"
                        : isRange3 === "2"
                        ? "12"
                        : "0",
            });
            settingsCountTask({
                is_green:
                    isRange1 === "4"
                        ? "10"
                        : isRange1 === "3"
                        ? "8"
                        : isRange1 === "2"
                        ? "6"
                        : "0",
                is_yellow:
                    isRange2 === "4"
                        ? "10"
                        : isRange2 === "3"
                        ? "8"
                        : isRange2 === "2"
                        ? "6"
                        : "0",
                is_red:
                    isRange3 === "4"
                        ? "10"
                        : isRange3 === "3"
                        ? "8"
                        : isRange3 === "2"
                        ? "6"
                        : "0",
            });

            sendLevelFanty(
                isRange1 === "1" && isRange2 === "1"
                    ? "red"
                    : isRange1 === "1"
                    ? "yellow"
                    : "green"
            );

            navigate("/taskGame/task");
        }
    };

    const chooseRange1 = (e) => {
        setRange1(e.currentTarget.getAttribute("data-range1"));
    };

    const chooseRange2 = (e) => {
        setRange2(e.currentTarget.getAttribute("data-range2"));
    };

    const chooseRange3 = (e) => {
        setRange3(e.currentTarget.getAttribute("data-range3"));
    };

    return (
        <SectionTaskGame>
            <StylBoxCountTask data-aos="fade-right">
                <StylBoxFeaturesGame>
                    <StylOptionsAddedWrapper
                        isFullWidth={true}
                        isPadding={true}
                    >
                        <StylBoxRange
                            id="range-1"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <StylHeaderRange>
                                <StylLevelRange isRange="range1" />
                                <StylTitleRange>Зеленый уровень</StylTitleRange>
                            </StylHeaderRange>
                            <StylRangeBoxWidth
                                isRange="range1"
                                isVip={vip}
                                isActive={true}
                                isWidth={(isRange1 - 1) * 33 + "%"}
                            >
                                <div />
                                <div />
                                <StylCenterRange>
                                    <StylBtnSelectRange
                                        isRange="range1"
                                        data-range1="1"
                                        isActive={isRange1 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range1"
                                        data-range1="2"
                                        isActive={isRange1 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range1"
                                        data-range1="3"
                                        isActive={isRange1 >= 3}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range1"
                                        data-range1="4"
                                        isActive={isRange1 >= 4}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    />
                                </StylCenterRange>
                                <StylCenterListNumberTask>
                                    <StylItemNumberTask
                                        isRange="range1"
                                        data-range1="1"
                                        isActive={isRange1 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    >
                                        0
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range1"
                                        data-range1="2"
                                        isActive={isRange1 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    >
                                        6
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range1"
                                        data-range1="3"
                                        isActive={isRange1 >= 3}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    >
                                        8
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range1"
                                        data-range1="4"
                                        isActive={isRange1 >= 4}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange1}
                                    >
                                        10
                                    </StylItemNumberTask>
                                </StylCenterListNumberTask>
                            </StylRangeBoxWidth>
                        </StylBoxRange>
                        <StylBoxRange
                            id="range-2"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <StylHeaderRange>
                                <StylLevelRange isRange="range2" />
                                <StylTitleRange>
                                    Оранжевый уровень
                                </StylTitleRange>
                            </StylHeaderRange>
                            <StylRangeBoxWidth
                                isRange="range2"
                                isActive={vip}
                                isVip={vip}
                                isWidth={(isRange2 - 1) * 33 + "%"}
                            >
                                <div />
                                <div />
                                <StylCenterRange>
                                    <StylBtnSelectRange
                                        isRange="range2"
                                        data-range2="1"
                                        isActive={isRange2 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range2"
                                        data-range2="2"
                                        isActive={isRange2 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range2"
                                        data-range2="3"
                                        isActive={isRange2 >= 3}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range2"
                                        data-range2="4"
                                        isActive={isRange2 >= 4}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange2}
                                    >
                                        {!vip && (
                                            <i
                                                className="fas fa-times"
                                                style={{ color: "red" }}
                                            />
                                        )}
                                    </StylBtnSelectRange>
                                </StylCenterRange>
                                <StylCenterListNumberTask>
                                    <StylItemNumberTask
                                        isRange="range2"
                                        data-range2="1"
                                        isActive={isRange2 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    >
                                        0
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range2"
                                        data-range2="2"
                                        isActive={isRange2 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    >
                                        6
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range2"
                                        data-range2="3"
                                        isActive={isRange2 >= 3}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange2}
                                    >
                                        8
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range2"
                                        data-range2="4"
                                        isActive={isRange2 >= 4}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange2}
                                    >
                                        10
                                    </StylItemNumberTask>
                                </StylCenterListNumberTask>
                            </StylRangeBoxWidth>
                        </StylBoxRange>
                        <StylBoxRange
                            id="range-3"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <StylHeaderRange>
                                <StylLevelRange isRange="range3" />
                                <StylTitleRange>Красный уровень</StylTitleRange>
                            </StylHeaderRange>
                            <StylRangeBoxWidth
                                isRange="range3"
                                isActive={vip}
                                isVip={vip}
                                isMinCount={vip ? false : true}
                                isWidth={(isRange3 - 1) * 33 + "%"}
                            >
                                <div />
                                <div />
                                <StylCenterRange>
                                    <StylBtnSelectRange
                                        isRange="range3"
                                        data-range3="1"
                                        isActive={isRange3 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange3}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range3"
                                        data-range3="2"
                                        isActive={isRange3 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange3}
                                    />
                                    <StylBtnSelectRange
                                        isRange="range3"
                                        data-range3="3"
                                        isActive={isRange3 >= 3}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange3}
                                    >
                                        {!vip && (
                                            <i
                                                className="fas fa-times"
                                                style={{ color: "red" }}
                                            />
                                        )}
                                    </StylBtnSelectRange>
                                    <StylBtnSelectRange
                                        isRange="range3"
                                        data-range3="4"
                                        isActive={isRange3 >= 4}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange3}
                                    >
                                        {!vip && (
                                            <i
                                                className="fas fa-times"
                                                style={{ color: "red" }}
                                            />
                                        )}
                                    </StylBtnSelectRange>
                                </StylCenterRange>
                                <StylCenterListNumberTask>
                                    <StylItemNumberTask
                                        isRange="range3"
                                        data-range3="1"
                                        isActive={isRange3 >= 1}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange3}
                                    >
                                        0
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range3"
                                        data-range3="2"
                                        isActive={isRange3 >= 2}
                                        type="button"
                                        isVip={true}
                                        onClick={chooseRange3}
                                    >
                                        6
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range3"
                                        data-range3="3"
                                        isActive={isRange3 >= 3}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange3}
                                    >
                                        8
                                    </StylItemNumberTask>
                                    <StylItemNumberTask
                                        isRange="range3"
                                        data-range3="4"
                                        isActive={isRange3 >= 4}
                                        type="button"
                                        isVip={vip}
                                        onClick={chooseRange3}
                                    >
                                        10
                                    </StylItemNumberTask>
                                </StylCenterListNumberTask>
                            </StylRangeBoxWidth>
                        </StylBoxRange>
                    </StylOptionsAddedWrapper>
                    <StylBoxFooterSettings>
                        <StylBoxFlexStartColumn>
                            <BtnSettings to={routes.seksFanty.settings}>
                                <i className="fas fa-cog"></i> Настройки
                            </BtnSettings>
                        </StylBoxFlexStartColumn>
                        <StylStartBtn onClick={checkRanges}>
                            Играть
                        </StylStartBtn>
                    </StylBoxFooterSettings>
                </StylBoxFeaturesGame>
            </StylBoxCountTask>
        </SectionTaskGame>
    );
};

export default SettingGameComplexity;
