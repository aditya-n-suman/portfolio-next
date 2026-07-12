import IconExternal from "@/assets/icons/external";
import IconFolder from "@/assets/icons/folder";
import IconGitHub from "@/assets/icons/github";
import { Project } from "@/utils/constants";

const ProjectCard = ({
	name,
	problem,
	solution,
	challenges,
	technologies,
	github,
	link,
}: Project) => {
	return (
		<div className="p-6 relative shadow-lg bg-navy-light rounded-md text-slate-light hover:-translate-y-3 fz-transition">
			<div>
				<div className="flex items-center text-green justify-between mb-8">
					<IconFolder height="52" />
					<div className="flex gap-3 items-center text-slate-light">
						<a href={github} className=" hover:text-green" target="_blank" rel="noopener noreferrer">
							<IconGitHub height="20" />
						</a>
						{link && (
							<a href={link} className=" hover:text-green" target="_blank" rel="noopener noreferrer">
								<IconExternal height="24" />
							</a>
						)}
					</div>
				</div>
				<h3 className="text-white text-xxl font-extrabold mb-4">
					{link ? (
						<a
							href={link}
							rel="noopener noreferrer"
							target="_blank"
							className="project-link">
							{name}
						</a>
					) : (
						name
					)}
				</h3>

				<div className="flex flex-col gap-2 text-sm text-slate-light">
					<p>
						<strong className="text-zinc-200">Problem: </strong>
						{problem}
					</p>
					<p>
						<strong className="text-zinc-200">Solution: </strong>
						{solution}
					</p>
					<p>
						<strong className="text-zinc-200">Challenges: </strong>
						{challenges}
					</p>
				</div>
			</div>

			<div className="font-mono text-slate-light text-xxs md:text-xs flex flex-wrap gap-2 mt-4">
				{technologies.map((keyword) => (
					<span key={keyword} className="">
						{keyword}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
