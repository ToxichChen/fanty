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
            <StylVipText>Для доступа к игре, активируйте статус VIP
                игры.
            </StylVipText>
            <StylBtnVip to={routes.payGame}>
                <i className="fas fa-gem"></i> Активировать  VIP
            </StylBtnVip>
        </StylWrapperVip>
    );
};

export default SettingsGameVipStatus;
