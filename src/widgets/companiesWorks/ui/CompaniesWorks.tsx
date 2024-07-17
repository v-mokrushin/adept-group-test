import React, { useCallback } from "react";
import styles from "./CompaniesWorks.module.scss";
import classNames from "classnames";
import { useInfiniteScroll } from "shared/hooks";
import { TextButton } from "shared/ui";
import { Checkbox, TableTemplate } from "shared/ui";
import { useAppDispatch, useAppSelector } from "shared/store";
import { CompanyDeletionAffirmator } from "features/companyDeletionAffirmator";
import { companiesSliceActions, useCompaniesSelection } from "entities/company";
import {
  ICompany,
  selectCompaniesCount,
  selectCompaniesLimitedByDisplayCount,
} from "entities/company";
import {
  CompanyUpdateMenu,
  useUpdateCompany,
} from "features/companyUpdateMenu";

interface IProps {
  className?: string;
}

export const CompaniesWorks: React.FC<IProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompaniesLimitedByDisplayCount);
  const companiesCount = useAppSelector(selectCompaniesCount);
  const selection = useCompaniesSelection(companies);
  const editing = useUpdateCompany();
  useInfiniteScroll(() =>
    dispatch(companiesSliceActions.increaseDisplayCount())
  );

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

  return (
    <div className={classNames(styles.root, className)}>
      <CompanyUpdateMenu state={editing} />
      {selection.isSomeSelected && (
        <CompanyDeletionAffirmator
          selectedCompaniesCount={selection.count}
          onReset={selection.reset}
          onAffirm={onDeleteCompanies}
          defaultPosition
        />
      )}
      <span>{`Компаний всего: ${companiesCount}`}</span>
      <TableTemplate className={styles.table}>
        <thead>
          <tr>
            <th></th>
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
          {companies.map((company, index) => (
            <tr key={company.id}>
              <td>{index + 1}</td>
              <td>
                <Checkbox
                  value={selection.isSelected(company.id)}
                  onChange={() => selection.select(company)}
                />
              </td>
              <td>
                <div className={styles.tdBox}>
                  <span>{company.name}</span>
                  <TextButton
                    onClick={(event: React.MouseEvent) =>
                      onUpdateName(event, company)
                    }
                  >
                    (ред.)
                  </TextButton>
                </div>
              </td>
              <td>
                <div className={styles.tdBox}>
                  <span>{company.address}</span>
                  <TextButton
                    onClick={(event: React.MouseEvent) =>
                      onUpdateAddress(event, company)
                    }
                  >
                    (ред.)
                  </TextButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </TableTemplate>
    </div>
  );
};