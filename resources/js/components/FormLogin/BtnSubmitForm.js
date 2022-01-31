import React from "react";
import { StylBtnSubmitForm, StylLineBorder } from "./FormLogin.styled";

const BtnSubmitForm = () => {
    return (
        <StylBtnSubmitForm type="submit">
            Отправить
            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
        </StylBtnSubmitForm>
    );
};

export default BtnSubmitForm;
