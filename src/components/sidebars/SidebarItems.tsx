import React, { FC } from "react";
import Link from "next/link";
import { classes } from "../../configs/classnames";

export const MenuHeading: FC<{ text: string }> = ({ text }) => {
  return (
    <h6
      className={`md:min-w-full ${classes.textBase} text-xs uppercase font-bold block pt-1 pb-4 no-underline`}
    >
      {text}
    </h6>
  );
};
export const MenuDivider: FC<{}> = () => {
  return <hr className={`my-4 md:min-w-full ${classes.border}`} />;
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
          className={`text-xs uppercase p-3 font-bold block ${
            classes.textBase
          } ${classes.textHover} 
            ${isActive ? `border border-dashed ${classes.borderDark}` : ``} `}
        >
          <i className={`${iconClass} mr-2 text-sm`}></i> {text}
        </a>
      </Link>
    </li>
  );
};
