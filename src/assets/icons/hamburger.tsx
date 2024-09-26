import { IconProps } from "@/types/common";

const IconHam = ({ height, width }: IconProps) => {
	return (
		<svg
			width={width || "100%"}
			height={height || "100%"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			{" "}
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<path
					d="M4 6H20M4 12H20M4 18H20"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"></path>
			</g>
		</svg>
	);
};

export default IconHam;
