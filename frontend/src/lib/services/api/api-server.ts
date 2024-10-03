import axios from "axios";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

import { sessionOptions, SessionData } from "@/lib/utils/iron-session";

const apiServer = axios.create({
  baseURL: process.env.BACKEND_API_URL,
});

apiServer.interceptors.request.use(
  async (config) => {
    const session = await getIronSession<SessionData>(
      cookies(),
      sessionOptions
    );
    const token = session.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiServer.interceptors.response.use(
  (response) => response.data.data,
  (error) => Promise.reject(error.response.data)
);

export { apiServer };
