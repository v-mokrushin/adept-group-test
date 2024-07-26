import { useState } from "react";
import { ICompany } from "entities/company";

const INITIAL_COUNT = 30;
const COUNT_INCREASE_STEP = 30;

export const useFilterCompanies = (companies: ICompany[]) => {
  const [count, setCount] = useState<number>(
    Math.min(INITIAL_COUNT, companies.length)
  );

  const verifiedCount = Math.min(count, companies.length);

  const filteredCompanies = companies.slice(0, verifiedCount);

  const increaseCount = () => {
    const companiesCount = companies.length;
    const newCount = count + COUNT_INCREASE_STEP;
    newCount <= companiesCount ? setCount(newCount) : setCount(companiesCount);
  };

  return {
    array: filteredCompanies,
    count: verifiedCount,
    increaseCount,
  };
};
