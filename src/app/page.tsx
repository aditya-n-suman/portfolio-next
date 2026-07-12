import Home from "@/components/home";
import Highlights from "@/components/highlights";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import OpenSource from "@/components/openSource";
import Writing from "@/components/writing";
import Contact from "@/components/contact";
import "@/app.css";

export default function HomePage() {
	return (
		<main className="font-sans text-slate content">
			<Home />
			<Highlights />
			<About />
			<Expertise />
			<Experience />
			<Projects />
			<OpenSource />
			<Writing />
			<Contact />
		</main>
	);
}
