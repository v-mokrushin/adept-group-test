import React from "react";
import styles from "./CompaniesWorks.module.scss";
import classNames from "classnames";
import { Button, Checkbox, TableTemplate } from "shared/ui";
import { useAppDispatch, useAppSelector } from "shared/store";
import {
  companiesSlice,
  selectCompanies,
  useCompaniesSelection,
} from "entities/company";
import {
  CompanyEditingMenu,
  useEditCompany,
} from "features/companyEditingMenu";

interface IProps {
  className?: string;
}

export const CompaniesWorks: React.FC<IProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectCompanies);
  const selection = useCompaniesSelection(data);
  const editing = useEditCompany();

  const deleteItems = () => {
    dispatch(companiesSlice.actions.deleteByIds(selection.ids));
    selection.reset();
  };

  // useEffect(() => {
  //   dispatch(companiesSlice.actions.setAddress({ id: 1, newAddress: "val" }));
  // }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <CompanyEditingMenu state={editing} />
      {selection.isSomeSelected && (
        <Button color="red" onClick={deleteItems}>
          Удалить
        </Button>
      )}
      <TableTemplate className={styles.table}>
        <thead>
          <tr>
            <th>
              <Checkbox
                value={selection.isAllSelected}
                onChange={selection.selectAll}
              />
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {data.map((company) => (
            <tr key={company.id}>
              <td>
                <Checkbox
                  value={selection.isSelected(company.id)}
                  onChange={() => selection.select(company)}
                />
              </td>
              <td
                onClick={(e) =>
                  editing.open(e, company.name, (name: string) =>
                    dispatch(
                      companiesSlice.actions.setName({
                        id: company.id,
                        newName: name,
                      })
                    )
                  )
                }
              >
                {company.name}
              </td>
              <td>{company.address}</td>
            </tr>
          ))}
        </tbody>
      </TableTemplate>
    </div>
  );
};
