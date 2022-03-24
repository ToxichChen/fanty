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
import { routes } from "../../Router";

import iconManSVG from "./../../assets/icons/icon-man.svg";
import iconGirlSVG from "./../../assets/icons/icon-girl.svg";

import Checkbox from "../SettingsGame/CheckBox/CheckBox";
import RadioBox from "./../SettingsGame/RadioBox/RadioBox";

const ModalSettings = ({ visible, switchVisible, item, vip }) => {
    return (
        <StylModalSettings isVisible={visible}>
            <StylBtnCardSettings type="button" onClick={switchVisible}>
                <i className="fas fa-times"></i>
            </StylBtnCardSettings>
            <StylTitleModalSettings>{item.title}</StylTitleModalSettings>
            {vip === 0 && (
                <StylVipStatusModal>
                    <StylVipText isLowWidth={true}>Для доступа к игре, активируйте статус VIP
                    </StylVipText>
                    <StylBtnVip to={routes.payGame}>
                        <i className="fas fa-gem"></i> Активировать  VIP
                    </StylBtnVip>
                </StylVipStatusModal>
            )}
            {item.has_sex_difference ? (
                <StylWrapperAllSettings isColumn={true}>
                    {window.screen.width <= 768 ? (
                        <StylWrapperAllSettings isColumn={true}>
                            <StylWrapperAllSettings>
                                <StylWrapperCenterContent>
                                    <StylImgModal src={iconManSVG} alt="man" />
                                    <StylTextModal>Мужчина</StylTextModal>
                                </StylWrapperCenterContent>
                                <StylOptionsAddedWrapper>
                                    {item.is_radio ? (
                                        <RadioBox
                                            item={item}
                                            optionsBasic={item.subsettings}
                                            subsettings={
                                                item.is_premium === 1 && vip === 0
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
                                                            vip === 0
                                                        }
                                                    />
                                                );
                                            }
                                            return false;
                                        })
                                    )}
                                </StylOptionsAddedWrapper>
                            </StylWrapperAllSettings>
                            <StylWrapperCenterContent>
                                <StylImgModal src={iconGirlSVG} alt="girl" />
                                <StylTextModal>Женщина</StylTextModal>
                            </StylWrapperCenterContent>
                            <StylOptionsAddedWrapper>
                                {item.is_radio ? (
                                    <RadioBox
                                        item={item}
                                        optionsBasic={item.subsettings}
                                        subsettings={
                                            item.is_premium === 1 && vip === 0
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
                                                        vip === 0
                                                    }
                                                />
                                            );
                                        }
                                        return false;
                                    })
                                )}
                            </StylOptionsAddedWrapper>

                        </StylWrapperAllSettings>
                    ) : (<StylWrapperAllSettings isColumn={true}>
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
                                {item.is_radio ? (
                                    <RadioBox
                                        item={item}
                                        optionsBasic={item.subsettings}
                                        subsettings={
                                            item.is_premium === 1 && vip === 0
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
                                                        vip === 0
                                                    }
                                                />
                                            );
                                        }
                                        return false;
                                    })
                                )}
                            </StylOptionsAddedWrapper>

                            <StylOptionsAddedWrapper>
                                {item.is_radio ? (
                                    <RadioBox
                                        item={item}
                                        optionsBasic={item.subsettings}
                                        subsettings={
                                            item.is_premium === 1 && vip === 0
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
                                                        vip === 0
                                                    }
                                                />
                                            );
                                        }
                                        return false;
                                    })
                                )}
                            </StylOptionsAddedWrapper>
                        </StylWrapperAllSettings>
                    </StylWrapperAllSettings>)}
                </StylWrapperAllSettings>
            ) : (
                <StylWrapperAllSettings>
                    <StylOptionsAddedWrapper isFullWidth={true}>
                        {item.is_radio ? (
                            <RadioBox
                                item={item}
                                optionsBasic={item.subsettings}
                                subsettings={item.is_premium === 1 && vip === 0}
                            />
                        ) : (
                            item.subsettings.map((elem, index) => (
                                <Checkbox
                                    key={index}
                                    elem={elem}
                                    premium={item.is_premium === 1 && vip === 0}
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
