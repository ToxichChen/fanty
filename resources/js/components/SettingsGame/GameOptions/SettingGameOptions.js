import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    StylBoxSettingsGame,
    StylBtnOpenSetting,
    BtnMoreSettings,
    StylWrapperSettings,
    ModalSettings,
} from "./../../";
import { RadioBox } from "./../RadioBox";
import { optionsBasic } from "../../../constants";

const SettingGameOptions = ({ item }) => {
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
                {item.is_premium === 1 && "Доступно в полной версии игры"}
                <BtnMoreSettings type="button" onClick={handleModal}>
                    <i className="fas fa-cog"></i>
                    {item.is_premium === 0 ? "Настройки" : "Смотреть настройки"}
                </BtnMoreSettings>
            </StylWrapperSettings>
            <ModalSettings
                visible={isShowModal}
                switchVisible={handleModal}
                item={item}
            />
        </StylBoxSettingsGame>
    );
};

export default SettingGameOptions;
