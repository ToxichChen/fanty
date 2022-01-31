import { useEffect } from "react";
import {
    StylBoxAlert,
    StylSubTitleAlert,
    StylTextAlert,
    StylBtnClose,
} from "./AlertMessage.styled";
import useActionsWithRedux from "./../../hooks/useActionsWithRedux";

const AlertMessage = () => {
    const { alertMessage, alertHidden } = useActionsWithRedux();

    useEffect(() => {
        alertMessage.show && setTimeout(() => alertHidden(), 3000);
    }, [alertMessage.show, alertHidden]);

    return (
        <StylBoxAlert
            err={alertMessage.err}
            showMessage={alertMessage.show}
            className={
                alertMessage.show
                    ? "animate__animated  animate__backInLeft"
                    : "animate__animated  animate__backOutLeft"
            }
        >
            <StylBtnClose type="button" onClick={alertHidden} />
            <StylSubTitleAlert>
                {alertMessage.err
                    ? "Сообщение об ошибке находится здесь"
                    : "Сообщение об успехе идет сюда"}
            </StylSubTitleAlert>
            <StylTextAlert>{alertMessage.message}</StylTextAlert>
        </StylBoxAlert>
    );
};

export default AlertMessage;
