import type { Metadata } from "next";
import "@/globals.css";
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
				<div className="px-8 sm:px-10 md:px-36 lg:px-60 w-full">{children}</div>
			</body>
		</html>
	);
}
