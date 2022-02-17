import { Navigate } from "react-router-dom";
import useActionUsers from "./../hooks/redux/useActionUsers";

const LayoutProfile = ({ children }) => {
    const { profile } = useActionUsers();

    if (Object.keys(profile).length !== 0) {
        return <Navigate to={"/"} />;
    }

    return children;
};

export default LayoutProfile;
