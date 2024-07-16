import { GetCompany } from "./lib";
import { ICompany } from "./model/types";

export const companiesMock: ICompany[] = [
  GetCompany(1, "T1", "Flex"),
  GetCompany(2, "T2", "Flex"),
  GetCompany(3, "FDF", "Flex"),
  GetCompany(4, "3DFDF", "Flex"),
];
