import React from "react";
import Link from "next/link";
import { AuthLayout } from "../layouts/AuthLayout";
import { Button } from "../components/buttons/Button";
import { TextInput } from "../components/input/TextInput";
import { Checkbox } from "../components/input/Checkbox";
import { classes } from "../configs/classnames";
const Login = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center items-start ">
        <div className="w-full lg:w-4/12 px-4">
          <div
            className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${classes.background.dark}  border-0`}
          >
            <div className="mb-0 p-6">
              <div
                className={`block uppercase ${classes.textBase} text-lg font-bold text-center`}
              >
                Login
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form className="space-y-4">
                <TextInput
                  controlId="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                />
                <TextInput
                  controlId="password"
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
                <Checkbox>Remember me?</Checkbox>
                <Button classNames="w-full" size="regular">
                  Sign In
                </Button>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                onClick={(e) => e.preventDefault()}
                className={`text-dark-500 dark:text-light-400`}
              >
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/register">
                <a className={`text-dark-500 dark:text-light-400`}>
                  <small>Create new account</small>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
