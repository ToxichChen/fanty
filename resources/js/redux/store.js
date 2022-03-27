import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import alertMessage from "./alertFeatures/AlertReducer";
import authReducer from "./formFeatures/formFeaturesReducer";
import activeFanty from "./activeFantyFeatures/activeFantyFeaturesReducer";
import settings from "./settingsFeatures/SettingsReducer";
import blogs from './blogsFeatures/blogsReducer'
import musicData from "./musicFeatures/musicReducer";
import {
    authPersistConfig,
    settignsPersistConfig,
    fantyPersistConfig,
    musicPersistConfig
} from './store.persists'


const store = configureStore({
    reducer: {
        authForm: persistReducer(authPersistConfig, authReducer),
        alertMessage,
        settings: persistReducer(settignsPersistConfig, settings),
        activeFanty: persistReducer(fantyPersistConfig, activeFanty),
        musicData: persistReducer(musicPersistConfig, musicData),
        blogs
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
