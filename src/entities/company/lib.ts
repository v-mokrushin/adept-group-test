import { ICompany } from "./model/types";

export function GetCompany(
  id: number,
  name: string,
  address: string
): ICompany {
  return { id, name, address };
}
