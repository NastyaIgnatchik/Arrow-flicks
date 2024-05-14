"use client";
import StarIcon from "@/components/icons/StarIcon";
import "../styles/modal.css";
import Image from "next/image";
import {
  getFormattedDate,
  getGenresList,
  getMinHourTimeFromMinutes,
  getMoneyString,
  getReleaseYear,
  movieRatingRoundUp,
} from "@/helpers/functions/Functions";
import NoPoster from "@/components/banners/NoPoster";
import { useEffect, useState } from "react";

export function MovieDetails({ dataAboutMovie }) {
  const [userMovieRating, setIsUserMovieRating] = useState(0);
  const movieBudget = getMoneyString(dataAboutMovie?.budget);
  const movieRevenue = getMoneyString(dataAboutMovie?.revenue);
  const releaseYear = getReleaseYear(dataAboutMovie?.releaseDate);
  const duration = getMinHourTimeFromMinutes(dataAboutMovie?.runtime);
  const date = getFormattedDate(dataAboutMovie?.releaseDate);

  const movieRating = movieRatingRoundUp(dataAboutMovie?.average);

  const genresList = getGenresList(dataAboutMovie?.genres)?.join(", ");

  const movieParams = [
    { label: "Duration", value: duration },
    { label: "Premiere", value: date },
    { label: "Budget", value: movieBudget },
    { label: "Gross worldwide", value: movieRevenue },
    { label: "Genres", value: genresList },
  ];

  useEffect(() => {
    const item = localStorage?.getItem(`${dataAboutMovie?.id}`);
    const itemParsed = JSON.parse(item);
    if (itemParsed) {
      setIsUserMovieRating(itemParsed.average);
    } else setIsUserMovieRating(0);
  }, []);

  return (
    <div className="bg-[white] p-[24px] flex flex-row h-auto w-full   rounded-[12px] justify-between">
      <div className=" flex  flex-col items-center lg:items-start lg:flex-row w-full ">
        {dataAboutMovie?.img ? (
          <div className=" relative h-[352px] w-[200px] sm:w-[250px] mr-[16px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${dataAboutMovie?.img}`}
              fill
              alt="Picture"
            />
          </div>
        ) : (
          <NoPoster
            title="No Poster"
            classString={"h-[352px] w-[200px] sm:w-[250px]"}
          />
        )}
        <div className="flex flex-col lg:h-[100%] sm:justify-between w-full lg:w-[70%] ">
          <div className="flex flex-col gap-[8px] ">
            <div className="flex flex-row items-center justify-between mt-[16px] sm:mt-0">
              <p className="text-textColor font-semibold font-[24px] ">
                {dataAboutMovie?.title}
              </p>
              <div className="flex  flex-row justify-center items-center">
                <StarIcon color={userMovieRating ? "#FAB005" : "#D5D6DC"} />
                {userMovieRating > 0 && (
                  <p className="pl-[4px] font-[16px] leading-[20px] font-semibold">
                    {userMovieRating}
                  </p>
                )}
              </div>
            </div>
            <p className="text-paleTextColor font-[16px] leading-[20px]">
              {releaseYear}
            </p>
            <div className="flex flex-row items-center lg:mb-0 mb-[16px]">
              <StarIcon />
              <p className="pl-[4px] font-[16px] leading-[20px] font-semibold">
                {movieRating}
              </p>
              <p className="pl-[8px] font-[16px] ">{`(${dataAboutMovie?.voteCount} m)`}</p>
            </div>
          </div>

          <div className="flex flex-col mt-[16px] sm:mt-0 gap-[12px]  ">
            {movieParams?.map(({ label, value }) => {
              return (
                <div
                  key={label}
                  className="flex  flex-row justify-between sm:justify-start"
                >
                  <p className="text-paleTextColor font-[16px] leading-[20px]  w-[33%] text-wrap">
                    {label}
                  </p>
                  <p className="font-[16px] leading-[20px]  text-wrap ">
                    {value ? value : "not mention"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
