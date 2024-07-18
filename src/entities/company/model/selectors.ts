import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.companiesSlice;

export const selectCompanies = createSelector(
  selectSelf,
  (state) => state.companies
);

export const selectCompaniesCount = createSelector(
  selectCompanies,
  (state) => state.length
);
