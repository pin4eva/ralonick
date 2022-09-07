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
			<div className="service-section container">
				<section className="service-section-hero">
					<div className="inner container">
						<div className="service-section-hero-image">
							<img src="/assets/about1.png" alt="about" />
						</div>
						<div className="service-section-hero-text">Ralonik LTD. Services</div>
					</div>
				</section>

				<section className="services-intro container">
					<div className="services-intro-inner">
						<h2>We build Solutions</h2>
						<div className="services-offer">
							<p>
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

				<section className="third-part container">
					<div className="third-part-inner">
						<div className="third-part-inner-top-info">
							<p>Still have a question(s) ?</p>
							<button className="btn btn-outline-danger hug">Contact Us</button>
						</div>
						<div className="third-part-inner-bottom-info">
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">
									25 <sup>+</sup>
								</p>
								<p className="data">Completed Projects</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">
									25 <sup>+</sup>
								</p>
								<p className="data">Trusted Partners</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">
									50 <sup>+</sup>
								</p>
								<p className="data">Satisfied Clients</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">
									5 <sup>+</sup>
								</p>
								<p className="data">Years Experience</p>
							</div>
						</div>
					</div>
				</section>
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
