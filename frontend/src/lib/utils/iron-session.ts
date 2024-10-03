import { SessionOptions } from "iron-session";

export interface SessionData {
  token: string;
}

export const defaultSession: SessionData = {
  token: "",
};

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_PUBLIC_IRON_SESSION_PASSWORD!,
  cookieName: "auth",
};
