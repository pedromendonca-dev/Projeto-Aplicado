/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiServer } from "@/lib/services/api/api-server";


export async function POST(req: Request) {

  const body = await req.json();

  try {
    const response: any = await apiServer.post("/categorys", body);

    return Response.json(response);
  } catch (error) {
    const errorResponse = error as any;

    return Response.json(errorResponse.message, {
      status: errorResponse.statusCode,
    });
  }
}

export async function GET(req: Request) {
  
  const { searchParams }: any = new URL(req.url);

  try {
    const response = await apiServer.get("/categorys");

    return Response.json(response);
  } catch (error) {
    
    const errorResponse = error as any;

    return Response.json(errorResponse.message, {
      status: errorResponse.statusCode,
    });
  }
}
