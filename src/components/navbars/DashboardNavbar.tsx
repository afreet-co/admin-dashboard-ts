import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";

import { getTitleFromPath } from "../../helpers/strings";
import { UserDropdown } from "../dropdowns/UserDropdown";
import { site_name } from "../../configs/strings";
import { classes } from "../../configs/classnames";

export const DashboardNavbar = () => {
  const router = useRouter();
  const navbarTitle = getTitleFromPath(router.asPath);

  return (
    <>
      <Head>
        <title>
          {navbarTitle} | {site_name}
        </title>
      </Head>
      {/* Navbar */}
      <nav
        className={`md:flex hidden sticky top-0 w-full z-10 ${classes.background.dark} shadow md:flex-row md:flex-nowrap md:justify-start  items-center p-2`}
      >
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap px-4">
          <div
            className={`${classes.textBase} text-sm  hidden lg:inline-block  font-semibold`}
          >
            {navbarTitle}
          </div>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 py-2">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className={`border-0 px-3 py-2 ${classes.placeholder} relative ${classes.background.base}  rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-8`}
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};
