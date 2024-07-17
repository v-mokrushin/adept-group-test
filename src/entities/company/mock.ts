import { GetCompany } from "./lib";
import { ICompany } from "./model/types";

export const companiesMock: ICompany[] = [];

for (let i = 0; i < 200; i++)
  companiesMock.push(
    GetCompany(i + 1, `company name ${i + 1}`, `company address ${i + 1}`)
  );
