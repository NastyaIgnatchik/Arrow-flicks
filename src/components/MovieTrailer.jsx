"use client";
import "../styles/modal.css";
import NoPoster from "@/components/banners/NoPoster";
import dynamic from "next/dynamic";

export function MovieTrailer({ overview, productionCompanies, video }) {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  return (
    <div className="bg-[white] mt-[20px] p-[24px] items-center lg:items-start  flex flex-col h-[729px] w-full rounded-[12px] ">
      <p className="leading-[20px] font-bold mb-[16px]">Trailer</p>
      <div className="w-full md:w-[80%] lg:w-[60%]">
        {video ? (
          <div className="h-[281px] w-full ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video}`}
              width="100%"
              height="100%"
              playing
              muted={true}
            />
          </div>
        ) : (
          <NoPoster
            title="No Video"
            classString={"h-[281px] w-full rounded-[9px]"}
          />
        )}
      </div>

      <hr className="w-full my-[20px]" />

      <p className="leading-[20px] font-bold mb-[16px] ">Description</p>
      <p className="font-[16px] leading-[20px] h-auto">{overview || 'not mentioned'}</p>
      <hr className="w-full my-[20px]" />
      <p className="leading-[20px] font-bold mb-[16px]">Production</p>

      <div className="flex flex-col pb-[60px] gap-[12px]">
        {productionCompanies?.length ? productionCompanies?.map(({ logo_path, name }) => {
          return (
            <div
              key={name}
              className="flex flex-col sm:flex-row h-auto sm:h-[40px] items-center gap-[9px]"
            >
                {logo_path && <img
                    className="w-[40px]"
                    src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                />}
              <p className="leading-[20px] font-bold text-center">{name}</p>
            </div>
          );
        }):'not mentioned'}
      </div>
    </div>
  );
}
