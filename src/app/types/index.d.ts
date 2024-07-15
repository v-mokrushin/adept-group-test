import { store } from "../store";

// declare type RootState = ReturnType<typeof store.getState>;
// declare type AppDispatch = typeof store.dispatch;

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
}
