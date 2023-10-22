import { searchReviews } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = request.nextUrl;

  const query = searchParams.get("query");
  const reviews = await searchReviews(query);

  return NextResponse.json(reviews);
}
