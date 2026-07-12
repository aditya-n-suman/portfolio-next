import { EXPERIENCES } from "@/utils/constants";
import ExperienceCard from "./atoms/experienceCard";
import NumberedHeading from "./atoms/numberedHeading";

const Experience = () => {
	return (
		<section id="experience" className="lg:px-12 md:py-25 w-full mx-auto">
			<NumberedHeading title="My Professional Journey" width="w-full" />
			<div className="text-lg md:text-xl">
				<div className="flex flex-col gap-8">
					{EXPERIENCES.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
