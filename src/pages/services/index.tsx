/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Data from "../../components/data.json";
import Link from "next/link";
import ClientComp from "../../components/ClientComp";

const Services = () => {
	return (
		<FrontLayout>
			<div className="service-section">
				<section className="service-section-hero ">
					<div className="inner container">
						<div className="service-section-hero-image">
							<img src="/assets/about1.png" alt="about" />
						</div>
						<div className="service-section-hero-text">Ralonik LTD. Services</div>
					</div>
				</section>
				
				<section className="second-part container">
					<div className="second-part-inner">
						<h2>We build Solutions</h2>
						<div className="services-offer">
							<p>
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-danger hug">Book Service</button>
						</div>

						<div className="services">
							{Data.map((item) => {
								return (
									<div key={item.id} className="services-items">
										<img src={item.image} alt="ig" />
										<div className="content">
											<p>{item.sub}</p>
											<div className="texts">{item.text}</div>
											<div className="services-info">
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
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="second-part-inner-bottom-arrow">
							<img src="/assets/keyboardArrowLeft.png" alt="lt" />
							<img src="/assets/keyboardArrowRight.png" alt="rt" />
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
								<p className="years">25 <sup>+</sup></p>
								<p className="data">Completed Projects</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">25 <sup>+</sup></p>
								<p className="data">Trusted Partners</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">50 <sup>+</sup></p>
								<p className="data">Satisfied Clients</p>
							</div>
							<div className="third-part-inner-bottom-info-collation">
								<p className="years">5 <sup>+</sup></p>
								<p className="data">Years Experience</p>
							</div>
						</div>
					</div>
				</section>

				<ClientComp />

				{/* <section className="fourth-part container">
					<div className="fourth-part-inner">
						<h2>Clients Reviews</h2>
						<p className="fourth-part-inner-txt1">
							{`I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!`}
						</p>
						<div className="fourth-part-inner-profile">
							<img src="/assets/clientPic.png" alt="" />
							<h3>Cindy Clifford</h3>
							<p className="fourth-part-inner-profile_caption">Creative Director Sobaz Oil and gas</p>
						</div>
						<img src="/assets/reviewslider2.png" alt="" />
					</div>
				</section> */}
			</div>
		</FrontLayout>
	);
};

export default Services;
