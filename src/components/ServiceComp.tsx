/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "./data.json";

import { useSwiper } from "swiper/react";

export const SwiperButtonNext = () => {
	const swiper = useSwiper();

	return (
		<div className="section5-arrows">
			{" "}
			<div className="line"></div>
			<div className="arrows">
				<button onClick={() => swiper.slidePrev()} className="prev">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button onClick={() => swiper.slideNext()} className="next">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};

const ServiceComp = () => {
	return (
		<Swiper
			className="services container"
			spaceBetween={10}
			slidesPerView={3}
			navigation
			loopFillGroupWithBlank={true}
			speed={1000}
			breakpoints={{
				1161: {
					slidesPerView: 3,
				},
				890: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 1,
				},
				200: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
			}}
		>
			{Data.map((item) => {
				return (
					<SwiperSlide key={item.id} className="services-items">
						<img src={item.image} alt="ig" />
						<div className="content">
							<p>{item.title}</p>
							<div className="texts">{item.text}</div>
						</div>
					</SwiperSlide>
				);
			})}

			<SwiperButtonNext />
		</Swiper>
	);
};

export default ServiceComp;
