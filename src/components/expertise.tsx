import NumberedHeading from "./atoms/numberedHeading";
import { CAPABILITIES } from "@/utils/constants";

const Expertise = () => {
	return (
		<section id="expertise" className="py-20 w-full">
			<NumberedHeading title="Areas of Expertise" width="w-full" />
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
				{CAPABILITIES.map((cap, idx) => (
					<div
						key={idx}
						className="rounded-md bg-navy-light p-6 shadow-lg flex flex-col gap-4">
						<div className="flex items-center justify-between">
							<span className="font-mono text-green text-xs">
								0{idx + 1}.
							</span>
						</div>
						<div>
							<h3 className="text-white font-semibold text-lg mb-2">
								{cap.title}
							</h3>
							<p className="text-slate text-sm leading-relaxed">
								{cap.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Expertise;
