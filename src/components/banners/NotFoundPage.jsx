"use client";
import NotFoundPageIcon from "@/components/icons/NotFoundPageIcon";
import { Button } from "@mantine/core";
import Link from "next/link";


export default function NotFoundPage() {

    return (
        <div className=" w-[80%] m-auto flex flex-col justify-center items-center gap-[16px]">
            <NotFoundPageIcon />
            <p className=" font-semibold inline leading-[25px] w-full truncate text-center">
                We can&apos;t find the page you are looking for
            </p>
            <Link href={"/"}>
                <Button
                    radius={8}
                    fullWidth
                    variant="filled"
                    color={"#9854F6"}
                    size="sm"
                >
                    Go Home
                </Button>
            </Link>
        </div>
    );
}
