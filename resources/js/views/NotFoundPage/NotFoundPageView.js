import NotFound from "../../components/NotFound/NotFound";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const NotFoundPageView = ({ title, text }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <NotFound text={text} />;
};

export default NotFoundPageView;
