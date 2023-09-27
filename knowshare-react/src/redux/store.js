import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage method (e.g., local storage)

import authReducer from "./auth";

// Redux Persist configuration
const persistConfig = {
  key: "root", // Change this to a unique key for your app
  storage,
  whitelist: ["userEmail", "userData"], // List the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
