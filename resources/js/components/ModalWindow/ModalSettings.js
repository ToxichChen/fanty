import {
    StylWrapperAllSettings,
    StylWrapperCenterContent,
    StylVipStatusModal,
    StylOptionsAddedWrapper,
    StylBtnCardSettings,
} from "./../SettingsGame/SettingsGame.styled";
import {
    StylVipText,
    StylBtnVip,
} from "./../SettingsGame/VipStatusSettings/SettingsGameVipStatus.styled";
import {
    StylModalSettings,
    StylTitleModalSettings,
    StylBtnSaveAndClose,
    StylImgModal,
    StylTextModal,
} from "./ModalSettings.styled";

import iconManSVG from "./../../assets/icons/icon-man.svg";
import iconGirlSVG from "./../../assets/icons/icon-girl.svg";

import Checkbox from "../SettingsGame/CheckBox/CheckBox";
import RadioBox from "./../SettingsGame/RadioBox/RadioBox";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const ModalSettings = ({ visible, switchVisible, item }) => {
    const { profile } = useActionsWithRedux();

    return (
        <StylModalSettings isVisible={visible}>
            <StylBtnCardSettings type="button" onClick={switchVisible}>
                <i className="fas fa-times"></i>
            </StylBtnCardSettings>
            <StylTitleModalSettings>{item.title}</StylTitleModalSettings>
            <StylVipStatusModal isVip={false}>
                <StylVipText isLowWidth={true}>
                    <b>Настройки заблокированы </b> и будут доступны в полной
                    версии игры.
                </StylVipText>
                <StylBtnVip>
                    <i className="fas fa-gem"></i> Полная версия от 159 руб
                </StylBtnVip>
            </StylVipStatusModal>
            {item.has_sex_difference ? (
                <StylWrapperAllSettings isColumn={true}>
                    <StylWrapperAllSettings>
                        <StylWrapperCenterContent>
                            <StylImgModal src={iconManSVG} alt="man" />
                            <StylTextModal>Мужчина</StylTextModal>
                        </StylWrapperCenterContent>
                        <StylWrapperCenterContent>
                            <StylImgModal src={iconGirlSVG} alt="girl" />
                            <StylTextModal>Женщина</StylTextModal>
                        </StylWrapperCenterContent>
                    </StylWrapperAllSettings>

                    <StylWrapperAllSettings>
                        <StylOptionsAddedWrapper>
                            {item.is_finish ? (
                                <RadioBox
                                    item={item}
                                    optionsBasic={item.subsettings}
                                    subsettings={
                                        item.is_premium === 1 &&
                                        profile.response.is_premium === 0
                                    }
                                />
                            ) : (
                                item.subsettings.map((elem, index) => {
                                    if (elem.sex === 1) {
                                        return (
                                            <Checkbox
                                                key={index}
                                                elem={elem}
                                                premium={
                                                    item.is_premium === 1 &&
                                                    profile.response
                                                        .is_premium === 0
                                                }
                                            />
                                        );
                                    }
                                    return false;
                                })
                            )}
                        </StylOptionsAddedWrapper>

                        <StylOptionsAddedWrapper>
                            {item.is_finish ? (
                                <RadioBox
                                    item={item}
                                    optionsBasic={item.subsettings}
                                    subsettings={
                                        item.is_premium === 1 &&
                                        profile.response.is_premium === 0
                                    }
                                />
                            ) : (
                                item.subsettings.map((elem, index) => {
                                    if (elem.sex === 2) {
                                        return (
                                            <Checkbox
                                                key={index}
                                                elem={elem}
                                                premium={
                                                    item.is_premium === 1 &&
                                                    profile.response
                                                        .is_premium === 0
                                                }
                                            />
                                        );
                                    }
                                    return false;
                                })
                            )}
                        </StylOptionsAddedWrapper>
                    </StylWrapperAllSettings>
                </StylWrapperAllSettings>
            ) : (
                <StylWrapperAllSettings>
                    <StylOptionsAddedWrapper isFullWidth={true}>
                        {item.is_finish ? (
                            <RadioBox
                                item={item}
                                optionsBasic={item.subsettings}
                                subsettings={
                                    item.is_premium === 1 &&
                                    profile.response.is_premium === 0
                                }
                            />
                        ) : (
                            item.subsettings.map((elem, index) => (
                                <Checkbox
                                    key={index}
                                    elem={elem}
                                    premium={
                                        item.is_premium === 1 &&
                                        profile.response.is_premium === 0
                                    }
                                />
                            ))
                        )}
                    </StylOptionsAddedWrapper>
                </StylWrapperAllSettings>
            )}

            <StylBtnSaveAndClose onClick={switchVisible}>
                Сохранить и закрыть
            </StylBtnSaveAndClose>
        </StylModalSettings>
    );
};

export default ModalSettings;
