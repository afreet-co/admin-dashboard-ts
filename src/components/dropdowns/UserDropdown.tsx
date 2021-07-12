import React, { useRef } from "react";
import { createPopper } from "@popperjs/core";
import { site_name } from "../../configs/strings";

export const UserDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const popoverDropdownRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: "bottom-end",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const linkClasses = `text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-dark-700 dark:text-light-400 hover:text-dark-600 dark:hover:text-light-500`;

  return (
    <>
      <a
        className={`text-dark-700 dark:text-light-400 block`}
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span
            className={`w-8 h-8 text-sm text-dark-700 dark:text-light-400 border-2 uppercase border-light-200 dark:border-dark-600 bg-light-400 dark:bg-dark-800 inline-flex items-center justify-center rounded-full hover:bg-light-300 dark:hover:bg-dark-600`}
          >
            {site_name.slice(0, 2)}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          `bg-light-400 dark:bg-dark-800 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`
        }
      >
        <a href="#" className={linkClasses} onClick={(e) => e.preventDefault()}>
          Profile
        </a>
        <a href="#" className={linkClasses} onClick={(e) => e.preventDefault()}>
          Logout
        </a>
      </div>
    </>
  );
};
