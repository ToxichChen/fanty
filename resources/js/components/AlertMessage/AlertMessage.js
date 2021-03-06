import { useEffect } from "react";
import {
    StylBoxAlert,
    StylSubTitleAlert,
    StylTextAlert,
    StylBtnClose,
} from "./AlertMessage.styled";
import useActionAlert from "../../hooks/redux/useActionAlert";

const AlertMessage = () => {
    const { alertMessage, alertHidden } = useActionAlert();

    useEffect(() => {
        alertMessage.show && setTimeout(() => alertHidden(), 5000);
    }, [alertMessage, alertHidden]);

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
                    ? "Сообщение об ошибке"
                    : "Сообщение об успехе"}
            </StylSubTitleAlert>
            <StylTextAlert>{alertMessage.message}</StylTextAlert>
        </StylBoxAlert>
    );
};

export default AlertMessage;
