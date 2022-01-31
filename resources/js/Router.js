import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const routes = {
    home: "/",
    settingsGame: {
        main: "/settingsGame/:id",
        complexity: "/settingsGame/complexity",
    },
    blogs: {
        main: "/blogs",
        article: "/blogs/article/:id",
    },
    formLogin: "/formLogin",
    formRegister: "/formRegister",
    taskGame: { main: "/taskGame/:id", info: "/taskGame/info/:id" },
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

const Router = () => {
    return (
        <Routes>
            <Route exact path={routes.home} element={<Home title="Home" />} />
            <Route
                exact
                path={routes.settingsGame.complexity}
                element={
                    <SettingsGameComplexity title="Settings Game Complexity" />
                }
            />
            <Route
                exact
                path={routes.settingsGame.main}
                element={<SettingsGame title="Settings Game" />}
            />
            <Route
                exact
                path={routes.formLogin}
                element={<FormLogin title="Form Login" />}
            />
            <Route
                exact
                path={routes.formRegister}
                element={<FormRegister title="Form Register" />}
            />
            <Route
                exact
                path={routes.taskGame.main}
                element={<TaskGame title="Task Game" />}
            />
            <Route
                exact
                path={routes.taskGame.info}
                element={<TaskInfo title="Task Game Info" />}
            />
            <Route
                exact
                path={routes.musicFromSex}
                element={<MusicPage title="Music" />}
            />
            <Route
                exact
                path={routes.blogs.main}
                element={<BlogsPage title="Blogs" />}
            />
            <Route
                exact
                path={routes.blogs.article}
                element={<ArticlePage title="Article" />}
            />
            <Route
                exact
                path={routes.notFound}
                element={<NotFound title="Not Found" />}
            />
        </Routes>
    );
};

export { Router, routes };
