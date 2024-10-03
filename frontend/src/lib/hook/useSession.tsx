"use client";

import { useContext, createContext } from "react";

import { SessionData } from "../utils/iron-session";

export const SessionContext = createContext<SessionData>({} as SessionData);

export const SessionProvider = ({
  children,
  defaultSession,
}: {
  children: React.ReactNode;
  defaultSession: SessionData;
}) => {
  const session = defaultSession;

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
