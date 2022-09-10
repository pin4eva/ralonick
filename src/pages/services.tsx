/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import Data from "../components/data.json";
import Link from "next/link";

const ServicesPage = () => {
	return (
		<FrontLayout>
			<div className="service-page container">
				<section className="service-hero">
					<div className="service-hero-image">
						<img src="/assets/service_hero_img.png" alt="hero-img" />
					</div>
					<div className="service-hero-text">Ralonik LTD. <br /> Services</div>
				</section>

				<section className="second-segment">
					<div className="services">
						<h2>We build Solutions</h2>
						<div className="services-text">
							<p>
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-danger hug">Book Service</button>
						</div>
						<div className="services-cards">
							{Data.map((single) => {
								return (
									<div key={single.id} className="single-service">
										<div className="service-images">
											<img src={single.image} alt="" />
										</div>
										<div className="service-content">
											<h5 className="content-heading">{single.sub}</h5>
											<p>{single.text}</p>
											<div className="content-box">
												<h5 className="content-link">
													<Link href="/">{single.learn}</Link>
												</h5>
												<div className="image-arrow">
													<img src={single.btn} alt="" />
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="second-segment-arrows">
							<img src="/assets/keyboardArrowLeft.png" alt="" />
							<img src="/assets/keyboardArrowRight.png" alt="" />
						</div>
					</div>
				</section>

				<section className="third-segment">
					<p>Still have a question(s) ?</p>
					<button className="btn btn-outline-danger hug">Contact Us</button>

					<div className="records">
						<div className="records-grid">
							<h5>25 <sup>+</sup></h5>
							<p>Completed Projects</p>
						</div>
						<div className="records-grid">
							<h5>25 <sup>+</sup></h5>
							<p>Trusted Partners</p>
						</div>
						<div className="records-grid">
							<h5>50 <sup>+</sup></h5>
							<p>Satisfied Clients</p>
						</div>
						<div className="records-grid">
							<h5>5 <sup>+</sup></h5>
							<p>Years Experience</p>
						</div>
					</div>
				</section>

                <section className="fourth-segment">
                    <h2>Clients Reviews</h2>
                    <div className="fourth-segment-text">
                    I had been looking to get my shipment and maintenance done but could not find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!
                    </div>
                    <div className="profile">
                        <div className="profile-image">
                            <img src="/assets/clientPic.png" alt="" />
                        </div>
                        <div className="profile-text">
                            <h5>Cindy Clifford</h5>
                            <p>Creative Director Sobaz Oil and gas</p>
                            <img src="/assets/reviewslider2.png" alt="" />
                        </div>
                    </div>
                </section>
			</div>
		</FrontLayout>
	);
};

export default ServicesPage;
