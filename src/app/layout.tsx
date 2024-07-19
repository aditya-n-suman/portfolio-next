import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export const metadata: Metadata = {
  title: "Aditya Nath Suman",
  description: "one of the best frontend developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <LeftSidebar />
        <RightSidebar />
        <div className="px-36">{children}</div>
      </body>
    </html>
  );
}
