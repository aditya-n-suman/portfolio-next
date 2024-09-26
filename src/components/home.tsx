const Home = () => {
	return (
		<section
			id="content"
			className="flex flex-col md:justify-center pt-25 md:pt-0">
			<h1 className="text-green text-md font-mono mb-6 md:mb-8">
				Hi, my name is
			</h1>
			<div className="mb-4">
				<h2 className="big-heading font-extrabold mb-1 text-slate-lightest">
					Aditya Nath Suman.
				</h2>
				<h3 className="big-heading font-extrabold mt-3">
					I build things for the web.
				</h3>
			</div>
			<p className="text-lg md:text-xl max-w-lg mb-11 leading-tight">
				I&#39;m a software engineer specializing in building exceptional digital
				experiences. Currently, I&#39; focused Digital Business Transformation
				for a leading American FinCorp at{" "}
				<span className="text-green text-nowrap">Publicis Sapient</span>.
			</p>
			<button className="font-mono text-xs w-fit text-green border-green border-1px rounded-1.5 px-8 py-4 fz-transition hover:fz-shadow hover:fz-translate">
				Get in touch
			</button>
		</section>
	);
};

export default Home;
