import React, { FC } from "react";
import { DashboardNavbar } from "../components/navbars/DashboardNavbar";
import { DashboardSidebar } from "../components/sidebars/DashboardSidebar";
import { Footer } from "../components/footers/Footer";
import { classes } from "../configs/classnames";

export const DashboardLayout: FC = ({ children }) => {
  return (
    <>
      <DashboardSidebar />
      <div
        className={`md:ml-64 ${classes.background.base} h-screen overflow-auto`}
      >
        <DashboardNavbar />
        <div className="p-4 w-full min-h-full space-y-4">{children}</div>
        <Footer isAuthLayout={false} />
      </div>
    </>
  );
};
