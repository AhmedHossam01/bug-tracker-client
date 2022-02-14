import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProjectInterface from "../types/ProjectInterface";

interface ProjectState {
  isLoading: boolean;
  error: string;
  projects: ProjectInterface[] | null;
}

const initialState: ProjectState = {
  isLoading: false,
  error: "",
  projects: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    updateSuccess: (state, action: PayloadAction<ProjectInterface[]>) => {
      state.isLoading = false;
      state.projects = action.payload;
    },
    updateFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } =
  projectsSlice.actions;

export default projectsSlice;
