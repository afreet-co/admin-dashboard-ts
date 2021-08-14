import React, { useRef } from "react";
import { createPopper } from "@popperjs/core";
import { site_name } from "../../configs/strings";
import { classes } from "../../configs/classnames";

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

  const linkClasses = `text-sm py-2 px-4 font-medium block w-full whitespace-nowrap bg-transparent ${classes.textBase} ${classes.textHover}`;

  return (
    <>
      <a
        className={`${classes.textBase} block`}
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span
            className={`w-8 h-8 text-sm ${classes.textBase} border-2 uppercase ${classes.border} ${classes.background.dark} inline-flex items-center justify-center rounded-full ${classes.background.hoverBase}`}
          >
            {site_name?.slice(0, 2)}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          `${classes.background.dark} text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48`
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
