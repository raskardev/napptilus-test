import { configureStore } from "@reduxjs/toolkit";
import { oompaLoompaApi } from "../features/oompa-loompas/api";

export const store = configureStore({
  reducer: {
    [oompaLoompaApi.reducerPath]: oompaLoompaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(oompaLoompaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
