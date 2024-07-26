import { useState } from "react";
import { ICompany } from "../model/types";

export const useCompaniesSelection = (collection: ICompany[]) => {
  const [items, setItems] = useState<ICompany[]>([]);
  const count = items.length;
  const ids = items.map((item) => item.id);
  const reset = () => setItems([]);

  const isSomeSelected = items.length > 0;

  const isSelected = (id: number): boolean =>
    Boolean(items.find((x) => x.id === id));

  const select = (item: ICompany) => {
    if (!isSelected(item.id)) {
      setItems([...items, item]);
    } else {
      setItems([...items.filter((x) => x.id !== item.id)]);
    }
  };

  const isAllSelected =
    collection.length > 0 &&
    collection.every((company) => items.find((item) => item.id === company.id));

  const selectAll = () => {
    if (isAllSelected) reset();
    else setItems([...collection]);
  };

  return {
    items,
    count,
    ids,
    isSomeSelected,
    isSelected,
    isAllSelected,
    select,
    selectAll,
    reset,
  };
};
