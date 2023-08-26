/** @format */

"use client";

import { User } from "next-auth";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import UserAvatar from "../user-avatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0 focus:outline-none focus:ring-none focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0">
        <UserAvatar
          className="h-8 w-8 "
          user={{
            name: user?.name || null,
            image: user?.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user?.name && <p className="font-medium">{user.name}</p>}
            {user?.email && (
              <p className="truncate w-[200px] text-sm ">{user.email}</p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/">Create community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
