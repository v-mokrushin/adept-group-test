import React, { useCallback, useEffect } from "react";
import styles from "./CompaniesWorks.module.scss";
import classNames from "classnames";
import { ICompany, selectCompaniesInDisplayCount } from "entities/company";
import { Button, Checkbox, TableTemplate } from "shared/ui";
import { useAppDispatch, useAppSelector } from "shared/store";
import { companiesSliceActions, useCompaniesSelection } from "entities/company";
import {
  CompanyUpdateMenu,
  useUpdateCompany,
} from "features/companyUpdateMenu";

interface IProps {
  className?: string;
}

export const CompaniesWorks: React.FC<IProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectCompaniesInDisplayCount);
  const selection = useCompaniesSelection(data);
  const editing = useUpdateCompany();

  const onDeleteCompanies = useCallback(() => {
    dispatch(companiesSliceActions.deleteByIds(selection.ids));
    selection.reset();
  }, [selection.ids]);

  const onUpdateName = useCallback(
    (event: React.MouseEvent, company: ICompany) =>
      editing.open(event, company.name, (name: string) =>
        dispatch(
          companiesSliceActions.setName({
            id: company.id,
            newName: name,
          })
        )
      ),
    []
  );

  const onUpdateAddress = useCallback(
    (event: React.MouseEvent, company: ICompany) =>
      editing.open(event, company.address, (address: string) =>
        dispatch(
          companiesSliceActions.setAddress({
            id: company.id,
            newAddress: address,
          })
        )
      ),
    []
  );

  console.debug(data.length);

  // useEffect(() => {
  //   setInterval(
  //     () => dispatch(companiesSliceActions.increaseDisplayCount()),
  //     1000
  //   );
  // }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <CompanyUpdateMenu state={editing} />
      {selection.isSomeSelected && (
        <Button color="red" onClick={onDeleteCompanies}>
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
              <td onClick={(event) => onUpdateName(event, company)}>
                {company.name}
              </td>
              <td onClick={(event) => onUpdateAddress(event, company)}>
                {company.address}
              </td>
            </tr>
          ))}
        </tbody>
      </TableTemplate>
    </div>
  );
};
