import { PROJECTS } from "@/utils/constants";
import NumberedHeading from "./atoms/numberedHeading";
import ProjectCard from "./atoms/projectCard";

const Projects = () => {
	return (
		<section id="work" className="py-25">
			<NumberedHeading title="Some Things I've Built" width="w-full" />
			<div className="text-lg md:text-xl grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</section>
	);
};
export default Projects;
