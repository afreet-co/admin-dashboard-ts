import React from "react";
import { FC } from "react";

interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ children, title }) => {
  return (
    <div className="w-full ">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-light-200 dark:bg-dark-300">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-xl text-dark-600 dark:text-light-500">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">{children}</div>
      </div>
    </div>
  );
};
