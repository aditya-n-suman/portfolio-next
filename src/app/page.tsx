import About from "@/components/about";
import Home from "@/components/home";
import "@/app.css";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function HomePage() {
	return (
		<main className="font-sans text-slate content">
			<Home />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</main>
	);
}
