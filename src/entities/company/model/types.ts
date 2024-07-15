export interface ICompany {
  id: number;
  name: string;
  address: string;
}

export interface ICompanySliceState {
  companies: ICompany[];
}
