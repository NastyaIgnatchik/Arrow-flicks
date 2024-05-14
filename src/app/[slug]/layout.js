import { Navbar } from "@/components/navigation/Navbar";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}

