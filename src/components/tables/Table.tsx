import React, { FC, ReactNode } from "react";

interface TableProps {
  title?: string;
  columnNames: string[];
  rows: any[];
  boxShadow?: boolean;
  options?: (item: any) => ReactNode;
}
export const Table: FC<TableProps> = ({
  title,
  columnNames,
  rows,
  options,
  boxShadow,
}) => {
  const tableHeadClasses = `align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-dark-500 dark:text-light-400 border-dark-500 dark:border-light-300`;
  const trClasses = `ease-linear transition-all duration-100 hover:bg-light-200 dark:hover:bg-dark-400`;
  const tdClasses = `border-t-0 align-middle border-l-0 border-r-0 whitespace-nowrap`;

  return (
    <>
      <div
        className={`flex flex-col min-w-0 break-words w-full mb-6 p-4 ${
          boxShadow ? "shadow-lg" : ""
        } rounded bg-light-300 dark:bg-dark-500 text-dark-500 dark:text-light-300 `}
      >
        {title && (
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={`font-semibold text-lg text-dark-500 dark:text-light-300`}
                >
                  {title}
                </h3>
              </div>
            </div>
          </div>
        )}
        <div className="block w-full overflow-x-auto">
          <table className="table-auto items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {columnNames.length > 0 &&
                  columnNames.map((name) => (
                    <th key={name} className={tableHeadClasses + " py-3 px-2"}>
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
                      <td key={columnName} className={tdClasses + " py-1 px-2"}>
                        {row[columnName]}
                      </td>
                    ))}
                    {options && (
                      <td
                        className={
                          tdClasses +
                          " flex justify-end items-center w-full h-full py-1 px-2"
                        }
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
