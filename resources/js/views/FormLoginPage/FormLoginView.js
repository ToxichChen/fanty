import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import FormLogin from "../../components/FormLogin/FormLogin";

const FormLoginView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <FormLogin />
        </>
    );
};

export default FormLoginView;
