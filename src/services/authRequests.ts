import axios from "axios";
import { AppDispatch } from "../store";
import { updateFailure, updateStart, updateSuccess } from "../store/authSlice";
import LoginFormInterface from "../types/LoginFormInterface";
import Api from "./Api";

export const loginRequest = async (
  formData: LoginFormInterface,
  dispatch: AppDispatch
) => {
  try {
    dispatch(updateStart());

    const res = await Api.post("/auth/login", formData);

    const { access_token, user } = res.data;
    localStorage.setItem("token", access_token);

    dispatch(updateSuccess(user));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(
        updateFailure(error.response?.data.message || "An unkown error occured")
      );
    }
  }
};

export const findMeRequest = async (dispatch: AppDispatch) => {
  try {
    dispatch(updateStart());

    const res = await Api.get("/auth/me");

    const user = res.data;

    dispatch(updateSuccess(user));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(
        updateFailure(
          error.response?.data.error.message || "An unkown error occured"
        )
      );
    }
  }
};
