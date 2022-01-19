import React, { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AlertMessage, Loader, MiniPlayer } from './components/';
import { Router } from './Router';
import { Provider } from 'react-redux';
import theme from './theme';
import { store } from './redux/store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Router />
              </Switch>
            </Suspense>
          </div>
          <AlertMessage />
          <MiniPlayer />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
