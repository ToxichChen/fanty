import React from "react";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import { StylBtnSubmitForm, StylLineBorder } from "./FormLogin.styled";

const BtnSubmitForm = () => {
    const { loadingProfile } = useActionsWithRedux();
    return (
        <StylBtnSubmitForm type="submit">
            {loadingProfile ? "Загрузка" : "Отправить"}

            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
            <StylLineBorder />
        </StylBtnSubmitForm>
    );
};

export default BtnSubmitForm;
