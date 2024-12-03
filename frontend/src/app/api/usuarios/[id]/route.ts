import { apiServer } from "@/lib/services/api/api-server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const userId = searchParams.get("userID");

  try {
    const response = await apiServer.get(`/users/${userId}`);

    const { data } = response;

    return Response.json({ data });
  } catch (error) {
    const errorResponse = error as any;

    return Response.json(errorResponse.message, {
      status: errorResponse.statusCode,
    });
  }
}
