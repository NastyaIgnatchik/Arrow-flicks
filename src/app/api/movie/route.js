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

    if (apiRes.statusCode !== 200) {
      throw new Error(
        `API request failed with status code ${apiRes.statusCode}`
      );
    }
    return NextResponse.json(apiRes.body);
  } catch (err) {
    return NextResponse.json({
      error: err.message,
    });
  }
}

export const dynamic = "force-dynamic";
