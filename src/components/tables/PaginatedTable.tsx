import React, { FC, ReactNode } from "react";
import { classes } from "../../configs/classnames";
import { usePagination } from "../../hooks/usePagination";
import { Button } from "../buttons/Button";
import { Select } from "../input/Select";
import { Table } from "./Table";

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
  return (
    <>
      <Table
        columnNames={columnNames}
        options={options}
        rows={showableRows}
        boxShadow={boxShadow}
      />
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
    </>
  );
};
