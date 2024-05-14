import { NextResponse } from "next/server";
import needle from "needle";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);

    const params = new URLSearchParams({
      ["api_key"]: [process.env.NEXT_PUBLIC_API_KEY],
    });

    const options = {
      headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN },
    };
    const id = searchParams.get("id");

    const url = `${process.env.NEXT_PUBLIC_REST_API}/movie/${id}?${params}&append_to_response=videos`;

    const apiRes = await needle("get", `${url}`, options);
    return NextResponse.json(apiRes.body);
  } catch (err) {
    return NextResponse.json(
      { message: "Something wrong on server" },
      { status: 404, statusText: "Something wrong on server" }
    );
  }
}

 export const dynamic = 'force-dynamic'
