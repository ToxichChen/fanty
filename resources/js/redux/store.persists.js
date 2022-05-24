import storage from "redux-persist/lib/storage";

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
    "isPunishment",
    "fantyPunishmentUser",
    "sexFant"
  ],
};

const musicPersistConfig = {
  key: 'musicData',
  storage,
  whitelist: [
    'musicList',
    'miniPlayer'
  ]
}

export {
  authPersistConfig,
  settignsPersistConfig,
  fantyPersistConfig,
  musicPersistConfig
}