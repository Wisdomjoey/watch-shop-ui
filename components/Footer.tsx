import React from "react";
import Brand from "./brand";

function Footer() {
	return (
		<footer className="bg-theme_black pt-[120px]">
			<div className="max-w-[1200px] mx-auto pb-[50px] w-[90%]">
				<div className="flex gap-[100px] xs:flex-col xs:gap-[50px]">
					<div className="flex-1">
						<Brand />

						<p className="text-[14px] leading-[1.4] text-[white] mt-[30px] font-light">
							Experience the Future of Wearable Technology – Shop Our Collection
							of Smart Watches Today
						</p>
					</div>

					<div className="flex-[3] flex flex-wrap gap-[50px] xs:gap-[30px]">
						{[
							{
								title: "Pages",
								links: ["About Us", "Our Story", "Store", "Site Map", "Blog"],
							},
							{
								title: "Support",
								links: [
									"About Us",
									"FAQ",
									"Shipping",
									"Customer Care",
									"Track Order",
								],
							},
							{
								title: "Social Media",
								links: [
									"Facebook",
									"YouTube",
									"Instagram",
									"LinkedIn",
									"Twitter",
								],
							},
						].map((val, ind) => (
							<div key={ind} className="flex-1 min-w-[130px]">
								<h4
									className={`${
										ind === 0 ? "text-theme_green" : "text-[lightgray]"
									} mb-[30px]`}
								>{val.title}</h4>

								<div className="flex flex-col gap-[15px] text-[white] text-[14px] font-light">
									{val.links.map((v, idx) => (
										<p key={idx}>{v}</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="border-t-[2px] border-[gray]/30">
				<div className="max-w-[1200px] mx-auto w-[90%]">
					<div className="h-[70px] flex items-center justify-between text-[white] text-[14px] font-light">
						<p>
							Copyright <span className="text-theme_green">@MultyBe</span> |
							www.jayz.co
						</p>

						<div className="flex items-center gap-[20px]">
							<p>Privacy Policy</p>
							<p>Terms & Condition</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
