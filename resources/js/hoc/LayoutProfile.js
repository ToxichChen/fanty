import { Navigate } from "react-router-dom";
import useActionUsers from "./../hooks/redux/useActionUsers";

const LayoutProfile = ({ children, profilePage }) => {
    const { profile } = useActionUsers();

    if (profilePage ? (profilePage && Object.keys(profile).length === 0) : Object.keys(profile).length !== 0) {
        return <Navigate to={"/"} />;
    }

    return children;
};

export default LayoutProfile;
