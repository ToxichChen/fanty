import { useState } from "react";
import LabelFromInput from "./LabelFromInput";
import BtnEyePassword from "./BtnEyePassword";
import {
    StylIconInputStart,
    StylWrapperFormInput,
    StylInputForm,
} from "./FormInput.styled";

const FormInput = ({
    type,
    name,
    placeholder,
    imgStart = null,
    password = false,
    err = false,
    errText = "",
    valueInput = "",
    changer,
    autocomplete,
}) => {
    let [isType, setType] = useState(type);

    const changeTypeInput = () => {
        isType === "text"
            ? setType((isType = "password"))
            : setType((isType = "text"));
    };

    return (
        <StylWrapperFormInput err={err}>
            <StylIconInputStart src={imgStart} />
            <StylInputForm
                type={isType}
                name={name}
                placeholder={placeholder}
                className={err && "is-error-input"}
                value={valueInput}
                onChange={changer}
                err={err}
                autocomplete={autocomplete}
            />

            {password && <BtnEyePassword changeEye={changeTypeInput} />}
            {err && <LabelFromInput text={errText} />}
        </StylWrapperFormInput>
    );
};

export default FormInput;
