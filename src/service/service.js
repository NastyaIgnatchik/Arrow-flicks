import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const mtbdServices = {
  async getData(url) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAlHOST}${url}`, {
        method: "GET",
      });
      const response = await res.json();

      if (response.error) {
        throw new Error(response.error);
      }
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getGenres() {
    const url = "/api/genres";
    return await this.getData(url);
  },

  async getMovies(
    page = 1,
    genre = 10770,
    releaseYear = "2024",
    voteAverageFrom = "0",
    voteAverageTo = "10",
    sortBy = "popularity.desc"
  ) {
    const url = `/api/movies?page=${page}&with_genres=${genre}&primary_release_year=${releaseYear}&vote_average.lte=${voteAverageTo}&vote_average.gte=${voteAverageFrom}&sort_by=${sortBy}`;
    return await this.getData(url);
  },

  async getMovie(id) {
    const url = `/api/movie?id=${id}`;
    return await this.getData(url);
  },
};

export const revalidation = 60;
