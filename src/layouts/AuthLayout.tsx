import React, { FC } from "react";
import { Footer } from "../components/footers/Footer";
import { AuthNavbar } from "../components/navbars/AuthNavbar";
import { classes } from "../configs/classnames";

export const AuthLayout: FC = ({ children }) => {
  return (
    <div
      className={`w-screen h-screen ${classes.background.base} bg-no-repeat bg-full overflow-auto`}
    >
      <AuthNavbar />
      <div className=" min-h-full w-full flex justify-center items-start pt-10">
        {children}
      </div>
      <Footer isAuthLayout={true} />
    </div>
  );
};
