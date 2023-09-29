"use client";

import { useState, useRef } from "react";
import fav1 from "../assets/images/fav1.png";
import fav2 from "../assets/images/fav2.png";
import fav3 from "../assets/images/fav3.png";
import fav4 from "../assets/images/fav4.png";
import fav5 from "../assets/images/fav5.png";
import fav6 from "../assets/images/fav6.png";
import Image from "next/image";
import Button from "./button";

function Favorite() {
	const [category, setCategory] = useState("women");
	const gridRef = useRef<HTMLDivElement>(null);
	const itemConRef = useRef<HTMLDivElement[]>([]);
	const itemRef = useRef<HTMLDivElement[]>([]);

	const data = {
		men: [
			{
				img: fav1,
				text: "Vintage Watch",
			},
			{
				img: fav2,
				text: "Classic Vintage Watch",
			},
			{
				img: fav3,
				text: "Men Seiko Watch",
			},
			{
				img: fav4,
				text: "Designer Watch",
			},
			{
				img: fav5,
				text: "Platinum Watch",
			},
			{
				img: fav6,
				text: "Plated Seiko Watch",
			},
		],
		women: [
			{
				img: fav3,
				text: "Women Seiko Watch",
			},
			{
				img: fav1,
				text: "Vintage Watch",
			},
			{
				img: fav2,
				text: "Classic Vintage Watch",
			},
			{
				img: fav6,
				text: "Plated Seiko Watch",
			},
			{
				img: fav5,
				text: "Platinum Watch",
			},
			{
				img: fav4,
				text: "Designer Watch",
			},
		],
		children: [
			{
				img: fav1,
				text: "Vintage Watch",
			},
			{
				img: fav3,
				text: "Men Seiko Watch",
			},
			{
				img: fav2,
				text: "Classic Vintage Watch",
			},
			{
				img: fav6,
				text: "Plated Seiko Watch",
			},
			{
				img: fav4,
				text: "Designer Watch",
			},
			{
				img: fav5,
				text: "Platinum Watch",
			},
		],
	};

	const showDetails = (index: number) => {
		itemConRef.current[index].classList.replace("h-0", "h-[180px]");
		itemRef.current[index].classList.replace("hidden", "flex");

		setTimeout(() => {
			itemRef.current[index].classList.replace("opacity-0", "opacity-100");
		}, 500);
	};

	const hideDetails = (index: number) => {
		itemRef.current[index].classList.replace("opacity-100", "opacity-0");

		setTimeout(() => {
			itemRef.current[index].classList.replace("flex", "hidden");
			itemConRef.current[index].classList.replace("h-[180px]", "h-0");
		}, 500);
	};

	const changeData = (cat: string) => {
		gridRef.current?.classList.replace("opacity-100", "opacity-0");

		setTimeout(() => {
			setCategory(cat);
		}, 300);

		setTimeout(() => {
			gridRef.current?.classList.replace("opacity-0", "opacity-100");
		}, 305);
	};

	return (
		<div className="bg-theme_black py-[120px]">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex flex-col items-center">
					<h1 className="text-[white] text-[35px] mb-[30px] xs:text-[27px] text-center">
						Looking for Favorite Watch?
					</h1>

					<div className="w-full">
						<div className="flex items-center justify-center gap-[15px] font-light mb-[50px]">
							{["men", "women", "children"].map((val, ind) => (
								<p
									key={ind}
									onClick={() => changeData(val)}
									className={`${
										category === val
											? "border-b-[2px] border-theme_green"
											: "border-none"
									} text-[lightgray] py-[7px] cursor-pointer transition-all duration-300 capitalize`}
								>
									{val}
								</p>
							))}
						</div>

						<div
							ref={gridRef}
							className="gap-[30px] columns-3 tablet:columns-2 xs:columns-1 mb-[50px] opacity-100 transition-all duration-300"
						>
							{data[category as keyof typeof data].map((val, ind) => (
								<div key={ind} className="w-full relative h-fit mb-[30px]">
									<Image
										alt="Favorite watches"
										src={val.img}
										className="w-full object-contain px-[10px] py-[20px]"
									/>

									<div
										onMouseOver={() => showDetails(ind)}
										onMouseLeave={() => hideDetails(ind)}
										className="absolute flex top-0 w-full h-full border-[2px] border-[gray]/30 hover:border-theme_green transition-all duration-300 cursor-pointer"
									>
										<div
											ref={(ref) => (itemConRef.current[ind] = ref!)}
											className="px-[20px] mt-auto w-full max-h-full h-0 bg-theme_green transition-all duration-500"
										>
											<div
												ref={(ref) => (itemRef.current[ind] = ref!)}
												className="h-full hidden flex-col opacity-0 justify-center transition-all duration-500 overflow-hidden"
											>
												<h3 className="mb-[20px] text-theme_black text-[18px] overflow-hidden text-ellipsis whitespace-nowrap">
													{val.text}
												</h3>

												<div className="text-theme_black text-[20px] flex items-center gap-[10px] mb-[15px]">
													<p>&#9733;</p>
													<p>&#9733;</p>
													<p>&#9733;</p>
													<p>&#9733;</p>
													<p>&#9734;</p>
												</div>

												<div className="flex items-center justify-between">
													<p className="text-[18px] text-theme_black">$45</p>

													<Button
														text="Buy Now"
														size="text-[14px]"
														color="text-theme_black"
														borderColor="border-theme_black"
														hover="hover:bg-theme_black hover:text-[white] hover:font-light"
														border
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="flex items-center justify-center">
							<Button
								text="View All Products"
								bg="bg-[transparent]"
								size="text-[14px]"
								weight="font-light"
								color="text-[white]"
								border
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Favorite;
