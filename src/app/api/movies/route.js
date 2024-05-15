import { NextResponse } from "next/server";
import needle from "needle";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const options = {
      headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN },
    };
    const page = searchParams.get("page") | 1;
    const genre = searchParams.get("with_genres") || 18;
    const releaseYear = searchParams.get("primary_release_year") || "2024";
    const voteAverageFrom = searchParams.get("vote_average.gte") || "0";
    const voteAverageTo = searchParams.get("vote_average.lte") || "10";
    const sortBy = searchParams.get("sort_by") || "popularity.desc";

    const url = `${process.env.NEXT_PUBLIC_REST_API}/discover/movie?language=en-US&page=${page}&with_genres=${genre}&primary_release_year=${releaseYear}&vote_average.lte=${voteAverageTo}&vote_average.gte=${voteAverageFrom}&sort_by=${sortBy}`;

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
