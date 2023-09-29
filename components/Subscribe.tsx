import React from "react";
import Button from "./button";

function Subscribe() {
	return (
		<div className="bg-theme_dark_gray py-[120px]">
			<div className="max-w-[1200px] mx-auto w-[90%]">
				<div className="p-[50px] xs:px-[20px] bg-theme_black flex items-center gap-[50px] sm:flex-col">
					<div className="flex-1">
            <h1 className="text-[35px] text-[white] leading-[1.4] xs:text-[27px]">Enter your e-mail address and get <span className="text-theme_green">notification</span> on every discount</h1>
          </div>

					<div className="flex-1 sm:w-full">
            <div className="flex items-center gap-[30px] xs:flex-col xs:items-start">
              <div className="h-[50px] flex-1 xs:w-full  border-[2px] border-[gray]/30 bg-theme_dark_gray px-[10px] text-[white]">
                <input type="text" placeholder="Enter your email here" className="w-full h-[50px] bg-[transparent] border-none outline-none" />
              </div>

              <Button text="Subscribe Now" size="text-[15px]" showIcon />
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
