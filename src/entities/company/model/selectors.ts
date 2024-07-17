import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.companiesSlice;

export const selectDisplayCount = createSelector(
  selectSelf,
  (state) => state.displayCount
);

export const selectCompanies = createSelector(
  selectSelf,
  (state) => state.companies
);

export const selectCompaniesCount = createSelector(
  selectCompanies,
  (state) => state.length
);

export const selectCompaniesLimitedByDisplayCount = createSelector(
  [selectCompanies, selectDisplayCount],
  (companies, displayCount) => companies.slice(0, displayCount)
);
