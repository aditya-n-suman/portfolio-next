interface ExperienceCardProps {
	title: string;
	company: string;
	from: string;
	to: string;
	pointers: string[];
	skills: string[];
}
const ExperienceCard = ({
	title,
	company,
	from,
	to,
	pointers,
	skills,
}: ExperienceCardProps) => {
	return (
		<div className="flex flex-col lg:flex-row gap-4 mt-6 md:gap-8">
			<div className="flex items-center">
				<div className="">
					<h3 className="font-semibold text-slate-lightest text-nowrap">
						{title} <span className="text-green">@ {company}</span>
					</h3>
					<p className="text-xs font-mono">
						{from} - {to}
					</p>
				</div>
			</div>
			<div className="bg-green-tint bg-opacity-10 p-4 rounded-1.5 text-slate-light">
				<ul className="flex flex-col gap-4 mb-4">
					{pointers.map((point) => (
						<li key={point} className="experience-detail with-dot">
							{point}
						</li>
					))}
				</ul>
				<ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs leading-snug">
					{skills.map((skill) => (
						<li key={skill} className="font-mono bg-navy rounded-xl px-2">
							{skill}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ExperienceCard;
