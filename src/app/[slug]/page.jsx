import RatedMoviesComponent from "@/components/RatedMoviesComponent";

export async function generateStaticParams() {
  return [{ slug: "rated" }, { slug: "movies" }];
}

export default async function RatedMoviesPage() {
  return (
    <div className=" mt-[40px] sm:mt-0 absolute flex flex-col pb-[82px] right-0 top-0 sm:w-[80%] px-[20px] w-full  lg:px-[90px]">
      <RatedMoviesComponent />
    </div>
  );
}

export const dynamicParams = false;
