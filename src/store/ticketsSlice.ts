import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketInterface from "../types/TicketInterface";

interface TicketsState {
  isLoading: boolean;
  error: string;
  tickets: TicketInterface[] | null;
}

const initialState: TicketsState = {
  isLoading: false,
  error: "",
  tickets: null,
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    updateSuccess: (state, action: PayloadAction<TicketInterface[]>) => {
      state.isLoading = false;
      state.tickets = action.payload;
    },
    updateFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } =
  ticketsSlice.actions;

export default ticketsSlice;
