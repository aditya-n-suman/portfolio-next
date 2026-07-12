import Image from "next/image";
import myImage from "@/assets/images/me.jpeg";
import NumberedHeading from "./atoms/numberedHeading";
import { MY_TECHS } from "@/utils/constants";

const About = () => {
	return (
		<section
			id="about"
			className="lg:px-12 py-25 w-full flex flex-col gap-10 min-h-screen items-center lg:flex-row">
			<div className="lg:w-3/5 text-lg md:text-xl ">
				<NumberedHeading title="About Me" width="w-full" />
				<div className="flex flex-col gap-4 text-base md:text-lg">
					<p>
						I am a Frontend Platform and Performance Engineer driven by the challenge of 
						making large-scale web applications fast, robust, and delightful to build. Over the past 
						5+ years, my work has focused on bridging frontend architecture with measurable user experience 
						outcomes—transforming sluggish client applications into highly optimized, server-rendered systems.
					</p>
					
					<p>
						In my current role as <strong className="text-green text-nowrap">Lead Frontend Engineer at Info Edge (Shiksha)</strong>, 
						I lead performance audits and core platform redesigns. I enjoy tearing down build pipeline 
						bottlenecks (slashing deployment overheads from 30 minutes to 3) and engineering observability telemetry 
						to diagnose and resolve latency regressions in real time. For me, web performance is not just about 
						chasing Lighthouse scores; it’s about user-centric metrics like Interaction to Next Paint (INP) and 
						First Input Delay (FID) that determine business success.
					</p>
					
					<p>
						My design and development philosophy centers on modular architecture and clean abstraction. 
						Whether I&#39;m setting up dynamic Module Federation environments, building compatibility adapters to ease framework 
						migrations, or creating automated developer command-line tools to serialize codebase context for AI workflows, 
						I build tools that improve both developer speed and system scalability.
					</p>
					
					<p>
						Here are a few core technologies I work with regularly to solve complex frontend challenges:
					</p>
				</div>
				<ul className="grid grid-cols-2 lg:grid-cols-3 font-mono text-xxs md:text-xs mt-6">
					{MY_TECHS.map((tech) => (
						<li key={tech} className="with-dot text-nowrap my-1">
							{tech}
						</li>
					))}
				</ul>
			</div>
			<div className="lg:w-2/5 h-96">
				<div className="mt-10 profile-pic-container relative aspect-square h-75">
					<div className="img-container-child fz-transition absolute top-0 border-2 border-green rounded-1.5 h-75 aspect-square"></div>
					<div className="img-container-child fz-transition">
						<Image
							src={myImage}
							alt="picture of Aditya Nath Suman"
							className="rounded-1.5 absolute hover:z-1 object-cover"
						/>
						<div className="absolute top-0 rounded-1.5 mix-blend-multiply bg-green opacity-80 h-75 aspect-square hover:hidden "></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
