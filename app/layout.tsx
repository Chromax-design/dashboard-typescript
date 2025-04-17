import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import UnsplashProvider from "@/components/UnsplashProvider";
import { EdgeStoreProvider } from "@/lib/edgeStore";

const josefinSans = Josefin_Sans({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased`}
      >
        <EdgeStoreProvider>
          <UnsplashProvider>
            {children}
          </UnsplashProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
