import React, { lazy, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import useActionsWithRedux from './hooks/useActionsWithRedux';

const routes = {
  home: '/',
  settingsGame: {
    main: '/settingsGame/:id',
    complexity: '/settingsGame/complexity/:id',
  },
  blogs: {
    main: '/blogs',
    article: '/blogs/article/:id',
  },
  formLogin: '/formLogin',
  formRegister: '/formRegister',
  taskGame: { main: '/taskGame/:id', info: '/taskGame/info/:id' },
  musicFromSex: '/musicForSex',
  profileUser: '/profileUser',
  notFound: '*',
};

const Home = lazy(() => import('./views/HomePage/HomeView'));
const FormLogin = lazy(() => import('./views/FormLoginPage/FormLoginView'));
const FormRegister = lazy(() =>
  import('./views/FormRegisterPage/FormRegisterView')
);
const TaskGame = lazy(() => import('./views/TaskGamePage/TaskGameView'));
const NotFound = lazy(() => import('./views/NotFoundPage/NotFoundPageView'));
const SettingsGame = lazy(() =>
  import('./views/SettingsGamePage/SettingsGameView')
);
const SettingsGameComplexity = lazy(() =>
  import('./views/SettingsGameComplexityPage/SettingsGameComplexityView')
);
const TaskInfo = lazy(() => import('./views/TaskInfoPage/TaskInfo'));
const MusicPage = lazy(() => import('./views/MusicPage/MusicPage'));
const BlogsPage = lazy(() => import('./views/BlogsPage/BlogsView'));
const ArticlePage = lazy(() => import('./views/BlogsPage/Article/ArticleView'));

const Router = () => {
  const history = useHistory();
  const {profile} = useActionsWithRedux

  useEffect(() => {if(profile !== null && routes.formLogin || profile !== null && routes.formRegister){
    history.push(routes.home)
  }}, [history]);
  return(
  <Switch>
    <Route exact path={routes.home}>
      <Home title='Home' />
    </Route>
    <Route exact path={routes.settingsGame.complexity}>
      <SettingsGameComplexity title='Settings Game Complexity' />
    </Route>
    <Route exact path={routes.settingsGame.main}>
      <SettingsGame title='Settings Game' />
    </Route>
    <Route exact path={routes.formLogin}>
      <FormLogin title='Form Login' />
    </Route>
    <Route exact path={routes.formRegister}>
      <FormRegister title='Form Register' />
    </Route>
    <Route exact path={routes.taskGame.main}>
      <TaskGame title='Task Game' />
    </Route>
    <Route exact path={routes.taskGame.info}>
      <TaskInfo title='Task Game Info' />
    </Route>
    <Route exact path={routes.musicFromSex}>
      <MusicPage title='Music' />
    </Route>
    <Route exact path={routes.blogs.main}>
      <BlogsPage title='Blogs' />
    </Route>
    <Route exact path={routes.blogs.article}>
      <ArticlePage title='Article' />
    </Route>
    <Route exact path={routes.notFound}>
      <NotFound title='Not Found' />
    </Route>
  </Switch>
)};

export { Router, routes };
