"use client";

import Image, { StaticImageData } from "next/image";
import Button from "./button";
import { useRef, useState } from "react";

type Props = {
	title: string;
	bg: string;
	width: string;
	bottomBg?: string;
	showBorder?: boolean;
	list: {
		img: StaticImageData;
		text: string;
	}[];
};

function WatchSlider({ title, bg, width, list, bottomBg, showBorder }: Props) {
	const [state, setState] = useState(0);
	const [state1, setState1] = useState("start");
	const conRef = useRef<HTMLDivElement>(null);
	const itemRef = useRef<HTMLDivElement[]>([]);

	const moveLeft = (index: number) => {
		if (index <= 0 || conRef.current === null) return;

		const con = conRef.current!;
		const perView = Math.floor(
			con.clientWidth / itemRef.current[0].clientWidth
		);

		conRef.current!.style.transform = `translateX(calc((((100% - ${
			30 * (perView - 1)
		}px) / ${perView}) * -${index - 1}) - (${index - 1} * 30px)))`;

		setState(index - 1);
		index - 1 <= 0 ? setState1("start") : setState1("");
	};

	const moveRight = (index: number) => {
		const con = conRef.current!;
		const length = itemRef.current.length;
		const perView = Math.floor(
			con.clientWidth / itemRef.current[0].clientWidth
		);

		if (index >= length - perView || conRef.current === null) return;

		conRef.current!.style.transform = `translateX(calc((((100% - ${
			30 * (perView - 1)
		}px) / ${perView}) * -${index + 1}) - (${index + 1} * 30px)))`;

		setState(index + 1);
		setState1("");
		index + 1 >= length - perView ? setState1("end") : setState1("");
	};

	return (
		<div className={`${bg} py-[120px]`}>
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex items-center justify-between mb-[50px] gap-[20px] xs:flex-col">
					<h1 className="text-[35px] xs:text-[27px] text-[white] text-center">{title}</h1>

					<div className="flex items-center gap-[30px]">
						<Button
							clicked={() => moveLeft(state)}
							icon={
								<svg
									className="w-[20px] h-[20px]"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 12H18M6 12L11 7M6 12L11 17"
										className={
											state1 === "start"
												? "stroke-[white]"
												: "stroke-theme_dark_gray"
										}
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							}
							bg={state1 === "start" ? "bg-[white]/10" : "bg-theme_green"}
						/>

						<Button
							clicked={() => moveRight(state)}
							icon={
								<svg
									className="w-[20px]"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 12H18M18 12L13 7M18 12L13 17"
										className={
											state1 === "end"
												? "stroke-[white]"
												: "stroke-theme_dark_gray"
										}
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							}
							bg={state1 === "end" ? "bg-[white]/10" : "bg-theme_green"}
						/>
					</div>
				</div>

				<div className="overflow-hidden">
					<div
						ref={conRef}
						className="flex gap-[30px] transition-all duration-500"
					>
						{list.map((val, ind) => (
							<div
								key={ind}
								ref={(ref) => (itemRef.current[ind] = ref!)}
								className={`bg-theme_black ${
									showBorder ? "border-[2px] border-[gray]/30" : "border-none"
								} ${width} tablet:min-w-[calc((100%-30px)/2)] xs:min-w-full`}
							>
								<div className="p-[5px] h-[400px]">
									<Image
										alt="collection 1"
										src={val.img}
										className="w-full h-full object-contain"
									/>
								</div>

								<div
									className={`px-[20px] h-[180px] flex flex-col justify-center ${
										bottomBg ?? "bg-[transparent]"
									} border-t-[2px] border-[gray]/30`}
								>
									<h3 className="mb-[20px] text-[white] text-[18px] text-ellipsis overflow-hidden whitespace-nowrap">
										{val.text}
									</h3>

									<div className="text-theme_green text-[20px] flex items-center gap-[10px] mb-[15px]">
										<p>&#9733;</p>
										<p>&#9733;</p>
										<p>&#9733;</p>
										<p>&#9733;</p>
										<p>&#9734;</p>
									</div>

									<div className="flex items-center justify-between">
										<p className="text-[18px] text-[white]">$45</p>

										<Button
											text="Buy Now"
											bg="bg-[transparent]"
											size="text-[14px]"
											weight="font-light"
											color="text-[white]"
											border
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default WatchSlider;
