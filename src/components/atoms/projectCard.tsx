import IconExternal from "@/assets/icons/external";
import IconFolder from "@/assets/icons/folder";
import IconGitHub from "@/assets/icons/github";

interface ProjectCardProps {
	name: string;
	link: string;
	description: string;
	keywords: string[];
	github: string;
}

const ProjectCard = ({
	name,
	link,
	description,
	keywords,
	github,
}: ProjectCardProps) => {
	return (
		<div className="p-6 relative shadow-lg bg-navy-light rounded-md text-slate-light hover:-translate-y-3 fz-transition">
			<div className="flex items-center text-green justify-between mb-8">
				<IconFolder height="52" />
				<div className="flex gap-3 items-center text-slate-light">
					<a href={github} className="z-2" target="_blank">
						<IconGitHub height="20" />
					</a>
					<IconExternal height="24" />
				</div>
			</div>
			<h3 className="text-white text-xxl font-extrabold">
				<a
					href={link}
					rel="noopener noreferrer"
					target="_blank"
					className="project-link">
					{name}
				</a>
			</h3>
			<p className="py-2 mb-1">{description}</p>
			<div className="font-mono text-slate-light text-xxs md:text-xs flex flex-wrap gap-2 mb-4">
				{keywords.map((keyword) => (
					<span key={keyword} className="">
						{keyword}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
