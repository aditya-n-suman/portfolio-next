import { STATS } from "@/utils/constants";

const Highlights = () => {
	return (
		<section className="py-12 border-y border-lightest-navy w-full relative">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
				{STATS.map((stat, idx) => (
					<div
						key={idx}
						className="rounded-md bg-navy-light p-6 md:p-8 flex flex-col justify-center items-center shadow-lg">
						<span className="text-2xl md:text-3xl font-extrabold text-green font-mono">
							{stat.value}
						</span>
						<span className="mt-2 text-xxs font-mono uppercase tracking-wider text-slate text-center">
							{stat.label}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Highlights;
