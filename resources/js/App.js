import { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loader from "./components/Loader/Loader";
import AlertMessage from "./components/AlertMessage/AlertMessage";
import MiniPlayer from "./components/MusicPlayer/MiniPlayer/MiniPlayer";
import { Router } from "./Router";
import { Provider } from "react-redux";
import theme from "./theme";
import { store } from "./redux/store";
import BtnToTop from "./components/BtnToTop/BtnToTop";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Suspense fallback={<Loader />}>
                            <Router />
                        </Suspense>
                    </div>
                    <AlertMessage />
                    <MiniPlayer />
                    <BtnToTop />
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
