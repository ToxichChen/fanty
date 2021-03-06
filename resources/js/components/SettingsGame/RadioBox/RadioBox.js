import { useEffect, useState } from "react";

import {
    StylBoxWrapperOptions,
    StylRadioSetting,
    StylWrapperRadioBtn,
    StylLabelRadio,
} from "./RadioBox.styled";
import { StylBoxAddInfoTask, StylBoxInfo } from "./../CheckBox/CheckBox.styled";
import useActionSettings from "../../../hooks/redux/useActionSettings";
import useActionUsers from "../../../hooks/redux/useActionUsers";

const RadioBox = ({ item, optionsBasic, subsettings, openModal, desc }) => {
    const { profile } = useActionUsers();
    const { settingsGameTask } = useActionSettings();
    const [isSelect, setSelect] = useState(optionsBasic[0].title);
    const [isHiddenInfo, setHiddenInfo] = useState(false);

    const handleSelectChange = (e, elem) => {
        const value = e.currentTarget.value;
        setSelect(value);

        if (profile.is_premium && item.is_radio) {
            settingsGameTask(elem, "radio", item.subsettings);
        }
    };

    useEffect(() => {
        openModal && setSelect("Своя настройка");

        /*   if (isSelect === "Включить всё") {
              settingsGameTask(item.subsettings);
          } else if (isSelect === "Выключить все") {
              settingsGameTask(item.subsettings, true);
          } */

        if (isSelect === "Выключить все") {
            settingsGameTask(item.subsettings, true);
        }
    }, [openModal, isSelect]);

    return (
        <form>
            <StylBoxWrapperOptions
                isVip={
                    subsettings
                        ? "red"
                        : item.is_premium === 1 && profile.is_premium === 0
                            ? false
                            : true
                }
            >
                {optionsBasic.map((elem) =>
                    item.is_radio && elem.title === "Включить всё" ? (
                        ""
                    ) : (
                        <StylWrapperRadioBtn key={elem.title}>
                            <StylRadioSetting
                                id={elem.title}
                                type="radio"
                                name="radio"
                                checked={isSelect === elem.title}
                                value={elem.title}
                                onChange={(e) => handleSelectChange(e, elem)}
                                isVip={subsettings}
                            />
                            <StylLabelRadio
                                htmlFor={elem.title}
                                isVip={subsettings}
                            />
                            {elem.title}
                            {desc && (
                                <StylBoxAddInfoTask
                                    type="button"
                                >
                                    <i className="fas fa-question"></i>
                                    <StylBoxInfo isHidden={isHiddenInfo}>
                                        {elem.description}
                                    </StylBoxInfo>
                                </StylBoxAddInfoTask>
                            )}
                        </StylWrapperRadioBtn>
                    )
                )}
            </StylBoxWrapperOptions>
        </form>
    );
};

export default RadioBox;
