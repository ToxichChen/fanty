import React from "react";
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

const SettingsGame = () => {
    const { getAllSettings, loadingSettings } = useActionsWithRedux();
    console.log(getAllSettings);

    return (
        <SectionTaskGame>
            <StylBoxFeaturesGame data-aos="fade-right">
                <StylWrapperAllSettings>
                    {loadingSettings ? (
                        <>Loading</>
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
                                            defaultValue={item.name}
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
                                            defaultValue={item.name}
                                        />
                                    </StylWrapperInput>
                                )
                        )}
                    </StylBoxSettingsGame>
                </StylWrapperAllSettings>
            </StylBoxFeaturesGame>
            <SettingsGameFooter />
        </SectionTaskGame>
    );
};

export default SettingsGame;
