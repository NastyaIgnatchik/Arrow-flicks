"use client";
import React from "react";
import classes from "../../styles/navigation.module.css";
import ArrowFlicksIcon from "@/components/icons/ArrowFlicksIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderMenu() {
  const pathname = usePathname();

  return (
    <div
      className={`px-[12px] fixed flex flex-row justify-between items-center top-0 right-0 left-0 h-[60px] bg-navbarColor z-[30] sm:hidden`}
    >
      <div className=" w-[10%] gap-[12px] flex flex-row justify-start items-center ">
        <ArrowFlicksIcon />
      </div>
      <div className="flex flex-row w-[90%] h-[30px] justify-end items-center ">
        <Link
            className={`${classes.link} ${
                pathname === "/" || pathname.includes('/movies') ? `${classes.active}` : ""
            }`}
            href="/"
        >
          Movies
        </Link>

        <Link
            className={`${classes.link} ${
                pathname.includes("/rated") ? `${classes.active}` : ""
            }`}
            href="/rated"
        >
          Rated movies
        </Link>
      </div>
    </div>
  );
}
