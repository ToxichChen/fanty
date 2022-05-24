import { Navigate } from "react-router-dom";
import useActionUsers from "../hooks/redux/useActionUsers";
import useActionAlert from "../hooks/redux/useActionAlert";

const LayoutPay = ({ children, text }) => {
  const { profile } = useActionUsers();
  const { NotifyError } = useActionAlert();

  if (Object.keys(profile).length === 0 || profile.isPremium) {
    NotifyError(text);

    return <Navigate to={"/"} />;
  }

  return children;
};

export default LayoutPay;
