/** @format */

"use client";

import { FC } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "../theme-provider";

interface ProviderProps {
  children: React.ReactNode;
  session: Session;
}

const Provider: FC<ProviderProps> = ({ children, session }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <ThemeProvider>{children}</ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Provider;
