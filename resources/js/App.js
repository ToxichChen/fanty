import React, { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Loader } from './components/';
import { Router } from './Router';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className='App'>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Router />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
