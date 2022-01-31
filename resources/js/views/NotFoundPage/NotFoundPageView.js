import useChangeTitlePage from "./../../hooks/useChangeTitlePage";
import NotFound from "../../components/NotFound/NotFound";

const NotFoundPageView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return <NotFound />;
};

export default NotFoundPageView;
