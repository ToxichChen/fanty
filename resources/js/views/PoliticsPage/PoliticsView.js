import Politics from "../../components/Politics/Politics";
import useChangeTitlePage from "../../hooks/useChangeTitlePage";

const PoliticsView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <Politics />;
};

export default PoliticsView;
