import axios from "axios";
import { AppDispatch } from "../store";
import { updateFailure, updateStart, updateSuccess } from "../store/authSlice";
import Api from "./Api";

const loginRequest = async (
  formData: {
    identifier: string;
    password: string;
  },
  dispatch: AppDispatch
) => {
  try {
    dispatch(updateStart());

    const res = await Api.post("/auth/local", formData);

    // TODO: save token to local storage
    const { token, user } = res.data;

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

export { loginRequest };
