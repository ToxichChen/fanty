import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useActionMusic from "./hooks/redux/useActionMusic";
import useActionUsers from "./hooks/redux/useActionUsers";

const routes = {
    home: "/",
    blogs: {
        main: "/blogs",
        article: "/blogs/article/:id",
    },
    formLogin: "/formLogin",
    formRegister: "/formRegister",
    musicFromSex: "/musicForSex",
    profileUser: "/profileUser",
    politics: "/politics",
    payGame: "/payGame",
    seksFanty: {
        main: "/seks-fanty",
        info: "/seks-fanty/info",
        settings: "/seks-fanty/settings",
        duration: "/seks-fanty/duration",
    },
    blackAndWhite: "/chernoe-i-beloe",
    rolePlaying: "/rolevye-igru",
    support: "/support",
    offer: "/offer",
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
const SupportView = lazy(() => import("./views/SupportPage/SupportView.js"));
const OfferView = lazy(() => import("./views/OfferPage/OfferView.js"));

const LayoutProfile = lazy(() => import("./hoc/LayoutProfile"));
const LayoutProfileSettings = lazy(() => import("./hoc/LayoutProfileSettings"));
const LayoutCheckFanty = lazy(() => import("./hoc/LayoutCheckFanty"));

const Router = () => {
    const { userHave } = useActionUsers();
    const { getAllMusic } = useActionMusic()

    useEffect(() => {
        userHave();
        getAllMusic();
    }, [userHave, getAllMusic]);

    return (
        <Routes>
            <Route
                path={routes.home}
                element={<Home title="Секс игры для пар, онлайн" />}
            />
            <Route
                path={routes.seksFanty.duration}
                element={
                    <LayoutProfileSettings>
                        <SettingsGameComplexity title="Количество заданий" />
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.seksFanty.settings}
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
                path={routes.seksFanty.main}
                element={
                    <LayoutProfileSettings>
                        <LayoutCheckFanty>
                            <TaskGame title="Задание игры" />
                        </LayoutCheckFanty>
                    </LayoutProfileSettings>
                }
            />
            <Route
                path={routes.seksFanty.info}
                element={<TaskInfo title="Информация об игре" />}
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
                path={routes.support}
                element={<SupportView title="Поддержка" />}
            />
            <Route
                path={routes.musicFromSex}
                element={
                    <MusicPage title="Музыка" />
                }
            />
            <Route path={routes.offer} element={<OfferView title="Оферта" />} />
            <Route
                path={routes.blackAndWhite}
                element={
                    <NotFound
                        title="Страница не найдена"
                        text={"Игра в стадии разработки"}
                    />
                }
            />
            <Route
                path={routes.rolePlaying}
                element={
                    <NotFound
                        title="Страница не найдена"
                        text={"Игра в стадии разработки"}
                    />
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
