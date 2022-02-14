import { Article } from "../../../components/ArticleBlogs/Article";
import useChangeTitlePage from "./../../../hooks/useChangeTitlePage";

const ArticleView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);
    return <Article />;
};

export default ArticleView;
