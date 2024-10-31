import axios from "axios";
import { cookies } from "next/headers";

const apiServer = axios.create({
  baseURL: process.env.BACKEND_API_URL,
});

apiServer.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

apiServer.interceptors.request.use(
  async (config) => {
    const token = cookies().get("authToken")?.value;

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiServer.interceptors.response.use(
  (response) => (response.data.data ? response.data.data : response),
  (error) => {
    if (error.response) {
      return Promise.reject({
        statusCode: error.response.status,
        message: error.response.data.message || "Erro desconhecido",
      });
    }
    return Promise.reject({
      statusCode: 500,
      message: "Erro desconhecido",
    });
  }
);

export { apiServer };
