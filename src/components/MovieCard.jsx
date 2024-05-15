"use client";
import StarIcon from "@/components/icons/StarIcon";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import "../styles/modal.css";
import Image from "next/image";
import MovieRatingModal from "@/components/modals/MovieRatingModal";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  getFilmGenresById,
  getMovieFieldToProps,
  getReleaseYear, getVoteCount,
  movieRatingRoundUp,
} from "@/helpers/functions/Functions";
import NoPoster from "@/components/banners/NoPoster";
import { getAllGenres } from "@/lib/actions/movies";
import { useDispatch, useSelector } from "react-redux";

export function MovieCard({ getStorageData, movie }) {
  const { id, title, voteAverage, voteCount, release, genres, img } =
    getMovieFieldToProps(movie);

  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();

  const [opened, { open, close }] = useDisclosure(false);
  const [movieEstimate, setMovieEstimate] = useState(0);
  const [savedMovieEstimate, setSavedMovieEstimate] = useState(0);
  const [isSave, setIsSave] = useState(false);

  const releaseYear = getReleaseYear(release);
  const movieRating = movieRatingRoundUp(voteAverage);
  const allGenres = useSelector((state) => state.movies.genres);
  const filmGenres = getFilmGenresById(allGenres, genres)?.join(", ");
  const prevPath = pathname === "/" ? "movies" : "rated";
  const movieVoteCount = getVoteCount(voteCount)

  const save = () => {
    setIsSave(true);
    close();
  };

  useEffect(() => {
    let value;
    value = JSON.parse(localStorage.getItem(`${id}`));
    setSavedMovieEstimate(value?.average);
  }, [savedMovieEstimate]);

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <div className=" relative cursor-pointer bg-[white] p-[24px] flex flex-row sm:h-[218px] min-h-[400px] h-auto sm:min-h-0  w-full rounded-[12px] justify-between">
      <div
        className="absolute top-[24px] right-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex  flex-row justify-center items-center cursor-pointer "
          onClick={open}
        >
          <StarIcon color={savedMovieEstimate ? "#9854F6" : "#D5D6DC"} />
          {savedMovieEstimate > 0 && (
            <p className="pl-[4px] font-[16px] leading-[20px] font-semibold">
              {savedMovieEstimate}
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => router.push(`${prevPath}/about/${id}`)}
        className=" flex sm:flex-row w-full flex-col sm:items-start items-center"
      >
        {img ? (
          <div className=" relative h-[170px] w-[119px] mr-[16px] flex-shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${img}`}
              fill
              alt="Picture"
            />
          </div>
        ) : (
          <NoPoster
            title="No Poster"
            classString={"h-[170px] w-[119px] flex-shrink-0"}
          />
        )}

        <div className="flex flex-col h-full justify-between w-full">
          <div className="flex flex-col gap-[8px] ">
            <div className="flex flex-row justify-between items-center mt-[16px] sm:mt-0">
              <p className="text-textColor font-semibold text-[26px] sm:text-[16px] line-clamp-2 md:w-[70%] w-full mr-[10px]">
                {title}
              </p>
            </div>

            <p className="text-paleTextColor font-[16px] leading-[20px]">
              {releaseYear}
            </p>

            <div className="flex flex-row items-center">
              <StarIcon />
              <p className="pl-[4px] font-[16px] leading-[20px] font-semibold">
                {movieRating}
              </p>
              <p className="pl-[8px] font-[16px] line-clamp-1 ">{movieVoteCount}</p>
            </div>
          </div>

          <div className="flex flex-row mt-[16px]">
            <p className="text-paleTextColor font-[16px] leading-[20px] pr-[8px]">
              Genres
            </p>
            <p className="font-[16px] leading-[20px] line-clamp-1">
              {filmGenres}
            </p>
          </div>
        </div>
      </div>

      <Modal
        centered
        size={380}
        opened={opened}
        onClose={close}
        title="Your rating"
      >
        <p className="my-[16px] font-bold">{title}</p>
        <div className="flex flex-row gap-[7.56px] mb-[16px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((e) => (
            <MovieRatingModal
              getStorageData={getStorageData}
              id={id}
              movie={movie}
              savedMovieEstimate={savedMovieEstimate}
              setSavedMovieEstimate={setSavedMovieEstimate}
              key={e}
              starId={e}
              movieEstimate={movieEstimate}
              setMovieEstimate={setMovieEstimate}
              isSave={isSave}
              setIsSave={setIsSave}
            />
          ))}
        </div>
        <Button onClick={save} variant="filled" color="violet" size="md">
          Save
        </Button>
      </Modal>
    </div>
  );
}
