type Props = {
	text?: string;
	size?: string;
	bg?: string;
	icon?: React.ReactNode;
	color?: string;
	weight?: string;
	border?: boolean;
	borderColor?: string;
	hover?: string;
	showIcon?: boolean;
	clicked?: (e: React.MouseEvent) => void;
};

function Button({
	text,
	size,
	bg,
	icon,
	color,
	weight,
	border,
	hover,
	borderColor,
	showIcon,
	clicked,
}: Props) {
	return (
		<button
			onClick={clicked}
			className={`${bg ?? "bg-theme_green"} ${size ?? "text-[17px]"} ${
				color ?? "text-theme_black"
			} ${weight ?? "font-medium"} ${
				border
					? `border ${borderColor ?? "border-theme_green"} ${
							hover ?? "hover:bg-theme_green hover:text-theme_black hover:font-medium"
					  }`
					: "border-none"
			} px-[15px] py-[12px] outline-none w-fit flex items-center gap-[10px] transition-all duration-200 cursor-pointer hover:scale-95`}
		>
			{text && <span>{text}</span>}

			{icon ??
				(showIcon && (
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-[22px]"
					>
						<path
							d="M7 17L17 7M17 7H8M17 7V16"
							className="stroke-theme_black"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				))}
		</button>
	);
}

export default Button;
