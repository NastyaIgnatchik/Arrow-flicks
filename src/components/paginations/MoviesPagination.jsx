"use client";
import { useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function MoviesPagination({ nextPageData }) {
  const [activePage, setPage] = useState(1);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${activePage}`);
    replace(`${pathname}?${params.toString()}`);
  }, [activePage]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    setPage(1);
    replace(`${pathname}?${params.toString()}`);
  }, [
    searchParams.get("sort_by"),
    searchParams.get("vote_average.lte"),
    searchParams.get("vote_average.gte"),
    searchParams.get("primary_release_year"),
    searchParams.get("with_genres"),
  ]);

  return (
    <div className="bg-bodyColor ml-[-25%] h-[105px] pr-[20px]  lg:pr-[90px] flex justify-end">
      <Pagination
        color="violet"
        total={nextPageData?.length ? activePage + 1 : activePage}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </div>
  );
}
