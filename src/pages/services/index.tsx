/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Data from "../../components/data.json";
import Link from "next/link";
import ClientComp from "../../components/ClientComp";
import { createSlug } from "../../utils/string.utils";

const Services = () => {
	const services = Data.map((service) => ({
		...service,
		slug: createSlug(service.title),
	}));

	return (
		<FrontLayout>
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
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-danger hug">Book Service</button>
						</div>

						<div className="services-list">
							{services.map((item, i) => (
								<ServiceItemComp key={i} />
							))}
						</div>
					</div>
				</section>

				<section className="more-details-wrapper container">
					<div className="more-details-inner">
						<div className="more-details-inner_top">
							<p>Still have a question(s) ?</p>
							<button className="btn btn-outline-danger hug">Contact Us</button>
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
							<div className="statistics-info">
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

const ServiceItemComp = () => (
	<div className="services-items">
		<div className="service-item-inner">
			<div className="services-item-image">
				<img src="/images/services/steel1.png" alt="ig" />
			</div>
			<div className="content">
				<p>Title</p>
				<div className="texts">
					Ralonick Service Limited Offer a complete range of advanced insulation solutions for the oil and gas and food
					and beverages industries. Our products range covers various insulation requirements for piping and equipment
					systems, and insulation of subsea systems. Or uproducts range meets demanding NORSOK requirement and suited
					for tough environmental conditions
				</div>
				<div className="services-info">
					<div className="services-info-list">
						<Link href={`/services/jdjdj`}>
							<a className="d-flex align-items-center gap-2">
								Learn More
								<img style={{ width: "0.5rem", height: "0.5rem" }} src="/assets/learnMoreArrow.png" alt="arrow" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);
