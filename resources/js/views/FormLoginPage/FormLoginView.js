import FormLogin from "../../components/FormLogin/FormLogin";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const FormLoginView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return (
        <>
            <FormLogin />
        </>
    );
};

export default FormLoginView;
