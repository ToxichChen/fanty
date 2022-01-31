import { useState } from "react";

import {
    StylBoxWrapperOptions,
    StylRadioSetting,
    StylWrapperRadioBtn,
    StylLabelRadio,
} from "./RadioBox.styled";
import { StylBoxAddInfoTask, StylBoxInfo } from "./../CheckBox/CheckBox.styled";
import useActionsWithRedux from "../../../hooks/useActionsWithRedux";

const RadioBox = ({ item, optionsBasic, subsettings }) => {
    const { settingsGameTask } = useActionsWithRedux();
    const [isSelect, setSelect] = useState(optionsBasic[0].title);
    const [isHiddenInfo, setHiddenInfo] = useState(false);

    const handleSelectChange = (e, elem) => {
        const value = e.currentTarget.value;
        setSelect(value);

        subsettings && settingsGameTask(elem);
    };

    return (
        <form>
            <StylBoxWrapperOptions
                isVip={
                    subsettings ? "red" : item.is_premium === 0 ? true : false
                }
            >
                {optionsBasic.map((elem) => (
                    <StylWrapperRadioBtn key={elem.title}>
                        <StylRadioSetting
                            id={elem.title}
                            type="radio"
                            name="radio"
                            checked={isSelect === elem.title}
                            value={elem.title}
                            onChange={handleSelectChange}
                            isVip={subsettings}
                        />
                        <StylLabelRadio
                            htmlFor={elem.title}
                            isVip={subsettings}
                        />
                        {elem.title}
                        {subsettings && (
                            <StylBoxAddInfoTask
                                type="button"
                                onClick={() => setHiddenInfo(!isHiddenInfo)}
                                onFocus={() => setHiddenInfo(true)}
                                onBlur={() => setHiddenInfo(false)}
                            >
                                <i className="fas fa-question"></i>
                                <StylBoxInfo isHidden={isHiddenInfo}>
                                    {elem.description}
                                </StylBoxInfo>
                            </StylBoxAddInfoTask>
                        )}
                    </StylWrapperRadioBtn>
                ))}
            </StylBoxWrapperOptions>
        </form>
    );
};

export default RadioBox;
