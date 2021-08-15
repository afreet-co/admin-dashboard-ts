import Link from "next/link";
import React from "react";
import { Button } from "../components/buttons/Button";
import { Checkbox } from "../components/input/Checkbox";
import { TextInput } from "../components/input/TextInput";
import { classes } from "../configs/classnames";
import { AuthLayout } from "../layouts/AuthLayout";
const Register = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center items-start">
        <div className="w-full lg:w-4/12 px-4">
          <div
            className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ${classes.background.dark}  border-0`}
          >
            <div className="mb-0 p-6">
              <div
                className={`block uppercase ${classes.textBase} text-lg font-bold text-center`}
              >
                Register
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form className="space-y-4">
                <TextInput
                  controlId="name"
                  label="Name"
                  placeholder="Name"
                  type="text"
                />
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
                <Checkbox>
                  I agree with the{" "}
                  <a
                    className={`${classes.textBase} ${classes.textHover}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    Privacy Policy
                  </a>
                </Checkbox>
                <Button classNames="w-full" size="regular">
                  Create Account
                </Button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 relative">
            <Link href="/login">
              <a
                className={`${classes.textBase} ${classes.textHover} cursor-pointer`}
              >
                <small>Already a member? Sign in</small>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
