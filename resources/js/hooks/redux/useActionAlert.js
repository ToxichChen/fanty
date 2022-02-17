import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { alert } from "../../redux/alertFeatures/AlertActions";
import useActionUsers from "./useActionUsers";

function useActionAlert() {
    const dispatch = useDispatch();
    const { getErrorUser } = useActionUsers();
    const alertMessage = useSelector((state) => state.alertMessage);

    const alertHidden = useCallback(() => {
        dispatch(
            alert({
                show: false,
                err: alertMessage.err,
                message: alertMessage.message,
            })
        );
    }, [dispatch, alertMessage]);

    const NotifySuccess = useCallback(
        (message) => {
            dispatch(
                alert({
                    show: true,
                    err: false,
                    message: message,
                })
            );
        },
        [dispatch]
    );

    const NotifyError = useCallback(
        (message) => {
            dispatch(
                alert({
                    show: true,
                    err: true,
                    message: message,
                })
            );
        },
        [dispatch]
    );

    useEffect(
        () => getErrorUser !== undefined && NotifyError(getErrorUser),
        [getErrorUser, NotifyError]
    );

    return { alertHidden, NotifySuccess, NotifyError, alertMessage };
}

export default useActionAlert;
