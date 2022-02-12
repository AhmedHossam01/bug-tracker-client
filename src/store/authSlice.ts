import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserInterface from "../types/UserInterface";

interface AuthState {
  isLoading: boolean;
  error: string;
  user: UserInterface | null;
}

const initialState: AuthState = {
  isLoading: false,
  error: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    updateSuccess: (state, action: PayloadAction<UserInterface>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    updateFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = authSlice.actions;

export default authSlice.reducer;
