import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import projectsSlice from "./projectsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
