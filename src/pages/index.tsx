/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";
import "animate.css"
const Home = () => {
	return (
		<div>
			<FrontLayout>
				<div className="home-page container animate__animated animate__zoomInUp">
					<section className="home-hero">
						<div className="home-hero_upper">
							<div className="home-hero_upper-left">
								<div className="home-hero_uppeer-left_image">
									<img src="./images/frame9.png" alt="" />
								</div>
								<div className="home-hero_upper-left_scroll">
									<div className="home-hero_upper-left_scroll-line"></div>
									<i className="fa-solid fa-chevron-left"></i>
									<i className="fa-solid fa-chevron-right"></i>
								</div>
							</div>

							<div className="home-hero_uppper-right ">
								<div className="home-hero_upper-right_text">
									<div className="home-hero_upper-right_text-upper">
										<h1>Diverse & Flexible Structure</h1>
									</div>
									<div className="home-hero_upper-rigth_text_lower">
										<p className="fs-18 fw-500">End to end
											service in the design, engineering, procurement, fabrication,
											installation, repair of (GRE), (GRP) and Vinylester Pipe system and products.</p>
									</div>
								</div>
								<div className="home-hero_upper-right_button">
									<Link href="/projects"><button className="btn btn hug bg-danger">See projects</button></Link>
								</div>
							</div>
						</div>
						<div className="home-hero_lower animate__animated animate__zoomInRight">
							<div className="home-hero_lower-inner">
								<div className="home-hero_lowwer-inner-video">
									<div className="home-hero_lower_play-box">
										<div className="home-hero_lower_play-box-play-button">
											<img src="./images/playarrow.png" alt="" />
										</div>
										<div className="home-hero_lower_play-box-inner">
											<div className="home-hero_lower_play-box-inner-text">
												<h3 className="fs-18 fw-600">Watch Video Tour</h3>
												<p className="fw-500 fs-14">5:15 min</p>
											</div>
										</div>
									</div>
									<div className="home-hero_lower_inner-video-image">
										<img src="./images/frame8.png" alt="" />
									</div>

								</div>

							</div>
						</div>
					</section>
					<section className="home-first-section">
						<div className="home-first-section-inner">
							<div className="home-first-section_inner-left animate__animated animate__zoomInLeft">
								<div className="home-first-section_inner-left_image">
									<img src="./images/twohelmet.png" alt="" />
								</div>
							</div>
							<div className="home-first-section-inner-right animate__animated animate__zoomInRight">
								<div className="home-first-section_inner-right_text">
									<div className="home-first-section_inner-right_text_upper">
										<h3>ROLANIK</h3>
										<h1>About Us</h1>
									</div>
									<div className="home-first-section_inner-right_text_lower">
										<p>Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with sole interest in operation and maintenance of production facilities, local and foreign procurement of oil & gas materials and consultation.</p>
										<p>
											Our operation is based on a diverse and flexible structure. We
											adopt a system of Total quality Management (TQM) at a
											reasonable cost and within the shortest possible time, in
											conjunction with our technical partners. We provide end to end
											service in the design, engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
											(GRE) Polyester (GRP) and Vinylester Pipe system and products.
										</p>
									</div>
								</div>
								<div className="home-first-section_inner-right_button">
									<Link href="/about"><button className="button hug">Learn More</button></Link>
								</div>
							</div>
						</div>
					</section>
					<section className="home-second-section">
						<div className="home-second-section_inner">
							<div className="home-second-section_inner_left">
								<div className="home-second-section_inner-left_text">
									<div className="homesecond-section_inner-left_text_upper">
										<h3>ROLANIK</h3>
										<h3>Who We Are ...</h3>
									</div>
									<div className="home-second-section-_inner-left_text_second-line">
										<h1>Transforming
											With Innovations</h1>
									</div>
									<div className="home-second-section_inner-left_text_lower">
										<p>Ralonick Constructions operates within the framework of commercial and industrial activities, developing and carrying out basic and detailed services in engineering, procurement, construction, equipment leasing and marine. </p>
										<p>We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.</p>
									</div>
								</div>
								<div className="home-second-section_inner-left_box">
									<div className="home-second-section_inner-left_box_inner">
										<div className="home-second-section_inner-left_box_inner-text first">

											<h1>25+</h1>
											<p>Trusted Partners</p>

										</div>
										<div className="home-second-section_inner-left_box_inner-text second">
											<h1>50+</h1>
											<p>Satisfied Clients</p>

										</div>
										<div className="home-second-section_inner-left_box_inner-text third">
											<h1>5+</h1>
											<p>Years Experience</p>

										</div>
									</div>
								</div>
							</div>
							<div className="home-second-section-inner_right">
								<div className="home-second-section_inner_right-inner">
									<div className="home-second-section_inner-right-inner-one">
										<img src="./images/rectangle1.png" alt="" />
									</div>
									<div className="home-second-section_inner-right-inner-two">
										<img src="./images/rectangle2.png" alt="" />
									</div>
									<div className="home-second-section_inner-right-inner-third">
										<img src="./images/rectangle3.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="home-third-section">
						<div className="home-third-section_inner">
							<div className="home-third-section_inner_left">
								<div className="home-third-section_inner_left-image">
									<img src="./images/rectangle4.png" alt="" />
								</div>
							</div>
							<div className="home-third-section-inner-right">
								<div className="home-third-section-inner-right-header">
									<h1>Why Choose Us</h1>
								</div>
								<div className="home-third-section-inner-right_box">
									<div className="home-third-section-inner-right_box-table">

										<div className="home-third-section-inner-right_box-table-inner one">
											<div className="home-third-section-inner-right-box-table-inner_img">
												<img src="./images/badge.png" alt="" />
											</div>
											<div className="home-third-section-inner-right_box-table_inner_text">
												<h3>Quality</h3>
												<p>
													Great service delivery is incomplete without quality. It is our core value of operation, we achieve this by employing the policy of harnessing available resources, experience (of higly skilled engineers) and technical expertise.
												</p>
											</div>
										</div>
										<div className="home-third-section-inner-right_box-table-inner two">
											<div className="home-third-section-inner-right-box-table-inner_img">
												<img src="./images/union.png" alt="" />
											</div>
											<div className="home-third-section-inner-right_box-table_inner_text">
												<h3>Integrity</h3>
												<p>
													Service entails a lot of commitment laced with passion, with years of experience and service provision, we stand for excellent and honest work as we stay true to our words.
													Maintaining the trust placed in us by all our clients and stakeholders is key to us.
												</p>
											</div>
										</div>
										<div className="home-third-section-inner-right_box-table-inner third">
											<div className="home-third-section-inner-right-box-table-inner_img">
												<img src="./images/bag.png" alt="" />
											</div>
											<div className="home-third-section-inner-right_box-table_inner_text">
												<h3>Professionalism</h3>
												<p>
													Skill and competence are as important as practice therefore all staff are highly trained, possess high experiential knowledge in the field, and are highly professional.
													We value professionalism, to us it means giving clients the best value for their money.
												</p>
											</div>
										</div>
										<div className="home-third-section-inner-right_box-table-inner fourth">
											<div className="home-third-section-inner-right-box-table-inner_img">
												<img src="./images/helmet.png" alt="" />
											</div>
											<div className="home-third-section-inner-right_box-table_inner_text">
												<h3>Safety</h3>
												<p>
													As one of our offered service we are not lacking in ensuring that our installations and technical works are properly done.
													We have zero reservations as regards safety. Our staff are highly trained for personal & on-site safety.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="home-fourth-section">
						<div className="home-fourth-section-inner">
							<div className="home-fourth-section-inner_top">
								<h1>Our Services</h1>
								<div className="home-fourth-section-inner-top-text">
									<p>At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine.</p>
									<div className="home-fourth-section-inner_top_button">
										<Link href="/services"><button className="button hug">All Services</button></Link>
									</div>
								</div>

							</div>
							<div className="home-fourth-section-inner_card">
								<div className="home-fourth-section-inner_card-inner">
									<div className="home-fourth-section_inner-card-inner one">
										<div className="home-fourth-section-inner_card-inner_image">
											<img src="./images/frame44.png" alt="" />
										</div>
										<div className="home-fourth-section-inner_card-inner_text">
											<h3>Active & Passive Fire Proofing</h3>
											<p>Fire Proofing is a vital component for any structure to ensure safety of lives and minimal financial loss of properties. Ralonick offers professional fire proofing services ranging from cemetitious fire proofing, to Automatic fire suppression, etc.</p>
											<Link href={'/services/single-service'}>
												<a>Learn More <img src="./images/vector2.png" alt="" /></a>
											</Link>
										</div>
									</div>
									<div className="home-fourth-section_inner-card-inner one">
										<div className="home-fourth-section-inner_card-inner_image">
											<img src="./images/frame46.png" alt="" />
										</div>
										<div className="home-fourth-section-inner_card-inner_text">
											<h3>Field Joint Coating Services</h3>
											<p>This involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick offers engineering design & fabrication of customized field joint coating equipment which involves liquid applied materials.</p>
											<Link href={'/services/single-service'}>
												<a>Learn More <img src="./images/vector2.png" alt="" /></a>
											</Link>
										</div>
									</div>
									<div className="home-fourth-section_inner-card-inner one">
										<div className="home-fourth-section-inner_card-inner_image">
											<img src="./images/frame45.png" alt="" />
										</div>
										<div className="home-fourth-section-inner_card-inner_text">
											<h3>Procurement & Installation of FRP/GRP</h3>
											<p>In conjunction with our foreign partners AOCOMM Composite Limited(major manufacturers of FRP and GRP Products) we secure leadership in the area of technical support, procurement and maintenance for upstream and downstream oil and gas refinery.</p>
											<Link href={'/services/single-service'}>
												<a>Learn More <img src="./images/vector2.png" alt="" /></a>
											</Link>
										</div>
									</div>


								</div>
							
							</div>
							<div className="home-hero_upper-left_scroll">
									<div className="home-hero_upper-left_scroll-line"></div>
									<i className="fa-solid fa-chevron-right"></i>
									<i className="fa-solid fa-chevron-left"></i>
								</div>
						</div>
						
					</section>
					<section className="home-fifth-section">
						<div className="home-fifth-section-inner">
							<div className="home-fifth-section-inner_text">
								<h1>Clients Reviews</h1>
							</div>

							<div className="home-fifth-section-inner_profile">
								<div className="home-fifth-section-inner_profile-text-testimonial">
									<p>I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!</p>
								</div>
								<div className="home-fifth-section-inner_profile-img">
									<img src="./images/image.png" alt="" />
								</div>
								<div className="home-fifth-section-inner_profile-text-info">
									<h3>Cindy Clifford</h3>
									<p>Creative Director Sobaz Oil and gas</p>
								</div>
								<div className="home-fifth-section-inner_profile-slider">
									<div className="home-fifth-section-inner_profile-slider1">

									</div>
									<div className="home-fifth-section-inner_profile-slider2">

									</div>
									<div className="home-fifth-section-inner_profile-slider3">

									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</FrontLayout>
		</div>
	)
}
export default Home