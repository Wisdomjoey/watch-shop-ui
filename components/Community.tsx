import Button from "./button";
import Image from "next/image";
import com1 from "../assets/images/ct1.png";
import com2 from "../assets/images/ct2.jpg";
import com3 from "../assets/images/ct3.jpeg";
import com4 from "../assets/images/ct4.jpeg";
import com5 from "../assets/images/ct5.jpeg";
import com6 from "../assets/images/ct6.jpeg";

function Community() {
	return (
		<div className="bg-theme_black py-[120px]">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="flex items-center gap-[100px] sm:flex-col sm:items-start">
					<div className="flex-1">
						<h1 className="text-[35px] text-[white] mb-[20px] xs:text-[27px]">
							Meet Our Community
						</h1>

						<p className="text-[white] text-[15px] leading-[1.5] mb-[40px] font-light">
							Join the MultyBe and share your favorite watch with us.
						</p>

						<Button text="Follow on Instagram" showIcon />
					</div>

					<div className="flex-[2]">
						<div className="grid gap-[20px] grid-cols-3 xs:grid-cols-2">
							{[com1, com2, com3, com4, com5, com6].map((val, ind) => (
								<div key={ind} className="w-full overflow-hidden">
									<Image
										alt="Watches"
										src={val}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Community;
