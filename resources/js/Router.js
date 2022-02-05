import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const routes = {
    home: "/",
    settingsGame: {
        main: "/settingsGame",
        complexity: "/settingsGame/complexity",
    },
    blogs: {
        main: "/blogs",
        article: "/blogs/article/:id",
    },
    formLogin: "/formLogin",
    formRegister: "/formRegister",
    taskGame: { main: "/taskGame/task/:id", info: "/taskGame/info" },
    musicFromSex: "/musicForSex",
    profileUser: "/profileUser",
    notFound: "*",
};

const Home = lazy(() => import("./views/HomePage/HomeView"));
const FormLogin = lazy(() => import("./views/FormLoginPage/FormLoginView"));
const FormRegister = lazy(() =>
    import("./views/FormRegisterPage/FormRegisterView")
);
const TaskGame = lazy(() => import("./views/TaskGamePage/TaskGameView"));
const NotFound = lazy(() => import("./views/NotFoundPage/NotFoundPageView"));
const SettingsGame = lazy(() =>
    import("./views/SettingsGamePage/SettingsGameView")
);
const SettingsGameComplexity = lazy(() =>
    import("./views/SettingsGameComplexityPage/SettingsGameComplexityView")
);
const TaskInfo = lazy(() => import("./views/TaskInfoPage/TaskInfo"));
const MusicPage = lazy(() => import("./views/MusicPage/MusicPage"));
const BlogsPage = lazy(() => import("./views/BlogsPage/BlogsView"));
const ArticlePage = lazy(() => import("./views/BlogsPage/Article/ArticleView"));
const LayoutProfile = lazy(() => import("./hoc/LayoutProfile"));
const LayoutProfileSettings = lazy(() => import("./hoc/LayoutProfileSettings"));

const Router = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home title="Home page" />} />
            <Route
                path={routes.settingsGame.complexity}
                element={
                    <LayoutProfileSettings>
                        <SettingsGameComplexity title="Settings Game Complexity" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.settingsGame.main}
                element={
                    <LayoutProfileSettings>
                        <SettingsGame title="Settings Game" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.formLogin}
                element={
                    <LayoutProfile>
                        <FormLogin title="Form Login" />
                    </LayoutProfile>
                }
            />
            <Route
                path={routes.formRegister}
                element={
                    <LayoutProfile>
                        <FormRegister title="Form Register" />
                    </LayoutProfile>
                }
            />
            <Route
                path={routes.taskGame.main}
                element={<TaskGame title="Task Game" />}
            />
            <Route
                path={routes.taskGame.info}
                element={<TaskInfo title="Task Game Info" />}
            />
            <Route
                path={routes.musicFromSex}
                element={<MusicPage title="Music" />}
            />
            <Route
                path={routes.blogs.main}
                element={<BlogsPage title="Blogs" />}
            />
            <Route
                path={routes.blogs.article}
                element={<ArticlePage title="Article" />}
            />
            <Route
                path={routes.notFound}
                element={<NotFound title="Not Found" />}
            />
        </Routes>
    );
};

export { Router, routes };
