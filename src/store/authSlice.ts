import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../services/API";

interface AuthState {
  user: null | UserData;
  isLoading: Boolean;
  error: null | string;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

interface UserData {
  jwt: string;
  user: {
    id: string;
  };
}

export const login = createAsyncThunk<
  UserData,
  { identifier: string; password: string },
  {
    rejectValue: string;
  }
>("auth/login", async (args, { rejectWithValue }) => {
  try {
    const { data } = await API.post("/auth/local", args);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error?.response?.data?.error?.message);
    } else {
      return rejectWithValue("An unknown error occurred.");
    }
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "An unknown error occurred.";
    });

    builder.addCase(
      login.fulfilled,
      (state: AuthState, action: PayloadAction<UserData>) => {
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload;
      }
    );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
