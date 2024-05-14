"use client";
import React, { useState } from "react";
import { Select } from "@mantine/core";
import { RiArrowDownWideFill } from "react-icons/ri";
import "../styles/select.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getGenresList,
  getRatingNumberArray,
  getYearsArray,
} from "@/helpers/functions/Functions";
import { useSelector } from "react-redux";

const Filters = () => {
  const genres = useSelector((state) => state.movies.genres);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortingTerms = [
    { value: "original_title.desc", label: "Title" },
    { value: "popularity.desc", label: "Popularity" },
    { value: "revenue.desc", label: "Revenue" },
    { value: "primary_release_date.asc", label: "Release date" },
    { value: "vote_average.asc", label: "Vote average" },
    { value: "vote_count.asc", label: "Vote count" },
  ];

  const initialGenreObject = genres?.find(({ id }) => {
    return id === Number(params.get("with_genres"));
  });

  const initialSortingTerm = sortingTerms?.find(({ value }) => {
    return value === params.get("sort_by");
  });

  const [genre, setGenre] = useState(initialGenreObject?.name);
  const [release, setRelease] = useState(params.get("primary_release_year"));
  const [ratingsFrom, setRatingsFrom] = useState(
    params.get("vote_average.lte")
  );
  const [ratingsTo, setRatingsTo] = useState(params.get("vote_average.gte"));
  const [sortBy, setSortBy] = useState(initialSortingTerm);

  const genresList = getGenresList(genres);
  const years = getYearsArray;
  const ratingNumber = getRatingNumberArray;

  const icon = <RiArrowDownWideFill />;

  const addGenreToUrl = (genre) => {
    setGenre(genre);
    const params = new URLSearchParams(searchParams);
    if (genre) {
      const { id } = genres?.find(({ name }) => {
        return name === genre;
      });
      params.set("with_genres", id?.toString());
    } else {
      params.delete("with_genres");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const addParamsToUrl = (setter, value, key) => {
    setter(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(`${key}`, `${value}`);
    } else {
      params.delete(`${key}`);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const addSortByToUrl = (term) => {
    setSortBy(term);
    const params = new URLSearchParams(searchParams);
    if (term?.value) {
      params.set("sort_by", `${term?.value}`);
    } else {
      params.delete("sort_by");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams);
    setGenre(null);
    setRelease(null);
    setRatingsTo(null);
    setRatingsFrom(null);
    setSortBy({ value: "", label: "" });
    params.delete("with_genres");
    params.delete("vote_average.gte");
    params.delete("vote_average.lte");
    params.delete("primary_release_year");
    params.delete("sort_by");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-[40px] flex flex-col">
      <div className="flex flex-col lg:flex-row gap-[16px]">
        <Select
          label="Genres"
          placeholder="Select genre"
          data={genresList}
          value={genre}
          onChange={(e) => addGenreToUrl(e)}
          rightSectionPointerEvents="none"
          rightSection={icon}
        />
        <Select
          label="Release year"
          placeholder="Select release year"
          data={years}
          value={release}
          onChange={(e) =>
            addParamsToUrl(setRelease, e, "primary_release_year")
          }
          rightSectionPointerEvents="none"
          rightSection={icon}
        />
        <Select
          label="Ratings"
          placeholder="From"
          data={ratingNumber}
          value={ratingsFrom}
          onChange={(e) =>
            addParamsToUrl(setRatingsFrom, e, "vote_average.lte")
          }
        />
        <Select
          label=" "
          placeholder="To"
          data={ratingNumber}
          value={ratingsTo}
          onChange={(e) => addParamsToUrl(setRatingsTo, e, "vote_average.gte")}
        />
        <button
          onClick={resetFilters}
          className=" flex self-end justify-center items-center text-start text-nowrap h-[42px] text-paleTextColor text-[14px] leading-[20px]"
        >
          Reset filters
        </button>
      </div>
      <div className="self-end mt-[24px]">
        <Select
          label="Sort by"
          placeholder="Sort by"
          data={sortingTerms}
          value={sortBy?.value ? sortBy?.value : null}
          onChange={(_value, option) => addSortByToUrl(option)}
          rightSectionPointerEvents="none"
          rightSection={icon}
        />
      </div>
    </div>
  );
};

export default Filters;
