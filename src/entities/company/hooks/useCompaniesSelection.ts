import { ICompany } from "../model/types";
import { useCallback, useMemo, useState } from "react";

/** Кастомный хук состояния выбора компонентов для массовых операций */
export const useCompaniesSelection = (collection: ICompany[]) => {
  const [items, setItems] = useState<ICompany[]>([]);
  const count = useMemo(() => items.length, [items]);
  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const reset = useCallback(() => setItems([]), []);

  const isSomeSelected = useMemo(() => items.length > 0, [items]);

  const isSelected = useCallback(
    (id: number): boolean => Boolean(items.find((x) => x.id === id)),
    [items]
  );

  const select = useCallback(
    (item: ICompany) => {
      if (!isSelected(item.id)) {
        setItems([...items, item]);
      } else {
        setItems([...items.filter((x) => x.id !== item.id)]);
      }
    },
    [items, isSelected]
  );

  const isAllSelected = useMemo(
    () =>
      collection.length > 0 &&
      collection.every((company) => items.find((item) => item.id === company.id)),
    [collection, items]
  );

  const selectAll = useCallback((): void => {
    if (isAllSelected) reset();
    else setItems([...collection]);
  }, [isAllSelected, collection]);

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

export type IUseMassSelection = ReturnType<typeof useCompaniesSelection>;
