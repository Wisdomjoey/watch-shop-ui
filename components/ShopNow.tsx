import Image from "next/image";
import ex1 from "../assets/images/exh1.jpeg";
import ex2 from "../assets/images/exh2.jpeg";
import Button from "./button";

function ShopNow() {
	return (
		<div className="bg-theme_dark_gray py-[120px] overflow-hidden">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="min-h-[300px] bg-theme_black p-[20px] border-[2px] border-theme_green">
					<div className="flex items-center justify-center h-full sm:flex-col sm:items-start gap-[50px]">
						<div className="flex-1 h-full xs:w-full">
							<div className="relative h-full w-fit xs:w-full">
								<Image
									alt="Watch Display 1"
									src={ex1}
									className="w-[260px] h-[260px] object-cover"
								/>

								<Image
									alt="Watch Display 2"
									src={ex2}
									className="w-[260px] h-[260px] object-cover absolute -top-[70px] -right-[190px] xs:-right-[50px]"
								/>
							</div>
						</div>

						<div className="flex-1">
							<div>
								<h1 className="text-[white] text-[35px] leading-[1.4] mb-[40px] sm:mb-[30px] xs:text-[27px]">
									A perfect watch will help you keep track of the time
								</h1>

								<Button
									text="Shop Now"
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
		</div>
	);
}

export default ShopNow;
