import { Navigate } from "react-router-dom";
import useActionUsers from "../hooks/redux/useActionUsers";
import useActionAlert from "../hooks/redux/useActionAlert";
import useActionFanty from "../hooks/redux/useActionFanty";

const LayoutCheckFanty = ({ children }) => {
    const { profile } = useActionUsers();
    const { getFanty } = useActionFanty();
    const { NotifyError } = useActionAlert();

    if (Object.keys(profile).length === 0) {
        NotifyError("Пожалуйста, перед началом игры авторизируйтесь!");

        return <Navigate to={"/formLogin"} />;
    } else if (Object.keys(getFanty).length <= 1) {
        NotifyError("Пожалуйста, перед началом игры выберите настройки!");

        return <Navigate to={"/seks-fanty/settings"} />;
    }

    return children;
};

export default LayoutCheckFanty;
