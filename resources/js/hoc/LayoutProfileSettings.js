import { Navigate } from "react-router-dom";
import useActionUsers from "../hooks/redux/useActionUsers";
import useActionAlert from "../hooks/redux/useActionAlert";

const LayoutProfileSettings = ({ children, text }) => {
    const { profile } = useActionUsers();
    const { NotifyError } = useActionAlert();

    if (Object.keys(profile).length === 0) {
        NotifyError(text);

        return <Navigate to={"/formLogin"} />;
    }

    return children;
};

export default LayoutProfileSettings;
