import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useActionUsers from "./hooks/redux/useActionUsers";

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
    taskGame: { main: "/taskGame/task", info: "/taskGame/info" },
    musicFromSex: "/musicForSex",
    profileUser: "/profileUser",
    politics: "/politics",
    payGame: "/payGame",
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
const PoliticsView = lazy(() => import("./views/PoliticsPage/PoliticsView"));
const PayGameView = lazy(() => import("./views/PayGamePage/PayGameView"));

const LayoutProfile = lazy(() => import("./hoc/LayoutProfile"));
const LayoutProfileSettings = lazy(() => import("./hoc/LayoutProfileSettings"));

const Router = () => {
    const { userHave } = useActionUsers();

    useEffect(() => {
        userHave();
    }, [userHave]);

    return (
        <Routes>
            <Route
                path={routes.home}
                element={<Home title="Домашняя страница" />}
            />
            <Route
                path={routes.settingsGame.complexity}
                element={
                    <LayoutProfileSettings>
                        <SettingsGameComplexity title="Количество заданий" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.settingsGame.main}
                element={
                    <LayoutProfileSettings>
                        <SettingsGame title="Настройки игры" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.formLogin}
                element={
                    <LayoutProfile>
                        <FormLogin title="Форма авторизации" />
                    </LayoutProfile>
                }
            />
            <Route
                path={routes.formRegister}
                element={
                    <LayoutProfile>
                        <FormRegister title="Форма регистрации" />
                    </LayoutProfile>
                }
            />
            <Route
                path={routes.taskGame.main}
                element={
                    <LayoutProfileSettings>
                        <TaskGame title="Задание игры" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.taskGame.info}
                element={<TaskInfo title="Информация об игре" />}
            />
            <Route
                path={routes.musicFromSex}
                element={<MusicPage title="Музыка" />}
            />
            <Route
                path={routes.blogs.main}
                element={<BlogsPage title="Статьи" />}
            />
            <Route
                path={routes.blogs.article}
                element={<ArticlePage title="Статья" />}
            />
            <Route
                path={routes.politics}
                element={<PoliticsView title="Политика" />}
            />
            <Route
                path={routes.payGame}
                element={
                    <LayoutProfileSettings>
                        <PayGameView title="Оплата за игру" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.notFound}
                element={<NotFound title="Страница не найдена" />}
            />
        </Routes>
    );
};

export { Router, routes };
