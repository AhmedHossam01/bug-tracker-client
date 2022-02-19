import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProjectInterface from "../types/ProjectInterface";

interface ProjectState {
  isLoading: boolean;
  error: string;
  projects: ProjectInterface[] | null;
  viewProject: ProjectInterface | null;
}

const initialState: ProjectState = {
  isLoading: false,
  error: "",
  projects: null,
  viewProject: null,
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
    updateViewProject: (state, action: PayloadAction<ProjectInterface>) => {
      state.viewProject = action.payload;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure, updateViewProject } =
  projectsSlice.actions;

export default projectsSlice;
