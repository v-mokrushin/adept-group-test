import { GetCompany } from "./lib";
import { config } from "shared/config";
import { ICompany } from "./model/types";

export const companiesMock: ICompany[] = [];

for (let i = 0; i < config.companiesMocksCount; i++) {
  const number = i + 1;
  companiesMock.push(
    GetCompany(i + 1, `company's ${number} name`, `company's ${number} address`)
  );
}
