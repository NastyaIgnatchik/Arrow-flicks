import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import React from "react";
import StoreProvider from "@/app/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arrow flicks",
  description: "Movies service",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`bg-bodyColor ${inter.className}`}>
          <MantineProvider>{children}</MantineProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
