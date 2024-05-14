"use client";
import { useEffect, useState } from "react";
import { SearchMovie } from "@/components/SearchMovie";
import { RatedMoviesPagination } from "@/components/paginations/RatedMoviesPagination";
import NoRated from "@/components/banners/NoRated";
import { MovieLoader } from "@/components/MovieLoader";

export default function RatedMoviesComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [confirmSearch, setConfirmSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getStorageData() {
    if (window.localStorage) {
      const arr = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && Number(key)) {
          const itemByKey = localStorage.getItem(key);
          const item = JSON.parse(itemByKey);

          if (item?.average) {
            arr.push(item);
          }
        }
      }
      setData(arr);
    }
  }





  const searchedMovies = data?.filter(({ movie }) => {
    return movie?.title?.toLowerCase().includes(searchValue.toLowerCase());
  });

  const searchChangeHandler = (e) => {
    setSearchValue(e);
    setConfirmSearch(false);
  };

  const setLoadingTimeout = () => {
    if (!data) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    getStorageData();
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else setLoadingTimeout();
  }, [data]);

  const loaderOrNotFound = isLoading ? <MovieLoader /> :  <NoRated />;

  const moviesOrNotFound = !searchedMovies?.length && confirmSearch ? <NoRated /> : <RatedMoviesPagination
      ratedMovies={confirmSearch ? searchedMovies : data}
      getStorageData={getStorageData}
  />

  return (
    <>
      {data?.length ? (
        <>
          <div className="flex sm:flex-row flex-col pt-[41.5px] justify-between">
            <p className="text-[32px] leading-[45px] font-bold pb-[16px] sm:pb-0">
              Rated movies
            </p>
            <SearchMovie
              setConfirmSearch={() => setConfirmSearch(true)}
              value={searchValue}
              setValue={searchChangeHandler}
            />
          </div>
          {moviesOrNotFound}
        </>
      ) : (
        loaderOrNotFound
      )}
    </>
  );
}

export const dynamicParams = false
