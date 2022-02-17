import { Navigate } from "react-router-dom";
import useActionUsers from "../hooks/redux/useActionUsers";
import useActionAlert from "../hooks/redux/useActionAlert";

const LayoutProfileSettings = ({ children }) => {
    const { profile } = useActionUsers();
    const { NotifyError } = useActionAlert();

    if (Object.keys(profile).length === 0) {
        NotifyError("Пожалуйста, перед началом игры авторизируйтесь!");

        return <Navigate to={"/formLogin"} />;
    }

    return children;
};

export default LayoutProfileSettings;
