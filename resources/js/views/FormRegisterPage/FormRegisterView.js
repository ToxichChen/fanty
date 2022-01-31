import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import FormRegistration from "../../components/FormRegistration/FormRegistration";

const FormRegisterView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <FormRegistration />
        </>
    );
};

export default FormRegisterView;
