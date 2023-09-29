"use client";

import { useState, useRef } from "react";
import Brand from "./brand";
import Button from "./button";

function Header() {
	const [open, setOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const linkRef = useRef<HTMLLIElement[]>([]);

	const openMenu = (state: boolean) => {
		if (state) return;

		setOpen(true);

		setTimeout(() => {
			navRef.current?.classList.replace("sm:w-0", "sm:w-[240px]");
		}, 5);

		setTimeout(() => {
			linkRef.current.forEach((val) => (val.style.transform = "rotateY(0deg)"));
		}, 305);
	};

	const closeMenu = (state: boolean) => {
		if (!state) return;

		linkRef.current.forEach((val) => (val.style.transform = "rotateY(90deg)"));

		setTimeout(() => {
			navRef.current?.classList.replace("w-[240px]", "w-0");
		}, 900);

		setTimeout(() => {
			setOpen(false);
		}, 1200);
	};

	return (
		<header className="absolute top-0 w-full border-b-[2px] border-[gray]/30 h-[80px] z-20">
			<div className="h-full max-w-[1200px] mx-auto flex items-center sm:w-[90%]">
				<div className="flex-1">
					<Brand />
				</div>

				<div className="flex-1 flex items-center justify-end">
					<nav
						ref={navRef}
						className={`flex items-center gap-[30px] justify-end transition-all duration-300 ${
							open ? "sm:flex" : "sm:hidden"
						} sm:w-0 sm:justify-start sm:items-start sm:flex-col sm:absolute sm:top-[80px] sm:right-0 sm:gap-[20px] sm:py-[30px] sm:px-[20px] sm:bg-[black]/30 sm:backdrop-blur`}
					>
						<ul className="flex items-center text-[white] text-[15px] gap-[30px] sm:hidden">
							{[
								{ text: "Home" },
								{
									text: "Pages",
									extra: (
										<svg
											className="w-[30px]"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="Arrow / Caret_Down_SM">
												<path
													id="Vector"
													d="M15 11L12 14L9 11"
													className="stroke-[white] group-hover:stroke-theme_green"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</g>
										</svg>
									),
								},
								{ text: "Store" },
								{ text: "Blog" },
								{ text: "Contact" },
								{
									text: "Cart ",
									extra: <span className="text-theme_green">(0)</span>,
								},
							].map((val, ind) => (
								<li
									key={ind}
									className={`text-[15px] ${
										ind === 0 ? "text-theme_green" : "text-[white]"
									} ${
										ind === 1 && "flex items-center"
									} group cursor-pointer hover:text-theme_green`}
								>
									{val.text}

									{val.extra}
								</li>
							))}
						</ul>

						<ul className="hidden sm:flex items-center text-[white] text-[15px] gap-[20px] flex-col">
							{[
								{ text: "Home" },
								{
									text: "Pages",
									extra: (
										<svg
											className="w-[30px]"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="Arrow / Caret_Down_SM">
												<path
													id="Vector"
													d="M15 11L12 14L9 11"
													className="stroke-[white] group-hover:stroke-theme_green"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</g>
										</svg>
									),
								},
								{ text: "Store" },
								{ text: "Blog" },
								{ text: "Contact" },
								{
									text: "Cart ",
									extra: <span className="text-theme_green">(0)</span>,
								},
							].map((val, ind) => (
								<li
									key={ind}
									ref={(ref) => (linkRef.current[ind] = ref!)}
									style={{
										transitionDelay: `${ind * 150}ms`,
										transform: "rotateY(90deg)",
									}}
									className={`text-[15px] px-[20px] bg-[white]/20 h-[40px] w-[200px] ${
										ind === 0 ? "text-theme_green" : "text-[white]"
									} group flex items-center cursor-pointer hover:text-theme_green transition-all duration-300 origin-right`}
								>
									{val.text}

									{val.extra}
								</li>
							))}
						</ul>

						<Button text="Sign Up" showIcon />
					</nav>

					<div
						onClick={() => (open ? closeMenu(open) : openMenu(open))}
						className="hidden sm:flex cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							width="30px"
							height="30px"
							className="hidden sm:block cursor-pointer fill-[white]"
						>
							<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
