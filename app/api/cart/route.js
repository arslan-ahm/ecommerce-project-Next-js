import { NextResponse } from "next/server";

const GET = async (req) => {
  return NextResponse.json({ message: "'GET /api/cart' is called." });
}

export { GET };