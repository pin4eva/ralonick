import React from "react";
import { ClientReviews } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import "swiper/css/autoplay";

const ClientComp = () => {
	return (
		<Swiper
			className="client-reviews-wrapper container"
			modules={[Pagination, Autoplay]}
			autoplay={true}
			spaceBetween={50}
			slidesPerView={1}
			pagination={{ clickable: true }}
			speed={1000}
		>
			{ClientReviews.map((item) => {
				return (
					<SwiperSlide className="client-reviews-inner" key={item.id}>
						<p className="client-reviews-inner-text">{item.text}</p>
						<div className="client-reviews-profile">
							<img src={item.image} alt="" />
							<h3>{item.names}</h3>
							<p className="client-position">{item.position}</p>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ClientComp;
