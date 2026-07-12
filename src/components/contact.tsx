import Icon from "@/assets/icons/iconFactory";
import { DEFAULT_EMAIL, SOCIAL_MEDIA } from "@/utils/constants";

const Contact = () => {
	return (
		<section
			id="contact"
			className="flex flex-col items-center min-h-screen md:pt-25 lg:w-3/5 mx-auto">
			<div className="flex-1 flex flex-col items-center justify-center">
				<h2 className="whats-next font-extrabold text-white flex flex-col items-center gap-2">
					Get In Touch
				</h2>
				<div className="text-lg md:text-xl mb-9 text-center text-slate">
					Whether you are looking to scale your frontend performance, design micro-frontends architectures,
					or discuss Staff Engineer opportunities, feel free to reach out. I am always open to new connections and collaborations.
				</div>
				<a
					href={DEFAULT_EMAIL}
					className="flex items-center text-green border-green border-1px rounded-1.5 px-6 py-3 fz-transition hover:fz-shadow hover:fz-translate">
					Say Hello
				</a>
			</div>
			<footer className="text-center md:pt-25 pb-10">
				<ul className="flex md:hidden flex-row justify-center after:fz-sidebar-line after:mt-5 mb-6">
					{SOCIAL_MEDIA.map(({ name, link }) => (
						<li key={name}>
							<a
								href={link}
								className="p-2.5 inline-block hover:-translate-y-2.5 hover:text-green fz-transition text-slate-light">
								<Icon name={name} height="20px" width="20px" />
							</a>
						</li>
					))}
				</ul>
				<p className="font-mono leading-tight text-slate">
					<a href="https://www.linkedin.com/in/aditya-nath-suman" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-green ">
						Built by Aditya Nath Suman
					</a>
					<br />
					<a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="text-xxs">Design Credit: Brittany Chiang</a>
				</p>
			</footer>
		</section>
	);
};

export default Contact;
