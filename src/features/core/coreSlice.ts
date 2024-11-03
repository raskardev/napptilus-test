import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CoreState {
  page: number;
}

const initialState: CoreState = {
  page: 1,
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = coreSlice.actions;

export default coreSlice.reducer;
