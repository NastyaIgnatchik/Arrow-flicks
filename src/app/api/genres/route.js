import { NextResponse } from "next/server";
import needle from "needle";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function GET(req, res) {
  try {
    const options = {
      headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN },
    };

    const url = `${process.env.NEXT_PUBLIC_REST_API}/genre/movie/list`;

    const apiRes = await needle("get", `${url}`, options);

    return NextResponse.json(apiRes.body);
  } catch (err) {
    return NextResponse.json(
      { message: "Something wrong on server" },
      { status: 404, statusText: "Something wrong on server" }
    );
  }
}
