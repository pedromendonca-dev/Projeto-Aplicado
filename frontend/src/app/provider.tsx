"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SessionData } from "@/lib/utils/iron-session";
import { SessionProvider } from "@/lib/hook/useSession";

export default function Providers({
  children,
  defaultSession,
}: {
  children: React.ReactNode;
  defaultSession: SessionData;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: 1 },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider defaultSession={defaultSession}>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
