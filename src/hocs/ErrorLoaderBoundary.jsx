import { MovieLoader } from "@/components/MovieLoader";

export default function ErrorLoaderBoundary({ children, data }) {
  const error =
    data instanceof Error || data?.message ? (
      <div className=" h-screen w-full flex justify-center items-center">
        <h1>{data?.message}</h1>
      </div>
    ) : null;

  const loader = !data ? <MovieLoader /> : null;

  return <>{loader || error || children}</>;
}
