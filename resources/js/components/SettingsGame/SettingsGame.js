import React, { useState } from "react";
import {
    SectionTaskGame,
    StylBoxFeaturesGame,
    SettingGameOptions,
    StylWrapperAllSettings,
    SettingsGameFooter,
    StylBoxSettingsGame,
    StylTitleUserSettings,
    StylInputUserSettings,
    StylWrapperInput,
} from "./../";

import { players } from "../../constants";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import { MiniLoader } from "./../Loader/MiniLoader";

const SettingsGame = () => {
    const [isChangeMan, setChangeMan] = useState("");
    const [isChangeFemale, setChangeFemala] = useState("");
    const { getAllSettings, loadingSettings } = useActionsWithRedux();

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
                        {players.map(
                            (item, index) =>
                                item.gender === "man" && (
                                    <StylWrapperInput key={index}>
                                        <i className="fas fa-male"></i>
                                        <StylInputUserSettings
                                            type="text"
                                            onChange={(e) =>
                                                setChangeMan(e.target.value)
                                            }
                                            value={isChangeMan}
                                        />
                                    </StylWrapperInput>
                                )
                        )}
                    </StylBoxSettingsGame>
                    <StylBoxSettingsGame
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <StylTitleUserSettings>Женщинa</StylTitleUserSettings>
                        {players.map(
                            (item, index) =>
                                item.gender === "female" && (
                                    <StylWrapperInput key={index}>
                                        <i className="fas fa-female"></i>
                                        <StylInputUserSettings
                                            type="text"
                                            onChange={(e) =>
                                                setChangeFemala(e.target.value)
                                            }
                                            value={isChangeFemale}
                                        />
                                    </StylWrapperInput>
                                )
                        )}
                    </StylBoxSettingsGame>
                </StylWrapperAllSettings>
            </StylBoxFeaturesGame>
            <SettingsGameFooter man={isChangeMan} female={isChangeFemale} />
        </SectionTaskGame>
    );
};

export default SettingsGame;
