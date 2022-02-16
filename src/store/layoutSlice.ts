import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  isSidebarOpen: boolean;
}

const initialState: LayoutState = {
  isSidebarOpen: true,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
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

export const { toggleSidebar, closeFromLink } = layoutSlice.actions;

export default layoutSlice;
