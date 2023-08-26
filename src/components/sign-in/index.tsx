/** @format */

import { FC } from "react";
import { Icons } from "../icons";
import Link from "next/link";
import UserAuthForm from "../user-auth-form";

const SignIn: FC = ({}) => {
  return (
    <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <div className="text-2xl font-semibold tracking-tight">
          Welcome back
        </div>
        <p className="text-sm max-w-xs mx-auto">
          By continuing you are setting up a Note-App account and agree to our
          User Agreement and Privacy and Policy.
        </p>
        <UserAuthForm />
        <p className="px-8 text-center tex-sm">
          New to Note-App?{" "}
          <Link
            href="/sign-up"
            className="text-sm hover:text-zinc-800 underline underline-offset-3"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
