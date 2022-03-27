import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, getCurrentBlog } from "../../redux/blogsFeatures/blogsOperation";

function useActionBlogs() {
  const dispatch = useDispatch();
  const isLoadingBlogs = useSelector((state) => state.blogs.isLoadingBlogs);
  const isLoadingBlog = useSelector((state) => state.blogs.isLoadingBlog);

  const getBlogs = useCallback((setState) => {
    dispatch(getAllBlogs(setState));
  }, [dispatch]);

  const getBlog = useCallback((id, setState) => {
    dispatch(getCurrentBlog(id, setState));
  }, [dispatch]);


  return { getBlogs, getBlog, isLoadingBlogs, isLoadingBlog };
}

export default useActionBlogs;
