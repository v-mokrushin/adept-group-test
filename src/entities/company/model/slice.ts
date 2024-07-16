import { createSlice } from "@reduxjs/toolkit";
import { ICompanySliceState } from "./types";
import { companiesMock } from "../mock";

const initialState: ICompanySliceState = {
  companies: companiesMock,
};

export const companiesSlice = createSlice({
  name: "companiesSlice",
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
