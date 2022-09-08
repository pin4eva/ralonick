/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "./data.json";

import { useSwiper } from "swiper/react";

export const SwiperButtons = () => {
	const swiper = useSwiper();

	return (
		<div className="swiper-clicks">
			{" "}
			<div className="line"></div>
			<div className="arrows">
				<button onClick={() => swiper.slidePrev()} className="swiper-control">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button onClick={() => swiper.slideNext()} className="swiper-control">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};

const ServiceComp = () => {
	return (
		<Swiper
			className="service-swiper-card"
			spaceBetween={5}
			slidesPerView={3}
			navigation
			loopFillGroupWithBlank={true}
			speed={1000}
			breakpoints={{
				1161: {
					slidesPerView: 3,
					spaceBetween: 5,
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
			{Data.map((item, i) => {
				return (
					<SwiperSlide key={i} className="service-swiper-card-items">
						<img src={item.image} alt="" />
						<div className="title">
							<p className=" fw-600">{item.title}</p>
						</div>
						<div className="description">
							<p>{item.text.slice(0, 200)}</p>
						</div>
					</SwiperSlide>
				);
			})}

			<SwiperButtons />
		</Swiper>
	);
};

export default ServiceComp;
