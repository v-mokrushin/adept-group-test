import { GetCompany } from "./lib";
import { ICompany } from "./model/types";

export const companiesMock: ICompany[] = [
  // GetCompany(1, "T1", "Flex"),
  // GetCompany(2, "T2", "Flex"),
  // GetCompany(3, "FDF", "Flex"),
  // GetCompany(4, "3DFDF", "Flex"),
];

for (let i = 0; i < 30; i++)
  companiesMock.push(
    GetCompany(i + 1, `company name ${i + 1}`, `company address ${i + 1}`)
  );
