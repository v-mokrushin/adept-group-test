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
    push(
      state: ICompanySliceState,
      action: { payload: { name: string; address: string }; type: string }
    ) {
      state.companies.push({
        id: Math.random(),
        name: action.payload.name,
        address: action.payload.address,
      });
    },

    deleteByIds(
      state: ICompanySliceState,
      action: { payload: number[]; type: string }
    ) {
      const ids = action.payload;
      state.companies = state.companies.filter(
        (company) => !ids.includes(company.id)
      );
    },
  },
});
