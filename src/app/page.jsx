import { Suspense } from "react";
import { getMovies } from "@/helpers/GetMovies";
import ErrorLoaderBoundary from "@/hocs/ErrorLoaderBoundary";
import { MovieCard } from "@/components/MovieCard";
import Filters from "@/components/Filters";
import { MoviesPagination } from "@/components/paginations/MoviesPagination";
import NotFound from "@/components/banners/NotFound";
import PageLayout from "@/app/pageLayout";

export default async function Home({ searchParams }) {

  const currentPage = Number(searchParams?.page) || 1;
  const genre = searchParams?.with_genres;
  const releaseYear = searchParams?.primary_release_year;
  const voteAverageFrom = searchParams?.["vote_average.lte"]?.toString();
  const voteAverageTo = searchParams?.["vote_average.gte"]?.toString();
  const sortBy = searchParams?.sort_by;

  const nextPageData = await getMovies(
    currentPage + 1,
    genre,
    releaseYear,
    voteAverageFrom,
    voteAverageTo,
    sortBy
  );
  const data = await getMovies(
    currentPage,
    genre,
    releaseYear,
    voteAverageFrom,
    voteAverageTo,
    sortBy
  );

  return (
    <PageLayout>
      <div className=" mt-[40px] sm:mt-0 absolute flex flex-col pb-[82px] right-0 top-0 sm:w-[80%] px-[20px] w-full  lg:px-[90px]">
        <ErrorLoaderBoundary data={data}>
          <>
            <p className="text-[32px] leading-[45px] font-bold pt-[41.5px]">
              Movies
            </p>
            <Suspense>
              <Filters />
            </Suspense>
            {data?.length ? (
              <>
                <div className=" relative grid lg:grid-cols-2 grid-cols-1  justify-items-stretch gap-[16px] my-[24px]">
                  {data?.map((e) => {
                    return <MovieCard key={e?.id} movie={e} />;
                  })}
                </div>
                <div className="w-full absolute bottom-0 left-0 ">
                  <Suspense>
                    <MoviesPagination nextPageData={nextPageData} />
                  </Suspense>
                </div>
              </>
            ) : (
              <NotFound />
            )}
          </>
        </ErrorLoaderBoundary>
      </div>
    </PageLayout>
  );
}
