import { useState } from "react";
import LabelFromInput from "./LabelFromInput";
import BtnEyePassword from "./BtnEyePassword";
import {
    StylIconInputStart,
    StylWrapperFormInput,
    StylInputForm,
} from "./FormInput.styled";

const FormInput = ({
    id,
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
    key
}) => {
    let [isType, setType] = useState(type);

    const changeTypeInput = () => {
        isType === "text"
            ? setType((isType = "password"))
            : setType((isType = "text"));
    };

    return (
        <StylWrapperFormInput err={err} key={key} >
            <StylIconInputStart src={imgStart} />
            <StylInputForm
            id={id}
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
