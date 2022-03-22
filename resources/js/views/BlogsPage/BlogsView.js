import Blogs from "./../../components/Blogs/Blogs.js";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const BlogsView = ({ title }) => {
    const { ChangeTitle } = useChangeTitlePage();
    ChangeTitle(title);

    return <Blogs />;
};

export default BlogsView;
