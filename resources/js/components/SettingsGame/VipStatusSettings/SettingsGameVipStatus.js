import React from "react";
import {
    StylWrapperVip,
    StylVipText,
    StylBtnVip,
} from "./SettingsGameVipStatus.styled";
import { routes } from "../../../Router";

const SettingsGameVipStatus = ({ vip }) => {
    return (
        <StylWrapperVip isVip={vip}>
            <StylVipText>
                <b>Настройки заблокированы </b> и будут доступны в полной версии
                игры.
            </StylVipText>
            <StylBtnVip to={routes.payGame}>
                <i className="fas fa-gem"></i> Полная версия от 159 руб
            </StylBtnVip>
        </StylWrapperVip>
    );
};

export default SettingsGameVipStatus;
