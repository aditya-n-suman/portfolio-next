export const DEFAULT_EMAIL =
	"mailto:adityanathsuman15@gmail.com?subject=Reaching%20out%20for%20a%20project%20idea&body=%0A%20%20Hi,%0A%20%20%20%20I%20read%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you.%0A";

export const NAV_ITEMS = ["About", "Experience", "Work", "Open Source", "Writing", "Contact"];

export const SOCIAL_MEDIA = [
	{ name: "github", link: "https://github.com/aditya-n-suman" },
	{ name: "linkedin", link: "https://www.linkedin.com/in/aditya-nath-suman/" },
];

export const MY_TECHS = [
	"Javascript (ES6+)",
	"TypeScript",
	"React JS",
	"Next.js",
	"NodeJS",
	"Express",
	"NestJS",
	"Webpack",
	"Module Federation",
	"GraphQL",
];

export const STATS = [
	{ value: "180K → ~0", label: "INP URLs" },
	{ value: "30m → 3m", label: "Build & Deploy" },
	{ value: "10s → <3s", label: "Banking Load Time" },
	{ value: "5+ Years", label: "Prod Experience" },
];

export const CAPABILITIES = [
	{
		title: "Frontend Architecture",
		description: "Designing modular, scalable frontend systems using micro-frontends (Webpack Module Federation), monorepo structures (Turborepo), and compatibility layers.",
	},
	{
		title: "Performance Engineering",
		description: "Optimizing Google Core Web Vitals (INP, LCP, CLS) from worst-case scores to green metrics, including Webpack build speed-ups and critical CSS pipelines.",
	},
	{
		title: "React & TypeScript",
		description: "Architecting large-scale applications with strict type safety, modular hooks, state-management frameworks, and unified design patterns.",
	},
	{
		title: "SSR & Web Performance",
		description: "Developing robust server-side rendering pipelines, partial hydration, progressive loading, and fine-grained bundler code splitting.",
	},
	{
		title: "DX & Build Tooling",
		description: "Optimizing developer experience by reducing build/deployment bottlenecks, creating custom CLI scripts, and introducing telemetry systems.",
	},
	{
		title: "AI-Assisted Tooling",
		description: "Engineering developer tools (like Knowledge Ingestor) that parse, digest, and bundle codebase files into structured, token-optimized context.",
	},
];

export const EXPERIENCES = [
	{
		title: "Lead Frontend Engineer",
		company: "Info Edge (Shiksha)",
		from: "May 2024",
		to: "Present",
		pointers: [
			"Reduced Google's INP 'Needs Improvement' URLs from ~180K to near zero across core web portals by optimizing event handlers and main thread tasks.",
			"Redesigned the Webpack build caching infrastructure, slashing production build and deployment time from ~30 minutes to ~3 minutes.",
			"Led Critical CSS generation pipeline redesign for above-the-fold content, resulting in significant Largest Contentful Paint (LCP) speed-ups.",
			"Designed and deployed custom Core Web Vitals real-user telemetry to establish real-time observability of frontend performance across millions of sessions.",
			"Designed and built a reusable compatibility abstraction layer simplifying legacy React framework migration paths.",
		],
		skills: ["React JS", "NextJS", "TypeScript", "Webpack", "Core Web Vitals", "SSR", "Hydration"],
	},
	{
		title: "Associate SDE-2",
		company: "Publicis Sapient",
		from: "August 2022",
		to: "May 2024",
		pointers: [
			"Optimized retail banking platforms, driving initial page load time down from ~10s to under 3s.",
			"Drove TypeScript migration across micro-frontends and stitching layers, improving static analysis and reducing deployment runtime errors.",
			"Designed and integrated complex GraphQL API layers with Apollo client cache strategies for optimal frontend data orchestration.",
		],
		skills: ["React JS", "TypeScript", "GraphQL", "Zustand", "Webpack", "Turborepo", "SASS"],
	},
	{
		title: "Associate SDE-1",
		company: "Publicis Sapient",
		from: "May 2021",
		to: "August 2022",
		pointers: [
			"Created CG Private Client Services fee proforma web application from scratch using CRA framework, React, TypeScript, and React PDF.",
			"Worked as the sole UI developer responsible for the full-lifecycle, translating client requirements to production deliverables.",
		],
		skills: ["React JS", "TypeScript", "react-pdf", "bootstrap", "react-bootstrap"],
	},
];

export interface Project {
	name: string;
	problem: string;
	solution: string;
	challenges: string;
	architecture: string;
	technologies: string[];
	github: string;
	link?: string;
}

