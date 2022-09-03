import React from "react";
import Data from "./data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Link from "next/link";

const ServiceComp = () => {
	return (
		<Swiper
			className="services container"
			modules={[Navigation, Autoplay]}
			spaceBetween={10}
			slidesPerView={3}
			navigation
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			loop={true}
			loopFillGroupWithBlank={true}
			speed={1000}
			breakpoints={{
				1161: {
					slidesPerView:3
				},
				890: {
					slidesPerView:2
				},
				768: {
					slidesPerView:1
				},
				200: {
					slidesPerView:1,
					spaceBetween:30
				}
			}}
		>
			{Data.map((item) => {
				return (
					<SwiperSlide key={item.id} className="services-items">
						<img src={item.image} alt="ig" />
						<div className="content">
							<p>{item.sub}</p>
							<div className="texts">{item.text}</div>
							{/* <div className="services-info">
								<div className="services-info-list">
									<Link href="/services/jgjj">
										<a>{item.learn}</a>
									</Link>
								</div>
								<div className="services-info-pointer">
									<a href="/services/jgjj">
										<img src={item.btn} alt="arrow" />
									</a>
								</div>
							</div> */}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ServiceComp;
