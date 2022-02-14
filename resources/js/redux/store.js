import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertMessage from "./alertFeatures/AlertReducer";
import authReducer from "./formFeatures/formFeaturesReducer";
import activeFanty from "./activeFantyFeatures/activeFantyFeaturesReducer";
import settings from "./settingsFeatures/SettingsReducer";
import blogsData from "./blogsFeatures/blogsReducer";
import musicData from "./musicFeatures/musicReducer";

const authPersistConfig = {
    key: "authForm",
    storage,
    whitelist: ["user"],
};

const settignsPersistConfig = {
    key: "settings",
    storage,
    whitelist: ["settings", "users", "durationGame"],
};

const fantyPersistConfig = {
    key: "activeFanty",
    storage,
    whitelist: [
        "fanty",
        "countCanceledTask",
        "levelFanty",
        "numberFanty",
        "like",
        "fantyPunishmentUser",
    ],
};

const store = configureStore({
    reducer: {
        authForm: persistReducer(authPersistConfig, authReducer),
        alertMessage,
        settings: persistReducer(settignsPersistConfig, settings),
        activeFanty: persistReducer(fantyPersistConfig, activeFanty),
        blogsData,
        musicData,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
