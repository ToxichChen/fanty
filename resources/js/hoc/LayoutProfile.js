import useActionsWithRedux from "../hooks/useActionsWithRedux";
import { useNavigate } from "react-router-dom";

const LayoutProfile = ({ children }) => {
    const navigate = useNavigate();
    const { profile } = useActionsWithRedux();

    if (Object.keys(profile).length !== 0) {
        navigate("/");
    }

    return children;
};

export default LayoutProfile;
