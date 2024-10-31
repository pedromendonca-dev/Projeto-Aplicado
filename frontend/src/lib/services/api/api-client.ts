import axios from "axios";

const apiClient = axios.create();

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      window.location.pathname !== "/login"
    ) {
    }

    return Promise.reject(error.response.data);
  }
);

export { apiClient };
