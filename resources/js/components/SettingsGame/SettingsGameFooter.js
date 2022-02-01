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

const SettingsGameFooter = ({ man, female }) => {
    const { sendSettingsGame } = useActionsWithRedux();

    const sendDataSettingsGame = () => {
        sendSettingsGame(man, female);
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
            <StylBtnFooterSettingsComplexity
                to={routes.settingsGame.complexity}
                onClick={sendDataSettingsGame}
            >
                <i className="fas fa-align-left"></i>
                Количество заданий
            </StylBtnFooterSettingsComplexity>
        </StylBoxFooterSettings>
    );
};

export default SettingsGameFooter;
