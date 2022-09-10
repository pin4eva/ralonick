/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";

const HomePage = () => {
	return (
		<FrontLayout>
			<div className="home container">
				<section className="home-hero ">
					<div className="inner">
						<div className="inner-content">
							<div className="inner-left">
								<div className="inner-left-image">
									<img src="assets/hero_img1.png" alt="" />
								</div>
								<div className="inner-left-arrow_img">
									<img src="/assets/keyboardArrowLeft.png" alt="" />
									<img src="/assets/keyboardArrowRight.png" alt="" />
								</div>
							</div>
							<div className="hero-text">
								<h2>Diverse & Flexible Structure</h2>
								<p>
									End to end service in the design, engineering, procurement, fabrication, installation, repair of
									(GRE), (GRP) and Vinylester Pipe system and products.
								</p>
								<button className="btn btn-danger">See Projects</button>
							</div>
						</div>
						<div className="inner-right">
							<div className="inner-right-image">
								<img src="/assets/hero_img2.png" alt="" />
							</div>
							{/* <div className="inner-right-video-desc">
								<img src="/assets/Frame 10.png" alt="" />
							</div> */}
						</div>
					</div>
				</section>

				<section className="about-section">
					<div className="about-inner">
						<div className="about-inner-left">
							<img src="/assets/about_img.png" alt="" />
						</div>
						<div className="about-inner-right">
							<h5>ROLANIK</h5>
							<h2>About Us</h2>
							<p>
								Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with
								sole interest in operation and maintenance of production facilities, local and foreign procurement of
								oil & gas materials and consultation. Our operation is based on a diverse and flexible structure. We
								adopt a system of Total quality Management (TQM) at a reasonable cost and within the shortest possible
								time, in conjunction with our technical partners. We provide end to end service in the design,
								engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
								(GRE) Polyester (GRP) and Vinylester Pipe system and products.
							</p>
							<button className="btn btn-outline-danger hug">Learn More</button>
						</div>
					</div>
				</section>

				<section className="home-section-3">
					<div className="section-3-inner">
						<div className="section-3-inner-left">
							<h5>ROLANIK</h5>
							<p className="sub-text">Who We Are ...</p>
							<div className="transform-text">
								<h2>Transforming With Innovations</h2>
								<p>
									Ralonick Constructions operates within the framework of commercial and industrial activities,
									developing and carrying out basic and detailed services in engineering, procurement, construction,
									equipment leasing and marine. We exceed our clients trust through the timely delivery of quality,
									satisfactory products and services.
								</p>
								<div className="record">
									<div className="record-grid">
										<h5>
											25 <sup>+</sup>
										</h5>
										<p>Trusted Partners</p>
									</div>
									<div className="record-grid">
										<h5>
											50 <sup>+</sup>
										</h5>
										<p>Satisfied Clients</p>
									</div>
									<div className="record-grid">
										<h5>
											5 <sup>+</sup>
										</h5>
										<p>Years Experience</p>
									</div>
								</div>
								<br />
							</div>
						</div>
						<div className="section-3-inner-right">
							<img src="/assets/who_img1.png" alt="" />
						</div>
					</div>
				</section>

				<section className="home-section-4">
					<div className="section4-inner">
						<div className="section4-image">
							<img src="/assets/why__img.png" alt="" />
						</div>
						<div className="section4-text">
							<h3>Why Choose Us</h3>
							<div className="section4-grid">
								<div className="grid-box">
									<img src="/assets/img1.png" alt="" />
									<h5>Quality</h5>
									<p>
										Great service delivery is incomplete without quality. It is our core value of operation, we achieve
										this by employing the policy of harnessing available resources, experience (of higly skilled
										engineers) and technical expertise.
									</p>
								</div>
								<div className="grid-box">
									<img src="/assets/img2.png" alt="" />
									<h5>Integrity</h5>
									<p>
										Service entails a lot of commitment laced with passion, with years of experience and service
										provision, we stand for excellent and honest work as we stay true to our words. Maintaining the
										trust placed in us by all our clients and stakeholders is key to us.
									</p>
								</div>
								<div className="grid-box">
									<img src="/assets/img3.png" alt="" />
									<h5>Professionalism</h5>
									<p>
										Skill and competence are as important as practice therefore all staff are highly trained, possess
										high experiential knowledge in the field, and are highly professional. We value professionalism, to
										us it means giving clients the best value for their money.
									</p>
								</div>
								<div className="grid-box">
									<img src="/assets/img4.png" alt="" />
									<h5>Safety</h5>
									<p>
										As one of our offered service we are not lacking in ensuring that our installations and technical
										works are properly done. We have zero reservations as regards safety. Our staff are highly trained
										for personal & on-site safety.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="home-section-5"></section>

				<section className="home-section-6">
					<h2>Clients Reviews</h2>
					<div className="section6-text">
						I had been looking to get my shipment and maintenance done but could not find the right Construction Company
						to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement,
						constructing in itself and maintenance it has been worth it. They understood the job and they delivered!
						Thank you!
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

				<section className="home-section-7">
					<div className="section7-inner">
						<div className="section7-inner-sub">
							<img src="/assets/projects1.png" alt="" className="large-img" />
							<div className="section7-inner-sub_text">
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>
								<Link href="/" className="text-link">
									<a className="text-link_link">
										More Details <img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="section7-inner-sub sub-2">
							<img src="/assets/projects2.png" alt="" className="large-img" />
							<div className="section7-inner-sub_text sub-2_text">
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>

								<Link href="/" className="text-link">
									<a className="text-link_link">
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="section7-inner-sub">
							<img src="/assets/projects3.png" alt="" className="large-img" />
							<div className="section7-inner-sub_text">
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>

								<Link href="/" className="text-link">
									<a className="text-link_link">
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="last-part">
							<div className="section7-inner-btn">
								<button className="button hug">Contact Us</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default HomePage;
