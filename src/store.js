import { combineReducers, configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";
import theme from "./reducers/theme";

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["theme",],
}
const rootReducer =combineReducers({app, theme})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
 
});


export const persistor = persistStore(store)