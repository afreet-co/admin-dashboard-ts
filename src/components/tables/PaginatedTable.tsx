import React, { FC, ReactNode } from "react";
import { classes } from "../../configs/classnames";
import { usePagination } from "../../hooks/usePagination";
import { Button } from "../buttons/Button";
import { Select } from "../input/Select";

interface PaginatedTableProps {
  columnNames: string[];
  rows: any[];
  boxShadow?: boolean;
  options?: (item: any) => ReactNode;
}
export const PaginatedTable: FC<PaginatedTableProps> = ({
  columnNames,
  rows,
  options,
  boxShadow,
}) => {
  const {
    isNextDisabled,
    isPreviousDisabled,
    onNextClick,
    onPrevClick,
    showableRows,
    pageNumber,
    onPageSizeChange,
    pages,
    pageSize,
    onPageChange,
  } = usePagination(rows);

  const tableHeadClasses = `align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${classes.textBase} ${classes.border} p-2`;
  const trClasses = `ease-linear transition-all duration-100 ${classes.background.hoverLight}`;
  const tdClasses = `border-t-0 align-middle border-l-0 border-r-0 whitespace-nowrap p-2`;

  return (
    <div>
      <div
        className={`flex flex-col min-w-0 break-words w-full p-4 h-96 overflow-auto  ${
          boxShadow ? "shadow-lg" : ""
        } rounded ${classes.background.base} ${classes.textBase}`}
      >
        <div className="block w-full">
          <table className="table-auto items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {columnNames.length > 0 &&
                  columnNames.map((name) => (
                    <th key={name} className={tableHeadClasses}>
                      {name}
                    </th>
                  ))}
                {options && <th className={tableHeadClasses}></th>}
              </tr>
            </thead>
            <tbody>
              {showableRows.length > 0 &&
                showableRows.map((row, index) => (
                  <tr key={index} className={trClasses}>
                    {columnNames.map((columnName) => (
                      <td key={columnName} className={tdClasses}>
                        {row[columnName]}
                      </td>
                    ))}
                    {options && (
                      <td
                        className={`${tdClasses} flex justify-end items-center w-full h-full`}
                      >
                        {options(row)}
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${classes.background.base} flex mt-3 p-2 rounded`}>
        <div className={`flex flex-1 space-x-2 items-center`}>
          <Button onClick={onPrevClick} disabled={isPreviousDisabled}>
            <i className="fas fa-chevron-left"></i>
          </Button>
          <Button disabled={true}>{pageNumber}</Button>
          <Button onClick={onNextClick} disabled={isNextDisabled}>
            <i className="fas fa-chevron-right"></i>
          </Button>
          <Select
            controlId="page-number"
            options={[...new Array(pages)].map((_, index) => ({
              text: String(index + 1),
              value: index + 1,
            }))}
            onChange={(e) => onPageChange(+e.target.value)}
            selected={pageNumber}
          />
          <span className=""> of Page {pages}</span>
        </div>
        <Select
          controlId="page-size"
          options={[
            { text: "5", value: "5" },
            { text: "10", value: "10" },
            { text: "15", value: "15" },
          ]}
          onChange={(e) => onPageSizeChange(e.target.value)}
          selected={pageSize}
        />
      </div>
    </div>
  );
};
