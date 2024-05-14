import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const mtbdServices = {
  async getData(url) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAlHOST}${url}`, {
        method: "GET",
        next: {revalidate: 10},
      });
      console.log(res)
      const response = await res.json();

      if (response.status_message) {
        throw new Error(`${response.status_message}`);
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
    const u = await this.getData(url);
    return u
  },

  async getMovie(id) {
    const url = `/api/movie?id=${id}`;
    const y = await this.getData(url);
    console.log(y)
    return y
  },
};
