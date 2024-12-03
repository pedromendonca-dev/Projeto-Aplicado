import { apiServer } from "@/lib/services/api/api-server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const serviceId = searchParams.get("serviceId");

  try {
    const response = await apiServer.get(`/services/${serviceId}`);

    const { data } = response;

    return Response.json({ data });
  } catch (error) {
    const errorResponse = error as any;

    return Response.json(errorResponse.message, {
      status: errorResponse.statusCode,
    });
  }
}
