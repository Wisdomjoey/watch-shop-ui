import React from "react";

function Brand() {
	return (
		<div className="flex items-center gap-[5px] text-[white] text-[18px] font-medium">
			<svg
				className="fill-theme_green w-[30px]"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g>
					<g>
						<rect width="24" height="24" opacity="0" />

						<path d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06z" />

						<path d="M12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38z" />

						<path d="M12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z" />
					</g>
				</g>
			</svg>

      <span>Mult<span className="text-theme_green">y</span>Be</span>
		</div>
	);
}

export default Brand;
