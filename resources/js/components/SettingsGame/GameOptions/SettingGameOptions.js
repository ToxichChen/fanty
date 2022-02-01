import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { StylBoxSettingsGame, BtnMoreSettings } from "./../SettingsGame.styled";
import {
    StylBtnOpenSetting,
    StylWrapperSettings,
} from "./SettingGameOptions.styled";

import ModalSettings from "./../../ModalWindow/ModalSettings";
import RadioBox from "./../RadioBox/RadioBox";
import { optionsBasic } from "../../../constants";
import useActionsWithRedux from "../../../hooks/useActionsWithRedux";

const SettingGameOptions = ({ item }) => {
    const { premium } = useActionsWithRedux();

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [isShowOption, setShowOption] = useState(false);
    const [isShowModal, setShowModal] = useState(false);

    const showAnotherOption = () => {
        setShowOption(!isShowOption);
    };

    const handleModal = () => {
        setShowModal(!isShowModal);
    };

    return (
        <StylBoxSettingsGame key={item.id}>
            <StylBtnOpenSetting
                onClick={showAnotherOption}
                isShow={isShowOption}
            >
                {item.title} <i className="fas fa-chevron-right"></i>
            </StylBtnOpenSetting>

            <StylWrapperSettings isShow={isShowOption}>
                <RadioBox optionsBasic={optionsBasic} item={item} />
                {item.is_premium === 1 && premium === 0
                    ? "Доступно в полной версии игры"
                    : ""}
                <BtnMoreSettings type="button" onClick={handleModal}>
                    <i className="fas fa-cog"></i>
                    {item.is_premium === 1 && premium === 0
                        ? " Смотреть настройки "
                        : "Настройки"}
                </BtnMoreSettings>
            </StylWrapperSettings>
            <ModalSettings
                visible={isShowModal}
                switchVisible={handleModal}
                item={item}
                vip={premium}
            />
        </StylBoxSettingsGame>
    );
};

export default SettingGameOptions;
