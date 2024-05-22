"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LinkRouterBack({ title }) {
  const router = useRouter();
  const pathname = usePathname();

  const path = pathname.split("/")[1];

  const pathTitle = path?.charAt(0)?.toUpperCase() + path.slice(1);

  const pathBack = pathTitle === 'Movies' ? '/' : '/rated'

  return (
    <div className="pt-[40px] mb-[20px] flex flex-row gap-[10px]">
      <p
        onClick={() => router.push(`${pathBack}`)}
        className="text-[16px] leading-[20px] cursor-pointer  text-textColor"
      >
        {pathTitle}
      </p>
      <p className="text-[16px] leading-[20px] "> / </p>
      <p className="text-[16px] leading-[20px]  text-textColor">{title}</p>
    </div>
  );
}
