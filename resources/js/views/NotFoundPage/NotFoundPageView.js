import NotFound from "../../components/NotFound/NotFound";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const NotFoundPageView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <NotFound />;
};

export default NotFoundPageView;
