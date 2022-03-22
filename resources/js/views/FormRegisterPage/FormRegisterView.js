import FormRegistration from "../../components/FormRegistration/FormRegistration";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const FormRegisterView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <FormRegistration />;
};

export default FormRegisterView;
