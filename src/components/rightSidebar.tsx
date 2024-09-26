const RightSidebar = () => {
	return (
		<div
			className="hidden md:block fixed right-10 bottom-0 w-10 text-slate-light"
			aria-orientation="vertical">
			<div className="flex flex-col items-center leading-4.5 after:fz-sidebar-line after:mt-8">
				<a
					href="mailto:adityanath.suman@gmail.com"
					className="fz-transition px-1.5 fz-vertical-rl text-xxs font-mono tracking-widest hover:text-green hover:-translate-y-1">
					adityanath.suman@gmail.com
				</a>
			</div>
		</div>
	);
};

export default RightSidebar;
