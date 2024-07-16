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

    setName(
      state: ICompanySliceState,
      action: { payload: { id: number; newName: string }; type: string }
    ) {
      const { id, newName } = action.payload;
      const company = state.companies.find((company) => company.id === id);
      if (company) company.name = newName;
    },

    setAddress(
      state: ICompanySliceState,
      action: { payload: { id: number; newAddress: string }; type: string }
    ) {
      const { id, newAddress } = action.payload;
      const company = state.companies.find((company) => company.id === id);
      if (company) company.address = newAddress;
    },
  },
});
