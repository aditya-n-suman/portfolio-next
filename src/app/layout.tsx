import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Adity Nath Suman",
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

        <div className="px-36">{children}</div>
      </body>
    </html>
  );
}
