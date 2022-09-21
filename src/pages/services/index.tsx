/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Data from "../../components/data.json";
import Link from "next/link";
import ClientComp from "../../components/ClientComp";
import { createSlug, truncateText } from "../../utils/string.utils";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtons } from "..";
import { useState } from "react";
import ServiceInterface from "../../components/ServicesComp/service_interface";
import AllserviceComp from "../../components/ServicesComp/AllserviceComp";

export interface IService {
	image: string;
	title: string;
	slug: string;
	description: string;
	subtitle: string;
	subtext: string;
	images?: string[];
}

export const services: IService[] = Data.map((service, i) => ({
	slug: createSlug(service.title),
	title: service.title,
	image: service.image,
	description: service.text,
	subtitle: service.subtitle,
	subtext: service.subtext,
	images: service.images,
}));

const Services = () => {
	const [disableNext, setDisableNext] = useState(false);
	const [disablePrev, setDisablePrev] = useState(true);

	return (
		<FrontLayout>
			<>
				<div className="service-wrapper container">
					<section className="service-hero-section">
						<div className="image-wrapper">
							<img src="/assets/about1.png" alt="about" />
						</div>
						<p className="text-wrapper">Ralonik LTD. Services</p>
					</section>

					<section className="services-intro">
						<div className="services-intro-inner">
							<h1>We build Solutions</h1>
							<div className="services-intro-description">
								<p className="description-text fw-500">
									At Ralonick, we offer a wide range of services from engineering, procurement, construction, to
									equipment leasing for land & marine.
								</p>
								<button className="btn btn-danger hug">Book Service</button>
							</div>

							<Swiper
								className="services-list"
								spaceBetween={5}
								slidesPerView={2}
								navigation
								loopFillGroupWithBlank={true}
								speed={1000}
								breakpoints={{
									1370: {
										slidesPerView: 2,
									},
									1161: {
										slidesPerView: 2,
									},
									890: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 1,
									},
									200: {
										slidesPerView: 1,
									},
								}}
								onSlideChange={(e) => {
									e.isBeginning ? setDisablePrev(true) : setDisablePrev(false);
									e.isEnd ? setDisableNext(true) : setDisableNext(false);
								}}
							>
								{services.map((item, i) => (
									<SwiperSlide key={i}>
										<ServiceItemComp service={item} />
									</SwiperSlide>
								))}
								<div className="control-wrapper">
									<SwiperButtons disableNext={disableNext} disablePrev={disablePrev} />
								</div>
							</Swiper>
						</div>
					</section>

					<section className="more-details-wrapper container">
						<div className="more-details-inner">
							<div className="more-details-inner_top">
								<p>Still have a question(s) ?</p>
								<Link href="/contact">
									<button className="btn btn-outline-danger hug">Contact Us</button>
								</Link>
							</div>
							<div className="statistics">
								<div className="border-none statistics-info">
									<p className="primary-bold">25+</p>
									<p className="primary-light">Completed Projects</p>
								</div>
								<div className="statistics-info">
									<p className="primary-bold">25+</p>
									<p className="primary-light">Trusted Partners</p>
								</div>
								<div className="statistics-info border-left-none">
									<p className="primary-bold">50+</p>
									<p className="primary-light">Satisfied Clients</p>
								</div>
								<div className="border-none statistics-info ">
									<p className="primary-bold">5+</p>
									<p className="primary-light">Years Experience</p>
								</div>
							</div>
						</div>
					</section>
					<h1 className="testimonial-head">Client Reviews</h1>
					<ClientComp />
				</div>
				<AllserviceComp />
			</>
		</FrontLayout>
	);
};

export default Services;

const ServiceItemComp: React.FC<{ service: IService }> = ({ service }) => (
	<div className="services-items">
		<div className="service-item-inner">
			<div className="services-item-image">
				<img src={service?.image} alt="ig" />
			</div>
			<div className="content">
				<p className="title">{service?.title}</p>
				<div className="texts">{truncateText(service.description)}......</div>
				<div className="single-service-link">
					<Link href={`/services/${service?.slug}`}>
						<a className="text-on-click">
							Learn More
							<img src="/assets/learnMoreArrow.png" alt="arrow" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	</div>
);
