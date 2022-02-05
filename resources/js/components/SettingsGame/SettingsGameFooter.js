import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    StylBoxFlexStartColumn,
    StylBoxFooterSettings,
    StylBtnFooterSettings,
    StylBtnFooterSettingsComplexity,
} from "./SettingsGame.styled";
import { routes } from "../../Router";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import { useNavigate } from "react-router-dom";

const SettingsGameFooter = ({ man, female }) => {
    const { sendSettingsGame, NotifyError } = useActionsWithRedux();
    const navigate = useNavigate();

    const sendDataSettingsGame = () => {
        if (man === "" || female === "") {
            NotifyError("Заполните поле мужчины и женщины");
        } else {
            sendSettingsGame(man, female);
            navigate(routes.settingsGame.complexity);
        }
    };

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <StylBoxFooterSettings>
            <StylBoxFlexStartColumn>
                <StylBtnFooterSettings to={routes.home}>
                    <i className="fas fa-sign-out-alt"></i>
                    Выйти из игры
                </StylBtnFooterSettings>
            </StylBoxFlexStartColumn>
            <StylBtnFooterSettingsComplexity onClick={sendDataSettingsGame}>
                <i className="fas fa-align-left"></i>
                Количество заданий
            </StylBtnFooterSettingsComplexity>
        </StylBoxFooterSettings>
    );
};

export default SettingsGameFooter;
