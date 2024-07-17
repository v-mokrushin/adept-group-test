import { GetCompany } from "./lib";
import { ICompany } from "./model/types";

const GENERATION_COUNT = 1000;

export const companiesMock: ICompany[] = [];

for (let i = 0; i < GENERATION_COUNT; i++) {
  const number = i + 1;
  companiesMock.push(
    GetCompany(i + 1, `company's ${number} name`, `company's ${number} address`)
  );
}
