import type { Metadata } from "next";
import "@/globals.css";
import Header from "@/components/header";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";

export const metadata: Metadata = {
	title: "Aditya Nath Suman — Frontend Architect & Staff Engineer",
	description: "Lead Frontend Engineer and Architect specializing in high-scale frontend systems, performance engineering (INP, LCP optimization), SSR architectures, and custom developer tooling.",
	keywords: [
		"Frontend Architect",
		"Staff Frontend Engineer",
		"Performance Engineer",
		"Core Web Vitals",
		"Next.js",
		"React",
		"TypeScript",
		"Module Federation",
		"Webpack Optimization",
		"Aditya Nath Suman",
	],
	authors: [{ name: "Aditya Nath Suman" }],
	creator: "Aditya Nath Suman",
	openGraph: {
		title: "Aditya Nath Suman — Frontend Architect",
		description: "Building scalable frontend systems for millions of users. Specialized in performance engineering, SSR, and monorepos.",
		url: "https://aditya-nath-suman-portfolio.vercel.app/",
		siteName: "Aditya Nath Suman Portfolio",
		type: "profile",
		firstName: "Aditya Nath",
		lastName: "Suman",
		username: "aditya-n-suman",
	},
	twitter: {
		card: "summary_large_image",
		title: "Aditya Nath Suman — Frontend Architect",
		description: "Building scalable frontend systems for millions of users. Specialized in performance engineering, SSR, and monorepos.",
		creator: "@aditya_n_suman",
	},
	alternates: {
		canonical: "https://aditya-nath-suman-portfolio.vercel.app/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		"mainEntity": {
			"@type": "Person",
			"name": "Aditya Nath Suman",
			"jobTitle": "Lead Frontend Engineer",
			"worksFor": {
				"@type": "Organization",
				"name": "Info Edge (Shiksha)",
			},
			"description": "Lead Frontend Engineer specializing in frontend architecture, performance engineering, SSR, Core Web Vitals, and developer tooling.",
			"sameAs": [
				"https://github.com/aditya-n-suman",
				"https://www.linkedin.com/in/aditya-nath-suman/",
			],
		},
	};

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="">
				<Header />
				<LeftSidebar />
				<RightSidebar />
				<div className="px-8 sm:px-10 md:px-36 lg:px-60 w-full">{children}</div>
			</body>
		</html>
	);
}
