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
import useActionUsers from "../../../hooks/redux/useActionUsers";

const SettingGameOptions = ({ item }) => {
    const { profile } = useActionUsers();

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
                <RadioBox
                    optionsBasic={optionsBasic}
                    item={item}
                    openModal={isShowModal}
                />
                {item.is_premium === 1 && profile.is_premium === 0
                    ? "Доступно в полной версии игры"
                    : ""}
                <BtnMoreSettings type="button" onClick={handleModal}>
                    <i className="fas fa-cog"></i>
                    {item.is_premium === 1 && profile.is_premium === 0
                        ? " Смотреть настройки "
                        : "Настройки"}
                </BtnMoreSettings>
            </StylWrapperSettings>
            <ModalSettings
                visible={isShowModal}
                switchVisible={handleModal}
                item={item}
                vip={profile.is_premium}
            />
        </StylBoxSettingsGame>
    );
};

export default SettingGameOptions;
