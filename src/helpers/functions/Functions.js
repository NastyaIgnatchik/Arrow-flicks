const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getGenresList = (genres) =>
  genres?.map(({ name }) => {
    return name;
  });
export const getYearsArray = Array.from({ length: 2024 - 1970 + 1 }, (_, i) =>
  (1970 + i).toString()
);

export const getRatingNumberArray = Array.from({ length: 10 - 0 + 1 }, (_, i) =>
  (0 + i).toString()
);

export const getMovieFieldToProps = (e) => {
  return {
    id: e?.id,
    genres: e?.genre_ids,
    img: e?.poster_path,
    title: e?.title,
    release: e?.release_date,
    voteAverage: e?.vote_average,
    voteCount: e?.vote_count,
  };
};
export const getReleaseYear = (date) => date?.slice(0, 4);

export const getFilmGenresById = (allGenres, genres) => {
  const genresArr = genres?.map((e) => {
    const genre = allGenres?.find(({ id }) => id === e);
    return genre ? genre.name : null;
  });
  return genresArr[0] === null ? [] : genresArr;
};

export const getDataAboutMovieToProps = (movie) => {
  const isError = movie instanceof Error;
  if (!isError)
    return {
      id: movie?.id,
      genres: movie?.genres,
      revenue: movie?.revenue,
      budget: movie?.budget,
      runtime: movie?.runtime,
      img: movie?.poster_path,
      title: movie?.original_title,
      releaseDate: movie?.release_date,
      average: movie?.vote_average,
      voteCount: movie?.vote_count,
      productionCompanies: movie?.production_companies,
      overview: movie?.overview,
    };
};

export const getMinHourTimeFromMinutes = (value) => {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  const renderHour = hours ? `${hours}h` : null;
  const renderMinutes = minutes ? `${minutes}m` : null;
  const renderedDuration =
    renderHour || renderMinutes
      ? `${renderHour} ${renderMinutes}`
      : "not mentioned";
  return renderedDuration;
};

export const getFormattedDate = (date) => {
  const year = getReleaseYear(date);
  const day = date?.slice(0, 2);
  const monthString = date?.slice(5, 7);
  const monthNumber = Number(monthString);
  let monthName = "";
  if (monthNumber && monthNumber >= 1 && monthNumber <= 12) {
    monthName = months[monthNumber - 1];
  }
  const renderedDate =
    monthName && day && year ? `${monthName} ${day}, ${year}` : "not mentioned";
  return renderedDate;
};

export const getMoneyString = (value) => {
  const reg = /\B(?=(\d{3})+(?!\d))/g;
  const str = value?.toString();
  const renderStr =
    str === "0" || !str ? "not mentioned" : `$${str?.replace(reg, ",")}`;
  return renderStr;
};

export const movieRatingRoundUp = (value) => {
  if (value > 0) {
    return value?.toFixed(1);
  }
  return "0";
};

export const getVoteCount = (value) => {
  if (!value) {
    return "";
  } else {
    if (value >= 1000) {
      const number = value / 1000;
      const millions = number.toFixed(1);
      return `(${millions} m)`;
    }
    return `(${value} k)`;
  }
};
