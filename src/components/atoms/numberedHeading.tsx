interface NumberedHeadingProps {
	className?: string;
	width?: string;
	title: string;
	hideLine?: boolean;
}
const NumberedHeading = ({
	className = "",
	title,
	width = "w-3/5",
	hideLine = false,
}: NumberedHeadingProps) => {
	return (
		<div className={`flex items-center mb-10 ${className} ${width}`}>
			<h2 className="numbered-heading font-extrabold">{title}</h2>
			{!hideLine && (
				<hr className="flex-1 border-t-0 h-[1px] bg-navy-lightest -translate-y-1 ml-2 md:mx-6" />
			)}
		</div>
	);
};

export default NumberedHeading;
