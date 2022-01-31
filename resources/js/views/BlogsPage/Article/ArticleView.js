import { Article } from "../../../components/ArticleBlogs/Article";
import useChangeTitlePage from "./../../../hooks/useChangeTitlePage";

const ArticleView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);
    return <Article />;
};

export default ArticleView;
