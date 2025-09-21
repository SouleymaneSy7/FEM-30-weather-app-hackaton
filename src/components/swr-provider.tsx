"use client";

import * as React from "react";
import { SWRConfig } from "swr";

import { fetcher } from "@/lib/fetcher";

export const SWRProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 0,
        revalidateOnReconnect: true,
        revalidateOnFocus: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
