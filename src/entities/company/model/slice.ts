import { createSlice } from "@reduxjs/toolkit";
import { ICompanySliceState } from "./types";

const initialState: ICompanySliceState = {
  companies: [],
};

export const companiesClice = createSlice({
  name: "companiesClice",
  initialState,
  reducers: {
    delete(
      state: ICompanySliceState,
      action: { payload: number; type: string }
    ) {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
    },
  },
});
