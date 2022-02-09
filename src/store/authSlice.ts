import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | {
    id: string;
  };
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.user = { id: "1" };
    },

    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
