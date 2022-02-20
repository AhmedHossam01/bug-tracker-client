import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  isSidebarOpen: boolean;
  isDark: boolean;
  isDarkToggled: boolean;
}

const initialState: LayoutState = {
  isSidebarOpen: true,
  isDark: localStorage.getItem("mode") === "light" ? false : true,
  isDarkToggled: localStorage.getItem("isDarkToggled") === "true" || false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleIsDark: (state) => {
      state.isDark = !state.isDark;
      state.isDarkToggled = true;
      localStorage.setItem("mode", state.isDark ? "dark" : "light");
      localStorage.setItem("isDarkToggled", "true");
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeFromLink: (state) => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        state.isSidebarOpen = !state.isSidebarOpen;
      }
    },
  },
});

export const { toggleSidebar, closeFromLink, toggleIsDark } =
  layoutSlice.actions;

export default layoutSlice;
