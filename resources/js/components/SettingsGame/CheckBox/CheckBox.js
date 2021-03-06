import React, { useEffect, useState, useLayoutEffect } from "react";
import {
    CheckboxContainer,
    Icon,
    HiddenCheckbox,
    StyledCheckbox,
    StylLabel,
    StylTextLabel,
} from "./CheckBox.styled";

import { StylBoxAddInfoTask, StylBoxInfo } from "./CheckBox.styled";
import useActionSettings from "../../../hooks/redux/useActionSettings";

const Checkbox = ({ elem, premium }) => {
    const { settingsGameTask, settingsGame } = useActionSettings();

    const [isCheck, setCheck] = useState(false);

    const handleCheckboxChange = (event) => {
        setCheck(event.target.checked);
        settingsGameTask(elem);
    };

    useEffect(
        () => {
            settingsGame.includes(elem.id) ? setCheck(true) : setCheck(false);
        },
        [settingsGame, elem.id]
    );

    useLayoutEffect(() => {
        if (elem.id == 11) {
            setTimeout(() =>
                settingsGameTask({ id: 11 }), 500)
        }
    }, [])

    return (
        <StylLabel>
            <CheckboxContainer>
                <HiddenCheckbox
                    checked={isCheck}
                    onChange={handleCheckboxChange}
                />
                <StyledCheckbox checked={premium ? "a" : isCheck}>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </CheckboxContainer>
            <StylTextLabel>{elem.title}</StylTextLabel>
            <StylBoxAddInfoTask
                type="button"
            >
                <i className="fas fa-question"></i>
                <StylBoxInfo>
                    {elem.description}
                </StylBoxInfo>
            </StylBoxAddInfoTask>
        </StylLabel>
    );
};

export default Checkbox;
