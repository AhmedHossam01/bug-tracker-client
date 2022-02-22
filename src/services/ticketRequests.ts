import axios from "axios";
import { AppDispatch } from "../store";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../store/ticketsSlice";
import Api from "./api";

export const fetchAllTickets = async (dispatch: AppDispatch) => {
  try {
    dispatch(updateStart());

    const res = await Api.get("/tickets?_expand=project");

    dispatch(updateSuccess(res.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      dispatch(
        updateFailure(error.response?.data.message || "An unkown error occured")
      );
    }
  }
};
