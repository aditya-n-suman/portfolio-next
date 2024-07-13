const Header = () => {
	return (
		<header
			className={`bg-transparent flex justify-between border-b-1px py-2 lg:py-4`}>
			<h1 className="text-3xl">
				<span className="font-bold mr-2">Aditya Nath</span>
				<span>Suman</span>
			</h1>
			<nav>
				<ul className="flex gap-2">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
				</ul>
			</nav>
			<button className="">Let&#39;s talk</button>
		</header>
	);
};

export default Header;
