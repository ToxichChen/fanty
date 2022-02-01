import useActionsWithRedux from "../hooks/useActionsWithRedux";
import { Navigate } from "react-router-dom";

const LayoutProfile = ({ children }) => {
    const { profile } = useActionsWithRedux();

    if (Object.keys(profile).length !== 0) {
        return <Navigate to={"/"} />;
    }

    return children;
};

export default LayoutProfile;
