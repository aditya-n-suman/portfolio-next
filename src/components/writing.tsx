import NumberedHeading from "./atoms/numberedHeading";
import { ARTICLES } from "@/utils/constants";

const Writing = () => {
	return (
		<section id="writing" className="py-20 w-full">
			<NumberedHeading title="Technical Writing" width="w-full" />
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
				{ARTICLES.map((article, idx) => (
					<div
						key={idx}
						className="bg-navy-light p-6 md:p-8 rounded-md shadow-lg flex flex-col justify-between h-full">
						<div>
							<div className="flex gap-4 items-center text-xs font-mono text-slate mb-4">
								<span>{article.date}</span>
								<span>•</span>
								<span>{article.readTime}</span>
							</div>
							
							<h3 className="text-white text-lg font-bold mb-4 tracking-tight leading-snug">
								{article.title}
							</h3>
							
							<p className="text-slate text-sm leading-relaxed mb-6">
								{article.description}
							</p>
						</div>
						
						<div className="text-xs font-mono text-green uppercase tracking-widest inline-flex items-center gap-1.5 cursor-pointer select-none">
							Coming Soon →
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Writing;
