import { apiClient } from "../api/api-client";

export const getAllUsers = async () => {
  const response = await apiClient.get("/api/usuarios");
  return response.data;
};

export const getUserById = async ({ userID }: { userID?: string }) => {
  const response = await apiClient.get<{
    data: any;
  }>(`/api/usuarios/${userID}`, {
    params: {
      userID,
    },
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return response.data;
};
