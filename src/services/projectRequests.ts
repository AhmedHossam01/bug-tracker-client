import axios from "axios";
import { AppDispatch } from "../store";
import {
  createNewProject,
  updateFailure,
  updateStart,
  updateSuccess,
  updateViewProject,
} from "../store/projectsSlice";
import ProjectInterface from "../types/ProjectInterface";
import Api from "./api";

export const fetchAllProjects = async (dispatch: AppDispatch) => {
  try {
    dispatch(updateStart());

    const res = await Api.get("/projects?_embed=tickets");

    dispatch(updateSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(
        updateFailure(error.response?.data.message || "An unkown error occured")
      );
    }
  }
};

export const createProject = async (
  dispatch: AppDispatch,
  project: ProjectInterface
) => {
  dispatch(createNewProject(project));
};
