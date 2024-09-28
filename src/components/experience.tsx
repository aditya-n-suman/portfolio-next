import { EXPERIENCES } from "@/utils/constants";
import ExperienceCard from "./atoms/experienceCard";
import NumberedHeading from "./atoms/numberedHeading";

const Experience = () => {
	return (
		<section id="experience" className="lg:px-12 md:py-25 w-full mx-auto">
			<NumberedHeading title="My Professional Journey" width="w-full" />
			<div className="text-lg md:text-xl">
				<p className="mb-8">
					I&#39;ve been working with{" "}
					<strong>
						Publicis Sapient - leading Digital Business Transformation Partner
					</strong>{" "}
					since last 3 years, where I got to work with different client and on
					different projects of Finance Industry.
				</p>
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
