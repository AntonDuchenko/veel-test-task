import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./lib/api/user";

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get("access-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
};

export const config = {
  matcher: ["/profile"],
};
