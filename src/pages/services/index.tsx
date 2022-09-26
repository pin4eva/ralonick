/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import ClientComp from "components/ClientComp";
import Data from "components/data.json";
import ServiceComp from "components/ServicesComp/ServiceComp";
import FrontLayout from "layouts/front.layout";
import { createSlug, truncateText } from "utils/string.utils";

export interface IService {
	image?: string;
	title?: string;
	slug?: string;
	description?: string;
	subtitle?: string;
	subtext?: string;
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
	// const [disableNext, setDisableNext] = useState(false);
	// const [disablePrev, setDisablePrev] = useState(true);
	const [service, setService] = useState<IService>();

	return (
		<FrontLayout>
			<div className="service container">
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
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-danger hug">Book Service</button>
						</div>

						{Data.map((item, i) => (
							<ServiceComp
								key={i}
								setOpen={() => setService(item?.title === service?.title ? undefined : item)}
								open={service?.title === item?.title}
								service={item}
							/>
						))}
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
		</FrontLayout>
	);
};

export default Services;
