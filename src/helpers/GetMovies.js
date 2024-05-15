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
    return response?.results;
  } catch (e) {
    return {message:e.message};
  }
};
