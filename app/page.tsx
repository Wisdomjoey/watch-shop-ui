import Favorite from "@/components/Favorite";
import MainHeader from "@/components/MainHeader";
import ShopNow from "@/components/ShopNow";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import tr1 from "../assets/images/tr1.png";
import tr2 from "../assets/images/tr2.png";
import tr3 from "../assets/images/tr3.png";
import tr4 from "../assets/images/tr4.png";
import n1 from "../assets/images/n1.png";
import n2 from "../assets/images/n2.png";
import n3 from "../assets/images/n3.png";
import n4 from "../assets/images/n4.png";
import WatchSlider from "@/components/watchSlider";
import Community from "@/components/Community";
import Testimonial from "@/components/testimonial";
import Explore from "@/components/Explore";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="main bg-black">
			<section>
				<MainHeader />
			</section>

			<section>
				<WatchSlider
					title="Our Best Collection 🔥"
					bg="bg-theme_dark_gray"
					width="min-w-[calc((100%-60px)/3)]"
					list={[
						{ img: c1, text: "Woman's Seiko Watch" },
						{ img: c2, text: "Autopy Watch for Women" },
						{ img: c3, text: "New Apple Brand Smart Watch" },
						{ img: c1, text: "Woman's Seiko Watch" },
						{ img: c2, text: "Autopy Watch for Women" },
						{ img: c3, text: "New Apple Brand Smart Watch" },
					]}
				/>
			</section>

			<section>
				<Favorite />
			</section>

			<section>
				<ShopNow />
			</section>

			<section>
				<WatchSlider
					title="Our Top Rated Collections 🌟"
					bg="bg-theme_black"
					width="min-w-[calc((100%-90px)/4)]"
					bottomBg="bg-theme_dark_gray"
					showBorder
					list={[
						{ img: tr1, text: "Apple Watch for Man" },
						{ img: tr2, text: "Woman's Seiko Watch" },
						{ img: tr3, text: "New Apple Brand Smart Watch" },
						{ img: tr4, text: "Woman's Seiko Watch" },
						{ img: tr1, text: "Autopy Watch for Women" },
						{ img: tr2, text: "New Apple Brand Smart Watch" },
						{ img: tr3, text: "Autopy Watch for Women" },
						{ img: tr4, text: "New Apple Brand Smart Watch" },
					]}
				/>
			</section>

			<section>
				<WatchSlider
					title="Our Newest Collections ✨"
					bg="bg-theme_dark_gray"
					width="min-w-[calc((100%-90px)/4)]"
					showBorder
					list={[
						{ img: n1, text: "Apple Watch for Man" },
						{ img: n2, text: "Woman's Seiko Watch" },
						{ img: n3, text: "New Apple Brand Smart Watch" },
						{ img: n4, text: "Woman's Seiko Watch" },
						{ img: n1, text: "Autopy Watch for Women" },
						{ img: n2, text: "New Apple Brand Smart Watch" },
						{ img: n3, text: "Autopy Watch for Women" },
						{ img: n4, text: "New Apple Brand Smart Watch" },
					]}
				/>
			</section>

      <section>
        <Community />
      </section>

      <section>
        <Testimonial />
      </section>

      <section>
        <Explore />
      </section>

      <section>
        <Subscribe />
      </section>

			<Footer />
		</main>
	);
}

