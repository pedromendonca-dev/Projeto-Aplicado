import { apiClient } from "../api/api-client";

export const getAllServices = async () => {
  const response = await apiClient.get("/api/servicos");
  return response.data;
};

export const getServicesById = async ({ serviceId }: { serviceId?: string }) => {
  const response = await apiClient.get<{
    data: any;
  }>(`/api/servicos/${serviceId}`, {
    params: {
      serviceId,
    },
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return response.data;
};
