"use client";
import React from "react";
import classes from "../../styles/navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationMenuLinks() {
  const pathname = usePathname();

  const moviesLinkStyles =
    pathname === "/" || pathname.includes("/movies") ? `${classes.active}` : "";

  const ratedMoviesLinkStyles = pathname.includes("/rated")
    ? `${classes.active}`
    : "";

  return (
    <>
      <Link className={`${classes.link} ${moviesLinkStyles}`} href="/">
        Movies
      </Link>

      <Link
        className={`${classes.link} ${ratedMoviesLinkStyles}`}
        href="/rated"
      >
        Rated movies
      </Link>
    </>
  );
}
