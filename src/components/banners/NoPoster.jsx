import NoPosterIcon from "@/components/icons/NoPosterIcon";

export default function NoPoster({classString,title}) {
  return (
    <div className={`${classString} bg-noPosterColor relative flex justify-center items-center mr-[16px]`}>
      <div className="z-10 flex flex-col justify-center items-center">
        <NoPosterIcon />
        <p className="text-noPosterTextColor text-[12px]">{title}</p>
      </div>
    </div>
  );
}
