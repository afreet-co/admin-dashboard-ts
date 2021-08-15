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
      <div className="min-h-full w-full space-y-4 mx-auto px-10 py-5">
        {children}
      </div>
      <Footer isAuthLayout={true} />
    </div>
  );
};
