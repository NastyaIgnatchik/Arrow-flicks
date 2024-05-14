import NotFoundPage from "@/components/banners/NotFoundPage";
import { Suspense } from "react";
import ArrowFlicksIcon from "@/components/icons/ArrowFlicksIcon";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function NotFound() {
  return (
    <div className="relative h-screen flex justify-start items-center">
      <div className=" fixed top-[16px]  left-[16px] w-[100%] gap-[12px] flex flex-row justify-start items-center ">
        <ArrowFlicksIcon />
        <h1
          className={`${poppins.className}  hidden sm:inline truncate text-textColor`}
        >
          ArrowFlicks
        </h1>
      </div>
      <Suspense>
        <NotFoundPage />
      </Suspense>
    </div>
  );
}
