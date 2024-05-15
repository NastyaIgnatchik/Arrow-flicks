"use client";
import { MovieLoader } from "@/components/MovieLoader";
import { useEffect, useState } from "react";

export default function ErrorLoaderBoundary({ children, data, banner }) {
  const [isLoading, setIsLoading] = useState(true);

  const errorStringMessage = (value) => (
    <div className=" pt-[55px] w-full flex justify-center items-center">
      <h1>{value}</h1>
    </div>
  );

  const renderError = data?.message
    ? errorStringMessage(data?.message)
    : banner
    ? banner
    : errorStringMessage("something wrong");

  const loaderOrError = isLoading ? <MovieLoader /> : renderError;

  const error = data?.message ? renderError : null;

  const loader =
    !data ||
    (!Array.isArray(data) && !Object.keys(data).length) ||
    (Array.isArray(data) && !data?.length)
      ? loaderOrError
      : null;

  const setLoadingTimeout = () => {
    if (!data) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else setLoadingTimeout();
  }, [data]);

  return <>{loader || error || children}</>;
}
