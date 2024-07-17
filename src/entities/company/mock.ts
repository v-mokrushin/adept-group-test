import { GetCompany } from "./lib";
import { ICompany } from "./model/types";

const GEN_COUNT = 1000;

export const companiesMock: ICompany[] = [];

for (let i = 0; i < GEN_COUNT; i++)
  companiesMock.push(
    GetCompany(i + 1, `company name ${i + 1}`, `company address ${i + 1}`)
  );
