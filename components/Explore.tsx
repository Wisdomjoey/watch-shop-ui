import Image from "next/image";
import ex1 from "../assets/images/ex1.png";
import ex2 from "../assets/images/ex2.png";
import Button from "./button";

function Explore() {
	return (
		<div className="bg-theme_black py-[120px]">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex gap-[30px] sm:flex-col">
					{[
						{
							title: "With an Analog Dial",
							text: "You can find the perfect product for your needs. It's a fast and efficient way to shop.",
							img: ex1,
						},
						{
							title: "Digitized Dials",
							text: "Those dials are designed for digital monitoring.",
							img: ex2,
						},
					].map((val, ind) => (
						<div
							key={ind}
							className="border-[2px] border-[gray]/30 px-[30px] py-[20px] flex xs:flex-col xs:gap-[30px] items-center gap-[10px] flex-1"
						>
							<div className="flex-1 text-[white]">
								<h1 className="text-[25px] mb-[20px] leading-[1.2]">
									{val.title}
								</h1>

								<p className="leading-[1.4] font-light text-[lightgray] text-[14px] mb-[40px]">
									{val.text}
								</p>

								<Button text="Explore Products" size="text-[15px]" showIcon />
							</div>

							<div className="flex-1">
								<Image
									alt="watches"
									src={val.img}
									className="w-full object-contain"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Explore;
