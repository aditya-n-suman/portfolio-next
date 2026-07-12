import { DEFAULT_EMAIL } from "@/utils/constants";

const Home = () => {
	return (
		<section
			id="content"
			className="flex flex-col justify-center py-48 min-h-screen">
			<h1 className="text-green text-md font-mono mb-6 md:mb-8">
				Hi, my name is
			</h1>
			<div className="mb-4">
				<h2 className="big-heading font-extrabold mb-1 text-slate-lightest">
					Aditya Nath Suman.
				</h2>
				<h3 className="big-heading font-extrabold mt-3">
					Building scalable frontend systems for millions of users.
				</h3>
			</div>
			<p className="text-lg md:text-xl max-w-lg mb-11 leading-tight">
				Lead Frontend Engineer specializing in frontend architecture, performance engineering, SSR, Core Web Vitals, and AI-assisted developer tooling.
			</p>
			<div className="flex flex-wrap gap-4 items-center">
				<a
					href="#work"
					className="font-mono text-xs w-fit text-green border-green border-1px rounded-1.5 px-8 py-4 fz-transition hover:fz-shadow hover:fz-translate">
					View Projects
				</a>
				<a
					href="/Resume_Aditya_nath_suman.pdf"
					download
					className="font-mono text-xs w-fit text-green border-green border-1px rounded-1.5 px-8 py-4 fz-transition hover:fz-shadow hover:fz-translate">
					Resume
				</a>
			</div>
		</section>
	);
};

export default Home;
