import React from "react";
import { Button } from "@mantine/core";
import Link from "next/link";
import NoRatedIcon from "@/components/icons/NoRatedIcon";

const NotRated = () => {
  return (
    <div className="flex flex-col w-full h-screen mb-[-82px]  justify-center items-center gap-[16px]">
      <NoRatedIcon />
      <p className="font-semibold leading-[25px]">
        You haven&apos;t rated any films yet
      </p>
      <Link href={"/"}>
        <Button
          radius={8}
          fullWidth
          variant="filled"
          color={"#9854F6"}
          ssize="sm"
        >
          Find movies
        </Button>
      </Link>
    </div>
  );
};

export default NotRated;
