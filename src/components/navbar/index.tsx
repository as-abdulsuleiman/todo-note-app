/** @format */

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { getAuthSession } from "@/lib/auth";
import ThemeToggle from "../theme-toggle";
import UserAccountNav from "../user-account-nav";
import { Icons } from "../icons";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="sticky top-0 supports-backdrop-blur:bg-background/60 inset-x-0 w-full z-50 border-b bg-background/95 backdrop-blur">
      <nav className="container px-[16px] md:px-[2rem] max-w-7xl w-full h-14 mx-auto flex items-center ">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidde text-md font-medium md:block">Note-App</p>
        </Link>
        <div className="ml-auto flex items-center">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign in
            </Link>
          )}
          <ThemeToggle className="ml-3" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
