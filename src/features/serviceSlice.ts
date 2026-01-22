import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Service } from "../lib/types/types";
import { ServiceSortByOrder } from "@/lib/utils";

interface ServiceState {
  services: Service[];
}

const initialState: ServiceState = {
  services: [],
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
      state.services = ServiceSortByOrder(state.services);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setServices } = serviceSlice.actions;

export default serviceSlice.reducer;
