import Image from "next/image";
import myImage from "@/assets/images/me.jpeg";
import NumberedHeading from "./atoms/numberedHeading";
import { MY_TECHS } from "@/utils/constants";

const About = () => {
	return (
		<section
			id="about"
			className="md:px-12 md:py-25 w-full flex flex-col gap-10 min-h-screen items-center lg:flex-row">
			<div className="md:w-3/5 text-lg md:text-xl ">
				<NumberedHeading title="About Me" width="w-full" />
				<p className="">
					Welcome to my portfolio! I&#39;m Aditya, a dedicated Frontend
					Developer with a strong emphasis on the React ecosystem. My journey in
					web development has equipped me with extensive experience in crafting
					applications using TypeScript, Next.js and TailwindCSS, where I focus
					on delivering outstanding user experiences through intuitive and
					interactive designs.
				</p>
				<p className="">
					In addition to my frontend expertise, I possess a robust skill set in
					backend technologies, including Node.js, Express.js, and NestJS. This
					dual proficiency allows me to build comprehensive, full-stack
					solutions that are not only functional but also scalable and
					maintainable.
				</p>
				<p className="">
					I have a deep appreciation for software design patterns, particularly
					the Modular Design Pattern, which I use to write clean, modular code
					that adapts well to changing requirements. I believe in continuous
					learning and enjoy working collaboratively to create innovative
					solutions. I invite you to explore my work and reach out — let&#39;s
					collaborate to turn your vision into reality!
				</p>
				<p className="">
					Here are a few technologies I&#39;ve been working with recently:
				</p>
				<ul className="grid grid-cols-2 lg:grid-cols-3 font-mono text-xxs md:text-xs">
					{MY_TECHS.map((tech) => (
						<li key={tech} className="with-dot text-nowrap my-1">
							{tech}
						</li>
					))}
				</ul>
			</div>
			<div className="md:w-2/5 h-96">
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
