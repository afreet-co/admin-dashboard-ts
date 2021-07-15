import React, { FC } from "react";
import Link from "next/link";

export const MenuHeading: FC<{ text: string }> = ({ text }) => {
  return (
    <h6
      className={`md:min-w-full text-dark-500 dark:text-light-300 text-xs uppercase font-bold block pt-1 pb-4 no-underline`}
    >
      {text}
    </h6>
  );
};
export const MenuDivider: FC<{}> = () => {
  return (
    <hr
      className={`my-4 md:min-w-full border-light-400 dark:border-dark-300 `}
    />
  );
};

export const MenuList: FC = ({ children }) => {
  return (
    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
      {children}
    </ul>
  );
};

interface MenuListItemProps {
  isActive: boolean;
  text: string;
  path: string;
  iconClass: string;
}

export const MenuListItem: FC<MenuListItemProps> = ({
  iconClass,
  isActive,
  path,
  text,
}) => {
  return (
    <li className="items-center">
      <Link href={path}>
        <a
          className={`text-xs uppercase p-3 font-bold block text-dark-500 dark:text-light-400 hover:text-dark-300 dark:hover:text-light-500 
            ${
              isActive
                ? `border border-dashed border-dark-500 dark:border-light-400`
                : ``
            } `}
        >
          <i className={`${iconClass} mr-2 text-sm`}></i> {text}
        </a>
      </Link>
    </li>
  );
};
