import React from "react";
import styles from "./MainPage.module.scss";
import classNames from "classnames";
import { routes } from "shared/route";
import { useAppDispatch, useAppSelector } from "shared/store";
import {
  Button,
  Checkbox,
  Container,
  PageTitle,
  TableTemplate,
} from "shared/ui";
import {
  companiesSlice,
  selectCompanies,
  useCompaniesSelection,
} from "entities/company";
import { CompanyCreation } from "widgets/companyCreation";

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectCompanies);
  const selection = useCompaniesSelection(data);
  console.log(selection.items);
  console.debug(data);
  console.debug("");

  const deleteItems = () => {
    dispatch(companiesSlice.actions.deleteByIds(selection.ids));
    selection.reset();
  };

  return (
    <div className={styles.root}>
      <Container>
        <PageTitle>{routes.main.name}</PageTitle>
        <CompanyCreation />
        {selection.isSomeSelected && (
          <Button onClick={deleteItems}>Удалить</Button>
        )}
        <TableTemplate>
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
              <tr>
                <td>
                  <Checkbox
                    value={selection.isSelected(company.id)}
                    onChange={() => selection.select(company)}
                  />
                </td>
                <td>{company.name}</td>
                <td>{company.name}</td>
              </tr>
            ))}
          </tbody>
        </TableTemplate>
      </Container>
    </div>
  );
};
