import axios from "axios";
import { AppDispatch } from "../store";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../store/projectsSlice";
import Api from "./Api";

export const fetchAllProjects = async (dispatch: AppDispatch) => {
  try {
    dispatch(updateStart());

    const res = await Api.get("/projects");

    dispatch(updateSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(
        updateFailure(error.response?.data.message || "An unkown error occured")
      );
    }
  }
};

export const fetchSingleProject = async (id: string) => {
  const res = await Api.get(`/projects/${id}?_embed=tickets`);

  return res.data;
};
