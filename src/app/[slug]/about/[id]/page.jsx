import { MovieDetails } from "@/components/MovieDetails";
import { MovieTrailer } from "@/components/MovieTrailer";
import { getMovie } from "@/helpers/GetMovie";
import { getDataAboutMovieToProps } from "@/helpers/functions/Functions";
import ErrorLoaderBoundary from "@/hocs/ErrorLoaderBoundary";
import LinkRouterBack from "@/components/LinkRouterBack";

export default async function About({ params }) {
  const movie = await getMovie(params?.id);

  const video = movie?.videos?.results?.[0]?.key;

  const dataAboutMovie = getDataAboutMovieToProps(movie);

  return (
    <div className=" mt-[40px] sm:mt-0 absolute flex flex-col pb-[82px] right-0 top-0 sm:w-[80%] px-[20px] w-full  lg:px-[90px]">
      <ErrorLoaderBoundary data={movie}>
        <>
          <LinkRouterBack title={dataAboutMovie?.title} />
          <MovieDetails dataAboutMovie={dataAboutMovie} />
          <MovieTrailer
            video={video}
            productionCompanies={dataAboutMovie?.productionCompanies}
            overview={dataAboutMovie?.overview}
          />
        </>
      </ErrorLoaderBoundary>
    </div>
  );
}

