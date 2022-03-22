import Support from "../../components/Support/Support";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const SupportView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <Support />;
};

export default SupportView;
