import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { UserDropdown } from "../dropdowns/UserDropdown";
import { site_name } from "../../configs/strings";
import {
  MenuDivider,
  MenuHeading,
  MenuList,
  MenuListItem,
} from "./SidebarItems";
import { sidebarRoutes } from "../../configs/routes";
import { classes } from "../../configs/classnames";

export const DashboardSidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav
        className={`md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl ${classes.background.dark} flex flex-wrap items-center justify-between relative md:w-64 z-10 py-2 px-6`}
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className={`cursor-pointer px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent opacity-50 md:hidden `}
            type="button"
            onClick={() =>
              setCollapseShow(` ${classes.background.dark} m-2 py-3 px-6`)
            }
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/app/dashboard">
            <a
              href="#"
              className={`md:block text-left md:p-2 ${classes.textBase} ${classes.textHover} mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0`}
            >
              {site_name}
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block mb-4">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/app/dashboard">
                    <a
                      href="#"
                      className={`md:block text-left md:p-2 ${classes.textBase} ${classes.textHover}  mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0`}
                    >
                      {site_name}
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className={`cursor-pointer ${classes.textBase} ${classes.textHover}  opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent`}
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-8 py-2">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className={`border-0 px-3 py-2 ${classes.placeholder} relative ${classes.background.base}  rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-8`}
                />
              </div>
            </form>

            {sidebarRoutes.map(({ id, items, title }) => (
              <Fragment key={id}>
                <MenuDivider />
                <MenuHeading text={title} />
                <MenuList>
                  {items.map(({ iconClass, path, orderNo, text }) => (
                    <MenuListItem
                      key={orderNo}
                      iconClass={iconClass}
                      path={path}
                      isActive={router.pathname.indexOf(path) !== -1}
                      text={text}
                    />
                  ))}
                </MenuList>
              </Fragment>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
