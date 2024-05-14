import { mtbdServices } from "@/service/service";

export const getMovies = async (
  page = 1,
  genre,
  releaseYear,
  voteAverageFrom,
  voteAverageTo,
  sortBy
) => {
  try {
    const response = await mtbdServices.getMovies(
      page,
      genre,
      releaseYear,
      voteAverageFrom,
      voteAverageTo,
      sortBy
    );
    if (!response) {
      throw new Error("no response");
    }
    return response?.results;
  } catch (e) {
    return e;
  }
};
