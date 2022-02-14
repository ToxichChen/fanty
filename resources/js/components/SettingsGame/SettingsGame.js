import { useEffect, useState } from "react";
import SettingGameOptions from "./GameOptions/SettingGameOptions";
import SettingsGameFooter from "./SettingsGameFooter";
import { SectionTaskGame } from "./../TaskGame/TaskGamePage.styled";
import {
    StylBoxFeaturesGame,
    StylWrapperAllSettings,
    StylBoxSettingsGame,
    StylTitleUserSettings,
    StylInputUserSettings,
    StylWrapperInput,
} from "./SettingsGame.styled";

import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import MiniLoader from "./../Loader/MiniLoader";

const SettingsGame = () => {
    const { getAllSettings, loadingSettings, settingsUsers, settings } =
        useActionsWithRedux();
    const [isChangeMan, setChangeMan] = useState(settingsUsers.is_man);
    const [isChangeFemale, setChangeFemala] = useState(settingsUsers.is_female);

    useEffect(() => getAllSettings.length === 0 && settings(), []);

    return (
        <SectionTaskGame>
            <StylBoxFeaturesGame data-aos="fade-right">
                <StylWrapperAllSettings>
                    {loadingSettings ? (
                        <MiniLoader />
                    ) : (
                        getAllSettings.map((item) => {
                            return (
                                <SettingGameOptions item={item} key={item.id} />
                            );
                        })
                    )}
                </StylWrapperAllSettings>
                <StylWrapperAllSettings>
                    <StylBoxSettingsGame
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <StylTitleUserSettings>Мужчинa</StylTitleUserSettings>

                        <StylWrapperInput>
                            <i className="fas fa-male"></i>
                            <StylInputUserSettings
                                type="text"
                                onChange={(e) => setChangeMan(e.target.value)}
                                value={isChangeMan}
                            />
                        </StylWrapperInput>
                    </StylBoxSettingsGame>
                    <StylBoxSettingsGame
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <StylTitleUserSettings>Женщинa</StylTitleUserSettings>
                        <StylWrapperInput>
                            <i className="fas fa-female"></i>
                            <StylInputUserSettings
                                type="text"
                                onChange={(e) =>
                                    setChangeFemala(e.target.value)
                                }
                                value={isChangeFemale}
                            />
                        </StylWrapperInput>
                    </StylBoxSettingsGame>
                </StylWrapperAllSettings>
            </StylBoxFeaturesGame>
            <SettingsGameFooter man={isChangeMan} female={isChangeFemale} />
        </SectionTaskGame>
    );
};

export default SettingsGame;
