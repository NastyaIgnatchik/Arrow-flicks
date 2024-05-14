import { useState } from "react";
import { Pagination } from "@mantine/core";
import { MovieCard } from "@/components/MovieCard";

export function RatedMoviesPagination({ ratedMovies, getStorageData }) {
  const [activePage, setPage] = useState(1);
  const moviesPageCount = 10;

  const startIndex = (activePage - 1) * moviesPageCount;
  const endIndex = activePage * moviesPageCount;
  const items = ratedMovies?.slice(startIndex, endIndex);

  const renderedMovies = items?.map(({ movie }) => (
    <MovieCard key={movie?.id} movie={movie} getStorageData={getStorageData} />
  ));

  const pagesCount =
    ratedMovies?.length > moviesPageCount
      ? ratedMovies?.length / moviesPageCount
      : 0;

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1  justify-items-stretch gap-[16px] my-[24px]">
        {renderedMovies}
      </div>
      <div className=" flex flex-row justify-center">
        <Pagination
          color="violet"
          total={pagesCount}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </div>
    </>
  );
}
