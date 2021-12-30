import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const routes = {
  home: '/',
  settingsGame: {
    main: '/settingsGame',
    complexity: '/settingsGame/complexity',
  },
  formLogin: '/formLogin',
  formRegister: '/formRegister',
  taskGame: { main: '/taskGame', info: '/taskGame/info' },
  musicFromSex: '/musicForSex',
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

const Router = () => (
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
    <Route exact path={routes.notFound}>
      <NotFound title='Not Found' />
    </Route>
  </Switch>
);

export { Router, routes };
