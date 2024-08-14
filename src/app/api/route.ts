import { type NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  return Response.json(
    { message: "Hello World" },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Do something with the body
  // e.g. save it to a database
  // ...

  return NextResponse.json(
    { body },
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
