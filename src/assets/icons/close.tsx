import { IconProps } from "@/types/common";

const IconClose = ({ height, width }: IconProps) => {
	return (
		<svg
			width={width || "100%"}
			height={height || "100%"}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<g id="Menu / Close_MD">
					<path
						id="Vector"
						d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"></path>
				</g>
			</g>
		</svg>
	);
};

export default IconClose;
