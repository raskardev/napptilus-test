import { coreSlice } from "@/features/core/coreSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import expireReducer from "redux-persist-expire";
import storage from "redux-persist/lib/storage";
import { employeesApiSlice } from "../employees/employeesSlice";

const ONE_DAY_IN_SECODS = 24 * 60 * 60;

const rootReducer = combineReducers({
  [coreSlice.reducerPath]: coreSlice.reducer,
  [employeesApiSlice.reducerPath]: employeesApiSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    version: 1,
    storage,
    whitelist: [coreSlice.reducerPath, employeesApiSlice.reducerPath],
    transforms: [
      expireReducer(coreSlice.reducerPath, {
        persistedAtKey: "__corePersistedAt",
        expireSeconds: ONE_DAY_IN_SECODS,
        expiredState: {},
      }),
      expireReducer(employeesApiSlice.reducerPath, {
        persistedAtKey: "__employeesPersistedAt",
        expireSeconds: ONE_DAY_IN_SECODS,
        expiredState: {},
      }),
    ],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }).concat(employeesApiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
