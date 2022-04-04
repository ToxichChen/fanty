import { Navigate } from "react-router-dom";
import useActionUsers from "../hooks/redux/useActionUsers";
import useActionAlert from "../hooks/redux/useActionAlert";

const LayoutProfileCheckVip = ({ children, text }) => {
  const { profile } = useActionUsers();
  const { NotifySuccess } = useActionAlert();

  if (Object.keys(profile).length === 0) {
    NotifySuccess(text);

    return <Navigate to={"/"} />;
  }

  return children;
};

export default LayoutProfileCheckVip;
