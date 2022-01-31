import Blogs from "./../../components/Blogs/Blogs.js";
import useChangeTitlePage from "./../../hooks/useChangeTitlePage";

const BlogsView = ({ title }) => {
    const { ChangeTitlePage } = useChangeTitlePage();
    ChangeTitlePage(title);

    return (
        <>
            <Blogs />
        </>
    );
};

export default BlogsView;
