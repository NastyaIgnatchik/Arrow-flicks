import { Navbar } from "@/components/navigation/Navbar";
import { Suspense } from "react";

export default function PageLayout({ children }) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}
