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
    create(
      state: ICompanySliceState,
      action: { payload: { name: string; address: string }; type: string }
    ) {
      const { name, address } = action.payload;
      state.companies.unshift({
        id: Math.random(),
        name: name,
        address: address,
      });
    },

    deleteById(
      state: ICompanySliceState,
      action: { payload: number; type: string }
    ) {
      const id = action.payload;
      state.companies = state.companies.filter((company) => company.id !== id);
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

export const companiesSliceActions = companiesSlice.actions;
