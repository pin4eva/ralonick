/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Data from "../../components/data.json";
import Link from "next/link";

const Services = () => {
	return (
		<FrontLayout>
			<div className="service-section">
				<section className="first-part container">
					<div className="image">
						<img src="/assets/about1.png" alt="about" />
					</div>
					<div className="ltd">Ralonik LTD. Services</div>
				</section>
				<section className="second-part container">
					<div className="solution">
						<h2>We build Solutions</h2>
						<div className="book">
							<p>
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-danger hug">Book Service</button>
						</div>

						<div className="services">
							{Data.map((item) => {
								return (
									<div key={item.id} className="items">
										<img src={item.image} alt="ig" />
										<div className="tt">
											<p>{item.sub}</p>
											<div className="texts">{item.text}</div>
											<div className="read">
												<div className="point">
													<Link href="/services/jgjj">
														<a>{item.learn}</a>
													</Link>
												</div>
												<div className="row">
													<Link href="/">
														<a>
															<img src={item.btn} alt="arrow" />
														</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="arr">
							<img src="/assets/keyboardArrowLeft.png" alt="lt" />
							<img src="/assets/keyboardArrowRight.png" alt="rt" />
						</div>
					</div>
				</section>

				<section className="third-part container">
					<div className="quest">
						<p>Still have a question(s) ?</p>
						<button className="btn btn-outline-danger hug">Contact Us</button>
					</div>
					<div className="grid-con">
						<div className="grid-item">
							<p className="no">25+</p>
							<p className="letter">Completed Projects</p>
						</div>
						<div className="grid-item">
							<p className="no">25+</p>
							<p className="letter">Completed Projects</p>
						</div>
						<div className="grid-item">
							<p className="no">25+</p>
							<p className="letter">Completed Projects</p>
						</div>
						<div className="grid-item">
							<p className="no">25+</p>
							<p className="letter">Completed Projects</p>
						</div>
					</div>
				</section>

				<section className="home-section-6">
					<div className="section6-inner">
						<h2>Clients Reviews</h2>
						<p className="section6-inner-txt1">
							{`I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!`}
						</p>
						<div className="section6-inner-profile">
							<img src="/assets/clientPic.png" alt="" />
							<h3>Cindy Clifford</h3>
							<p className="section6-inner-profile_caption">Creative Director Sobaz Oil and gas</p>
						</div>
						<img src="/assets/reviewslider.png" alt="" />
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default Services;
