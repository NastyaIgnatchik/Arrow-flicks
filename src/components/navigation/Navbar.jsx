"use client";
import React from "react";
import { Group } from "@mantine/core";
import classes from "../../styles/navigation.module.css";
import ArrowFlicksIcon from "@/components/icons/ArrowFlicksIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { HeaderMenu } from "@/components/navigation/HeaderMenu";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export function Navbar() {

   const pathname = usePathname();

  return (
    <>
      <HeaderMenu />
      <nav
        className={`${classes.navbar} hidden sm:flex bg-navbarColor bottom-0`}
      >
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <div className=" w-[100%] gap-[12px] flex flex-row justify-start items-center ">
              <ArrowFlicksIcon />
              <h1 className={`${poppins.className} truncate text-textColor`}>
                ArrowFlicks
              </h1>
            </div>
          </Group>
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
      </nav>
    </>
  );
}
