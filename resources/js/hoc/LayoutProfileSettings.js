import useActionsWithRedux from "../hooks/useActionsWithRedux";
import { Navigate } from "react-router-dom";

const LayoutProfileSettings = ({ children }) => {
    const { profile, NotifyError } = useActionsWithRedux();

    if (Object.keys(profile).length === 0) {
        NotifyError("Пожалуйста, перед началом игры авторизируйтесь!");

        return <Navigate to={"/formLogin"} />;
    }

    return children;
};

export default LayoutProfileSettings;
