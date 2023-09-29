"use client";

import Image from "next/image";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpeg";
import { useRef, useState } from "react";

function Testimonial() {
	const [state, setState] = useState(0);
	const conRef = useRef<HTMLDivElement>(null);

	const move = (index: number) => {
		conRef.current!.style.transform = `translateX(calc((((100% - 60px) / 3) * -${index}) - (${index} * 30px)))`;

		setState(index);
	};

	return (
		<div className="bg-theme_dark_gray py-[120px]">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex flex-col items-center text-[white]">
					<p className="mb-[20px] text-[18px]">Testimonial</p>

					<h1 className="text-[35px] mb-[50px] xs:text-[27px] text-center">
						What Our Clients Say About Us
					</h1>

					<div className="w-full overflow-hidden flex flex-col gap-[50px] items-center">
						<div ref={conRef} className="flex gap-[30px] w-full transition-all duration-500">
							{[
								{ img: pic1, name: "Tajul Islam" },
								{ img: pic2, name: "Jubed Ahmed" },
								{ img: pic3, name: "Nabil Islam" },
								{ img: pic2, name: "Jubed Ahmed" },
								{ img: pic3, name: "Nabil Islam" },
							].map((val, ind) => (
								<div
									key={ind}
									className="bg-theme_black min-w-[calc((100%-60px)/3)] tablet:min-w-[calc((100%-30px)/2)] xs:min-w-full min-h-[350px] p-[20px] flex flex-col items-center justify-center text-center"
								>
									<Image
										alt="pic"
										src={val.img}
										className="w-[70px] h-[70px] rounded-[50%] object-cover mb-[20px]"
									/>

									<p className="mb-[10px] text-[18px]">{val.name}</p>

									<span className="text-[gray] text-[12px] mb-[20px] font-light">
										UI Designer
									</span>

									<q className="leading-[1.4] font-light text-[lightgray] text-[14px]">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Itaque sunt voluptatum autem incidunt dolores tenetur,
										quibusdam fugiat illo cum adipisci molestiae ipsam
										recusandae, eligendi praesentium, accusamus quam dolorem
										quod reprehenderit!
									</q>
								</div>
							))}
						</div>

						<div className="flex items-center gap-[10px]">
							{[1, 2, 3].map((val, ind) => (
								<span
									key={ind}
									onClick={() => move(ind)}
									className={`rounded-[50%] ${
										state === ind
											? "w-[12px] h-[12px] bg-theme_green"
											: "w-[8px] h-[8px] bg-[white]"
									} cursor-pointer`}
								></span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
