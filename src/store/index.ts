import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import layoutSlice from "./layoutSlice";
import projectsSlice from "./projectsSlice";
import ticketsSlice from "./ticketsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    projects: projectsSlice.reducer,
    tickets: ticketsSlice.reducer,
    layout: layoutSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
