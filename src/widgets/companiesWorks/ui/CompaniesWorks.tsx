import React from "react";
import styles from "./CompaniesWorks.module.scss";
import classNames from "classnames";
import { TextButton } from "shared/ui";
import { useInfiniteScroll } from "shared/hooks";
import { Checkbox, TableTemplate } from "shared/ui";
import { useAppDispatch, useAppSelector } from "shared/store";
import { useFilterCompanies } from "../hooks/useFilterCompanies";
import { ICompany, selectCompaniesCount } from "entities/company";
import { tableTemplateExtraStyles } from "shared/ui/tableTemplate";
import { CompanyDeletionAffirmator } from "features/companyDeletionAffirmator";
import {
  companiesSliceActions,
  selectCompanies,
  useCompaniesSelection,
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
  const companies = useAppSelector(selectCompanies);
  const companiesCount = useAppSelector(selectCompaniesCount);
  const filteredCompanies = useFilterCompanies(companies);
  const selection = useCompaniesSelection(companies);
  const editing = useUpdateCompany();

  useInfiniteScroll(filteredCompanies.increaseCount);

  const onDeleteCompany = (id: number) => {
    dispatch(companiesSliceActions.deleteById(id));
    selection.reset();
  };

  const onDeleteCompanies = () => {
    dispatch(companiesSliceActions.deleteByIds(selection.ids));
    selection.reset();
  };

  const onUpdateName = (event: React.MouseEvent, company: ICompany) =>
    editing.open(event, company.name, (name: string) =>
      dispatch(
        companiesSliceActions.setName({
          id: company.id,
          newName: name,
        })
      )
    );

  const onUpdateAddress = (event: React.MouseEvent, company: ICompany) =>
    editing.open(event, company.address, (address: string) =>
      dispatch(
        companiesSliceActions.setAddress({
          id: company.id,
          newAddress: address,
        })
      )
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

      {filteredCompanies.count ? (
        <>
          <p
            className={styles.countInfoLabel}
          >{`Компаний всего: ${companiesCount}, отображено: ${filteredCompanies.count}`}</p>
          <TableTemplate className={styles.table}>
            <thead>
              <tr>
                <th>№</th>
                <th>
                  <Checkbox
                    value={selection.isAllSelected}
                    onChange={selection.selectAll}
                  />
                </th>
                <th>Название компании</th>
                <th>Адрес</th>
                {selection.isSomeSelected || <th></th>}
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.array.map((company, index) => (
                <tr
                  key={company.id}
                  className={classNames(
                    styles.tr,
                    selection.isSelected(company.id) &&
                      tableTemplateExtraStyles.selected
                  )}
                >
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
                  {selection.isSomeSelected || (
                    <td>
                      <TextButton
                        errorStyle
                        onClick={() => onDeleteCompany(company.id)}
                      >
                        удалить
                      </TextButton>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </TableTemplate>
        </>
      ) : (
        <p className={styles.countInfoLabel}>Компаний нет</p>
      )}
    </div>
  );
};
