import Button from "./button";
import w1 from "../assets/images/head1.png";
import w2 from "../assets/images/head2.png";
import Image from "next/image";
import Header from "./header";

function MainHeader() {
	return (
		<div className="main__header relative bg-theme_black">
			<Header />

			<div className="w-[150px] h-[400px] bg-theme_green absolute rotate-45 opacity-70 right-[150px] blur-[100px]"></div>
			<div className="w-[150px] h-[300px] bg-theme_green absolute -rotate-45 opacity-70 right-[150px] top-[400px] blur-[100px]"></div>

			<div className="max-w-[1200px] mx-auto relative z-10 w-[90%]">
				<div className="flex items-center gap-[30px] sm:flex-col-reverse">
					<div className="flex-[2]">
						<div className="flex flex-col gap-[30px] tablet:w-[80%]">
							<h1 className="leading-[1.5] text-[white] text-[47px] font-semibold sm:text-[35px]">
								Smart Watches for the{" "}
								<span className="text-theme_green">Modern Lifestyle</span>
							</h1>

							<p className="text-[white] mb-[10px] leading-[1.5] font-light">
								Discover the Latest Smart Watches for the Modern Lifestyle –
								Shop Now and Stay Connected on the Go!
							</p>

							<Button text="SHOP NOW" showIcon />
						</div>
					</div>

					<div className="flex-[3]">
						<div className="flex gap-[30px]">
							<div className="flex-[4]">
								<div className="p-[30px] bg-theme_green mt-[150px]">
									<Image
										alt="watch display 1"
										src={w1}
										className="w-full object-contain"
									/>
								</div>
							</div>

							<div className="flex-[3]">
								<div className="p-[30px] bg-theme_dark_gray mb-auto">
									<Image
										alt="watch display 2"
										src={w2}
										className="w-full object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-[150px] bg-theme_dark_gray px-[50px] sm:px-[30px] py-[70px]">
					<div className="flex flex-wrap items-center gap-[15px] tablet:gap-[50px] xs:gap-0">
						<div
							className="flex-1 pr-[30px] border-r-[2px] xs:border-b-[2px] xs:border-r-0 xs:pb-[20px] xs:pr-0 min-w-[170px]"
							style={{
								borderImage:
									"linear-gradient(to bottom, transparent, #b0f127, transparent) 1",
							}}
						>
							<p className="text-[white] leading-[1.5] text-[17px]">
								We carefully deliver your watch. Shop the best watch from
								MultyBe
							</p>
						</div>

						<hr
							className="border-t-[2px] hidden xs:flex w-full mb-[50px] mt-[20px]"
							style={{
								borderImage:
									"linear-gradient(to right, transparent, #b0f127, transparent) 1",
							}}
						/>

						<div className="flex-[3] flex flex-wrap items-center sm:gap-[30px]">
							{[
								{
									icon: (
										<svg
											className="w-[40px] fill-theme_green"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											id="package-alt"
										>
											<path d="M12.54,10.67l-.54.27-.54-.27-8-4s0,0,0,0h0l8-4.5a1,1,0,0,1,1,0l8,4.5h0s0,0,0,0l-4,2a.24.24,0,0,0-.09-.06l-4-2a1,1,0,0,0-.9,1.78l2.77,1.39ZM3,7.56a.06.06,0,0,1,0,0v9a1,1,0,0,0,.51.87l8,4.49v-10l-.5-.25Zm18,0-4,2V14a1,1,0,0,1-2,0V10.56l-2.5,1.25v10l8-4.49A1,1,0,0,0,21,16.5v-9A.06.06,0,0,1,21,7.56Z"></path>
										</svg>
									),
									head: "Return Policy",
									text: "100% money back guarantee",
								},
								{
									icon: (
										<svg
											className="w-[35px] fill-theme_green"
											version="1.1"
											id="Capa_1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
											viewBox="0 0 612 612"
											xmlSpace="preserve"
										>
											<g>
												<path
													d="M34.533,390.596c-10.214,8.754-17.231,21.053-19.316,35.02H6.949c-3.822,0-6.949-3.127-6.949-6.949v-21.123
		c0-3.822,3.126-6.947,6.949-6.947H34.533L34.533,390.596z M114.159,425.615c0.556,2.709,0.834,5.418,0.834,8.268
		c0,23.832-19.316,43.217-43.218,43.217c-23.832,0-43.218-19.385-43.218-43.217c0-2.85,0.277-5.559,0.833-8.268
		c3.821-19.943,21.331-35.02,42.384-35.02S110.407,405.672,114.159,425.615z M93.384,433.883c0-2.918-0.555-5.768-1.667-8.268
		c-3.196-7.852-10.909-13.342-19.941-13.342c-9.033,0-16.745,5.49-19.942,13.342c-1.112,2.5-1.667,5.35-1.667,8.268
		c0,11.881,9.658,21.609,21.609,21.609C83.727,455.492,93.384,445.764,93.384,433.883z M17.106,362.873V155.745
		c0-11.512,9.333-20.845,20.845-20.845h332.125c11.513,0,20.845,9.333,20.845,20.845v207.128c0,3.82-3.126,6.947-6.948,6.947H24.055
		C20.233,369.82,17.106,366.693,17.106,362.873z M340.476,339.488c0,3.299,2.674,5.973,5.973,5.973h0.186
		c3.298,0,5.972-2.674,5.972-5.973V167.625c0-3.298-2.674-5.972-5.972-5.972h-0.186c-3.299,0-5.973,2.674-5.973,5.972V339.488z
		 M284.314,339.488c0,3.299,2.673,5.973,5.971,5.973h0.186c3.299,0,5.972-2.674,5.972-5.973V167.625
		c0-3.298-2.673-5.972-5.972-5.972h-0.186c-3.298,0-5.971,2.674-5.971,5.972V339.488z M228.151,339.488
		c0,3.299,2.674,5.973,5.972,5.973h0.186c3.298,0,5.972-2.674,5.972-5.973V167.625c0-3.298-2.674-5.972-5.972-5.972h-0.186
		c-3.298,0-5.972,2.674-5.972,5.972V339.488z M171.99,339.488c0,3.299,2.674,5.973,5.972,5.973h0.186
		c3.298,0,5.972-2.674,5.972-5.973V167.625c0-3.298-2.674-5.972-5.972-5.972h-0.186c-3.298,0-5.972,2.674-5.972,5.972V339.488z
		 M115.828,339.488c0,3.299,2.673,5.973,5.972,5.973h0.186c3.298,0,5.971-2.674,5.971-5.973V167.625
		c0-3.298-2.673-5.972-5.971-5.972H121.8c-3.299,0-5.972,2.674-5.972,5.972V339.488z M59.666,339.488
		c0,3.299,2.674,5.973,5.972,5.973h0.186c3.299,0,5.972-2.674,5.972-5.973V167.625c0-3.298-2.673-5.972-5.972-5.972h-0.186
		c-3.298,0-5.972,2.674-5.972,5.972V339.488z M220.815,425.615c0.556,2.709,0.834,5.418,0.834,8.268
		c0,23.832-19.316,43.217-43.218,43.217c-23.833,0-43.218-19.385-43.218-43.217c0-2.85,0.278-5.559,0.833-8.268
		c3.822-19.943,21.332-35.02,42.385-35.02S217.063,405.672,220.815,425.615z M200.04,433.883c0-2.918-0.556-5.768-1.598-8.268
		c-3.266-7.852-10.979-13.342-20.011-13.342s-16.746,5.49-20.011,13.342c-1.042,2.5-1.598,5.35-1.598,8.268
		c0,11.881,9.658,21.609,21.61,21.609C190.382,455.492,200.04,445.764,200.04,433.883z M141.188,390.596h-32.169
		c7.087,6.113,12.715,13.965,16.12,22.859C128.473,404.562,134.101,396.709,141.188,390.596z M612,397.543v21.123
		c0,3.822-3.127,6.949-6.948,6.949h-56.28c-4.03-27.586-27.724-48.916-56.42-48.916s-52.459,21.33-56.489,48.916H234.989
		c-2.084-13.967-9.102-26.266-19.316-35.02H410.78V191.876c0-7.644,6.183-13.897,13.896-13.897h65.592
		c18.482,0,35.714,9.172,46.065,24.458l42.315,62.673c6.184,9.172,9.519,20.011,9.519,31.058v94.427h16.884
		C608.873,390.596,612,393.721,612,397.543z M541.545,266.708l-33.838-48.082c-1.32-1.806-3.404-2.918-5.697-2.918h-52.736
		c-3.821,0-6.949,3.126-6.949,6.949v48.012c0,3.891,3.128,6.948,6.949,6.948h86.574
		C541.477,277.617,544.741,271.294,541.545,266.708z M535.569,433.883c0,23.832-19.385,43.217-43.218,43.217
		c-23.902,0-43.218-19.385-43.218-43.217c0-23.902,19.316-43.287,43.218-43.287C516.185,390.596,535.569,409.98,535.569,433.883z
		 M513.961,433.883c0-11.951-9.658-21.609-21.609-21.609s-21.609,9.658-21.609,21.609c0,11.881,9.658,21.609,21.609,21.609
		S513.961,445.764,513.961,433.883z"
												/>
											</g>
										</svg>
									),
									head: "Free Shipping",
									text: "free shipping over 99$",
								},
								{
									icon: (
										<svg
											className="w-[30px]"
											viewBox="0 0 24 24"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<g
												id="🔍-System-Icons"
												stroke="none"
												strokeWidth="1"
												fill="none"
												fillRule="evenodd"
											>
												<g
													id="ic_fluent_chat_help_24_filled"
													fillRule="nonzero"
													className="fill-theme_green"
												>
													<path
														d="M12,2 C17.5228,2 22,6.47715 22,12 C22,17.5228 17.5228,22 12,22 C10.3596,22 8.77516,21.6039 7.35578,20.8583 L3.06538,21.9753 C2.6111,22.0937 2.1469,21.8213 2.02858,21.367 C1.99199,21.2266 1.99198,21.0791 2.02855,20.9386 L3.1449,16.6502 C2.3972,15.2294 2,13.6428 2,12 C2,6.47715 6.47715,2 12,2 Z M12,15.5 C11.4477,15.5 11,15.9477 11,16.5 C11,17.0523 11.4477,17.5 12,17.5 C12.5523,17.5 13,17.0523 13,16.5 C13,15.9477 12.5523,15.5 12,15.5 Z M12,6.75 C10.4812,6.75 9.25,7.98122 9.25,9.5 C9.25,9.91421 9.58579,10.25 10,10.25 C10.3797,10.25 10.6935,9.96785 10.7432,9.60177 L10.7565,9.37219 C10.8205,8.74187 11.3528,8.25 12,8.25 C12.6904,8.25 13.25,8.80964 13.25,9.5 C13.25,10.0388 13.115,10.3053 12.6051,10.8322 L12.3011,11.1414 C11.5475,11.926 11.25,12.4892 11.25,13.5 C11.25,13.9142 11.5858,14.25 12,14.25 C12.4142,14.25 12.75,13.9142 12.75,13.5 C12.75,12.9612 12.885,12.6947 13.3949,12.1678 L13.6989,11.8586 C14.4525,11.074 14.75,10.5108 14.75,9.5 C14.75,7.98122 13.5188,6.75 12,6.75 Z"
														id="🎨-Colo"
													></path>
												</g>
											</g>
										</svg>
									),
									head: "Help & Support",
									text: "support all day 24/7",
								},
							].map((val, ind) => (
								<div
									key={ind}
									className="flex-1 px-[19px] xs:px-0 min-w-[170px]"
								>
									{val.icon}

									<h3 className="text-[white] mt-[25px] text-[20px]">
										{val.head}
									</h3>

									<p className="text-[gray] mt-[10px] text-[15px]">
										{val.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainHeader;
