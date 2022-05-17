import React from "react";
import useActionUsers from "../../hooks/redux/useActionUsers";
import { StylBtnSubmitForm, StylLineBorder } from "./FormLogin.styled";

const BtnSubmitForm = () => {
    const { loadingProfile } = useActionUsers();
    return (
        <StylBtnSubmitForm type="submit">
            {loadingProfile ? "Загрузка" : "Вход"}

            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
        </StylBtnSubmitForm>
    );
};

export default BtnSubmitForm;
