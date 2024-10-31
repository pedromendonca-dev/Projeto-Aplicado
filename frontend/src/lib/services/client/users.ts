import { apiClient } from "../api/api-client";

export const getAllUsers = async () => {
  const response = await apiClient.get("/api/usuarios");
  return response.data;
};
