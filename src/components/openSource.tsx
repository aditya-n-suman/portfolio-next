import NumberedHeading from "./atoms/numberedHeading";
import IconGitHub from "@/assets/icons/github";

const OPEN_SOURCE_ITEMS = [
	{
		name: "Critical CSS Generator",
		why: "To automate critical style extraction in large, server-rendered React applications, eliminating render-blocking visual assets.",
		problem: "Solves Largest Contentful Paint (LCP) delays and Layout Shifts by extracting above-the-fold rules and dynamically inlining them.",
		decisions: "Leveraged PostCSS AST parsing for analysis and designed Next.js rendering middleware to keep injection runtime at zero overhead.",
		github: "https://github.com/aditya-n-suman/critical-css-generator",
	},
	{
		name: "Dynamic Module Federation",
		why: "To establish runtime-configurable micro-frontends, enabling independent feature releases across multi-tenant environments.",
		problem: "Decouples micro-frontend applications from hardcoded remote entry points, resolving environment routes at runtime.",
		decisions: "Designed custom promise-based script loaders with fallback error boundaries to mock missing chunks if a remote goes offline.",
		github: "https://github.com/aditya-n-suman/dynamic-module-federation",
	},
	{
		name: "Knowledge Ingestor CLI",
		why: "To bridge context gaps for AI code agents, providing them with structured codebase representations.",
		problem: "Prevents LLM token waste by recursive parsing, pruning assets, and outputting compact codebase digests.",
		decisions: "Created AST-based scanner to map imports, resolving dependency graphs and ignoring compiled files dynamically.",
		github: "https://github.com/aditya-n-suman/knowledge-ingestor",
	},
	{
		name: "Universal React Abstraction",
		why: "To decouple business code from specific bundler ecosystems (Next.js vs. Vite/CRA) during migration phases.",
		problem: "Reduces rewrite overhead when migrating legacy portals by establishing standard wrappers for state, routing, and fetch APIs.",
		decisions: "Used Adapter pattern to unify SSR data hydration protocols and static routing layers behind a singular framework API.",
		github: "https://github.com/aditya-n-suman/universal-react",
	},
];

const OpenSource = () => {
	return (
		<section id="open source" className="py-20 w-full">
			<NumberedHeading title="Open Source Contributions" width="w-full" />
			
			<div className="flex flex-col gap-6 mt-10 max-w-4xl">
				{OPEN_SOURCE_ITEMS.map((item, idx) => (
					<div
						key={idx}
						className="bg-navy-light p-6 md:p-8 rounded-md shadow-lg flex flex-col md:flex-row gap-6 justify-between items-start">
						<div className="flex-1 flex flex-col gap-4">
							<div className="flex justify-between items-center">
								<h3 className="text-xl font-bold text-white tracking-tight">
									{item.name}
								</h3>
								<a
									href={item.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-slate hover:text-green md:hidden"
									aria-label={`View ${item.name} repository`}>
									<IconGitHub height="20" />
								</a>
							</div>
							
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate mt-2">
								<div>
									<strong className="text-slate-lightest block mb-1 text-xs font-mono">Why it exists</strong>
									<p className="leading-relaxed">{item.why}</p>
								</div>
								<div>
									<strong className="text-slate-lightest block mb-1 text-xs font-mono">Problem Solved</strong>
									<p className="leading-relaxed">{item.problem}</p>
								</div>
								<div>
									<strong className="text-slate-lightest block mb-1 text-xs font-mono">Design Decisions</strong>
									<p className="leading-relaxed">{item.decisions}</p>
								</div>
							</div>
						</div>
						
						<a
							href={item.github}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden md:flex p-3 bg-navy border border-lightest-navy rounded text-slate hover:text-green transition duration-200"
							aria-label={`View ${item.name} repository`}>
							<IconGitHub height="20" />
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default OpenSource;
