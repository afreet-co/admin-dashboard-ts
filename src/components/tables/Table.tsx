import React, { FC, ReactNode } from "react";
import { classes } from "../../configs/classnames";

interface TableProps {
  columnNames: string[];
  rows: any[];
  boxShadow?: boolean;
  options?: (item: any) => ReactNode;
}
export const Table: FC<TableProps> = ({
  columnNames,
  rows,
  options,
  boxShadow,
}) => {
  const tableHeadClasses = `align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${classes.textBase} ${classes.border} p-2`;
  const trClasses = `ease-linear transition-all duration-100 ${classes.background.hoverLight}`;
  const tdClasses = `border-t-0 align-middle border-l-0 border-r-0 whitespace-nowrap p-2`;

  return (
    <>
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
              {rows.length > 0 &&
                rows.map((row, index) => (
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
    </>
  );
};