export const PROJECTS: Project[] = [
	{
		name: "Critical CSS Generator",
		problem: "First-fold rendering in high-traffic platforms was blocked by large CSS stylesheets, negatively affecting Core Web Vitals (FCP and LCP).",
		solution: "Developed an automated toolchain that extracts critical path CSS for above-the-fold components and dynamically inlines it during build-time / SSR.",
		challenges: "Safely resolving media queries, handling dynamic styling patterns, and keeping the inlined styles below the critical 14KB initial TCP payload.",
		architecture: "Built with Node.js parser integrations, PostCSS AST manipulation, and a Next.js rendering integration module.",
		technologies: ["NodeJS", "PostCSS", "Next.js", "AST", "SSR"],
		github: "https://github.com/aditya-n-suman/critical-css",
	},
	{
		name: "Dynamic Module Federation Stitching",
		problem: "Micro-frontends were bound to hardcoded build-time URLs, preventing dynamic environments (staging/production) configurations without full rebuilds.",
		solution: "Designed a dynamic script-loading system that resolves micro-frontend entry points from runtime configuration registries.",
		challenges: "Aligning shared React contexts and singleton dependency trees while ensuring graceful fallback components when remotes fail.",
		architecture: "Stitching layer using Webpack Module Federation, custom script injection hooks, and fallback error boundary structures.",
		technologies: ["Webpack", "Module Federation", "NextJS", "TypeScript"],
		github: "https://github.com/abc-utils/dynamic-module-federation",
	},
	{
		name: "Knowledge Ingestor CLI",
		problem: "Standard project directories exceed LLM prompt context window limits or lead to massive token waste due to irrelevant files.",
		solution: "Created a command-line tool that parses codebase file structures, compiles files into a compact XML/markdown digest, and generates token-optimized schemas.",
		challenges: "Excluding binary data, minimizing noise from dependency assets, and building efficient AST representations of codebase modules.",
		architecture: "CLI utility leveraging recursive file system scanners, AST-based import graph generators, and customizable filter configuration schemas.",
		technologies: ["Node.js", "CLI", "AST Parsing", "TypeScript", "AI Tooling"],
		github: "https://github.com/aditya-n-suman/knowledge-ingestor",
	},
	{
		name: "Universal React Abstraction Layer",
		problem: "Direct dependencies on environment-specific APIs made migrating applications from legacy setups to modern Next.js/Vite systems extremely complex.",
		solution: "Designed a custom adapter library that provides abstract routing, data fetching, and context wrappers across rendering platforms.",
		challenges: "Bridging asynchronous server-side routing paradigms with static SPA architectures without introducing bundle size overhead.",
		architecture: "Adapter pattern orchestration, platform-specific wrapper builds, and a unified context initialization API.",
		technologies: ["React", "TypeScript", "Adapter Pattern", "SSR", "Vite"],
		github: "https://github.com/aditya-n-suman/universal-react-v2",
	},
	{
		name: "Weather Forecasting Dashboard",
		problem: "Frequent third-party API polling caused client-side throttling, while poor offline availability disrupted forecasts for users.",
		solution: "Developed a full-stack weather portal utilizing a Backend-for-Frontend (BFF) layout and debounced client forecast querying.",
		challenges: "Implementing resilient server-side caching of weather responses, and architecting strategy patterns to gracefully toggle between providers.",
		architecture: "React frontend calling a NestJS BFF gateway, featuring Strategy pattern integrations for API fallbacks and local storage offline cache.",
		technologies: ["ReactJS", "NestJS", "Strategy Pattern", "BFF", "OpenWeather API"],
		github: "https://github.com/aditya-n-suman/weather-prediction-be",
	},
	{
		name: "Mini Search Engine & Crawler",
		problem: "Indexing complex websites offline generated extensive memory usage and poor ranking results for mirrored pages.",
		solution: "Created a multi-threaded web crawler and indexer that processes page links and scores authority using the PageRank algorithm.",
		challenges: "Handling recursive circular references during site crawling and optimizing sparse matrix calculations for rank scoring.",
		architecture: "Directed graph crawlers feeding a mathematical ranking processor with automated local HTML disk serializations.",
		technologies: ["Python", "PageRank Algorithm", "Web Crawling", "Graph Theory"],
		github: "https://github.com/aditya-n-suman/mini-search-engine",
	},
];

export const ARTICLES = [
	{
		title: "Reducing INP (Interaction to Next Paint) to Zero at Scale",
		date: "June 2025",
		readTime: "8 min read",
		description: "A deep dive into diagnosing, measuring, and eliminating interaction latency across 180K+ dynamic URLs.",
	},
	{
		title: "Critical CSS Generation for Above-the-Fold Rendering",
		date: "April 2025",
		readTime: "6 min read",
		description: "How we automated critical path CSS extraction to achieve instant first-fold render times in Next.js SSR.",
	},
	{
		title: "Next.js SSR and Partial Hydration Architectures",
		date: "February 2025",
		readTime: "10 min read",
		description: "Exploring advanced rendering pipelines, custom telemetry, and strategies for minimizing hydration blocks.",
	},
	{
		title: "Module Federation in Production: Challenges and Solutions",
		date: "November 2024",
		readTime: "7 min read",
		description: "Practical lessons from stitching multiple micro-frontends dynamically at run-time in high-traffic platforms.",
	},
	{
		title: "Webpack Optimization: Reducing Build Times by 90%",
		date: "September 2024",
		readTime: "5 min read",
		description: "A guide on Webpack cache tuning, loader optimizations, and resolving performance bottlenecks in large codebases.",
	},
	{
		title: "AI-Assisted Frontend Development and Context Engineering",
		date: "July 2024",
		readTime: "6 min read",
		description: "Using structural codebase ingestors to maximize accuracy and effectiveness of LLM development assistants.",
	},
];
