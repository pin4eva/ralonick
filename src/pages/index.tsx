/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";
const Home = () => {
	return (
		<div>
			<FrontLayout>
				<div className="home-page container">
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

							<div className="home-hero_uppper-right">
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
						<div className="home-hero_lower">
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
							<div className="home-first-section_inner-left">
								<div className="home-first-section_inner-left_image">
									<img src="./images/twohelmet.png" alt="" />
								</div>
							</div>
							<div className="home-first-section-inner-right">
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
					<section className="home-sixth-section">
						<div className="home-sixth-section-inner">
							<div className="home-sixth-section-inner_header">
								<h1>Our Projects</h1>
							</div>
							<div className="home-sixth-section-inner_magazine">

								<div className="home-sixth-ssection-inner_magazine-inner">
									<div className="home-sixth-section-inner_magazine-inner-part one">
										<div className="home-sixth-section-inner_magazine-inner-box">
											<div className="home-sixth-section-inner_magazine-inner-box_text-box">
												<h3>Project Name</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
												<Link href={'/projects'}>
													<a>More Details <img src="./images/vectorwhite.png" alt="" /></a>
												</Link>
											</div>
										</div>
										<div className="home-sixth-section-inner_magazine-inner-image">
											<img src="./images/project1.png" alt="" />
										</div>
									</div>
									<div className="home-sixth-section-inner_magazine-inner-part two">
										<div className="home-sixth-section-inner_magazine-inner-box">
											<div className="home-sixth-section-inner_magazine-inner-box_text-box">
												<h3>Project Name</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
												<Link href={'/projects'}>
													<a>More Details <img src="./images/vectorwhite.png" alt="" /></a>
												</Link>
											</div>
										</div>
										<div className="home-sixth-section-inner_magazine-inner-image">
											<img src="./images/project2.png" alt="" />
										</div>
									</div>
									<div className="home-sixth-section-inner_magazine-inner-part three">
										<div className="home-sixth-section-inner_magazine-inner-box">
											<div className="home-sixth-section-inner_magazine-inner-box_text-box">
												<h3>Project Name</h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
												<Link href={'/projects'}>
													<a>More Details <img src="./images/vectorwhite.png" alt="" /></a>
												</Link>
											</div>
										</div>
										<div className="home-sixth-section-inner_magazine-inner-image">
											<img src="./images/project3.png" alt="" />
										</div>
									</div>


								</div>
							</div>
							<div className="home-sixth-section-inner-button">
								<Link href="/services"><button className="btn btn hug bg-danger">All Services</button></Link>
							</div>
						</div>
					</section>

				</div>
			</FrontLayout>
		</div>
	)
}
export default Home
// import { useSwiper } from "swiper/react";
// import FrontLayout from "../layouts/front.layout";
// import Link from "next/link";
// import ClientComp from "../components/ClientComp";
// import ServiceComp from "../components/ServiceComp";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { SwiperSlide, Swiper } from "swiper/react";
// import { Navigation } from "swiper";
// import "swiper/css/navigation";
// // import { Autoplay } from "swiper";
// import { SwiperData } from "../components/Data";

// const SwiperButtonControl = () => {
// 	const swiper = useSwiper();
// 	// const myData = SwiperData;

// 	return (
// 		<div className="hero-arrows">
// 			{" "}
// 			<div className="line"></div>
// 			<div className="arrow-img">
// 				<button onClick={() => swiper.slidePrev()} className="left">
// 					<i className="fa-solid fa-chevron-left"></i>
// 				</button>
// 				<button onClick={() => swiper.slideNext()} className="right">
// 					<i className="fa-solid fa-chevron-right"></i>
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// const Home = () => {
// 	useEffect(() => {
// 		AOS.init();
// 		AOS.refresh();
// 	}, []);

// 	return (
// 		<FrontLayout>
// 			<div className="home">
// 				<section className="home-hero container">
// 					<div className="inner">
// 						<div className="left">
// 							<div className="inner-left">
// 								<Swiper
// 									className="hero_img1 container"
// 									modules={[Navigation]}
// 									spaceBetween={50}
// 									slidesPerView={1}
// 									navigation
// 									// autoplay={{
// 									// 	delay: 3000,
// 									// 	disableOnInteraction: false,
// 									// }}
// 									// loop={true}
// 									// loopFillGroupWithBlank={true}
// 									speed={1000}
// 								>
// 									{SwiperData.map((data) => {
// 										return (
// 											<SwiperSlide key={data.id}>
// 												<img className="img1" src={data.image} alt="hero" />
// 											</SwiperSlide>
// 										);
// 									})}
// 									<SwiperButtonControl />
// 									{/* <div className="hero-arrows">
// 										<div className="line"></div>
// 										<div className="arrow-img">
// 											<img src="/assets/keyboardArrowLeft.png" className="" alt="" />
// 											<img src="/assets/keyboardArrowRight.png" alt="" />
// 										</div>
// 									</div> */}
// 								</Swiper>

// 								<div className="hero-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
// 									<h1>{`Diverse & Flexible Structure `}</h1>
// 									<p>
// 										End to end service in the design, engineering, procurement, fabrication, installation, repair of
// 										(GRE), (GRP) and Vinylester Pipe system and products.
// 									</p>
// 									<Link href="/projects">
// 										<button className="btn btn-danger hug">See Projects</button>
// 									</Link>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="inner-right" data-aos="fade-up" data-aos-duration="3000" ease-in-out-quart>
// 							<div className="video-desc">
// 								<div className="video-desc-inner">
// 									<img src="/assets/PlayArrow.png" alt="" />
// 									<div>
// 										<p className="mb-0 desc-text">Watch Video Tour</p>
// 										<p className="duration mb-0">5:15 min</p>
// 									</div>
// 								</div>
// 							</div>
// 							<img className="img2" src="/assets/hero_img2.png" alt="" />
// 						</div>
// 					</div>
// 				</section>

// 				<section className="about-section container">
// 					<div className="about-inner">
// 						<div className=" about-inner-left" data-aos="fade-up" data-aos-duration="3000" ease-in-out-quart>
// 							<img className="about-img" src="/assets/about_img1.png" alt="" />
// 						</div>

// 						<div
// 							className="about_text_sect about-inner-right"
// 							data-aos-easing="ease-out-cubic"
// 							data-aos="fade-down"
// 							data-aos-duration="3000"
// 							ease-in-out-quart
// 						>
// 							<div className="right-text">
// 								<p className="text-danger fw-600">RALONICK</p>
// 								<h2 className="h1">About Us</h2>
// 								<p>
// 									Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with
// 									sole interest in operation and maintenance of production facilities, local and foreign procurement of
// 									oil & gas materials and consultation.
// 								</p>
// 								<p>
// 									Our operation is based on a diverse and flexible structure. We adopt a system of Total quality
// 									Management (TQM) at a reasonable cost and within the shortest possible time, in conjunction with our
// 									technical partners. We provide end to end service in the design, engineering, procurement,
// 									fabrication, installation, repair and support of Glass fiber Reinforced Epoxy (GRE) Polyester (GRP)
// 									and Vinylester Pipe system and products.
// 								</p>
// 								<Link href="/about">
// 									<button
// 										className="btn btn-outline-danger hug"
// 										data-aos="flip-left"
// 										data-aos-easing="ease-out-cubic"
// 										data-aos-duration="1500"
// 									>
// 										Learn More
// 									</button>
// 								</Link>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				<section className="home-section-3 container">
// 					<div className="section3-inner">
// 						<div className="section3-inner-left " data-aos="zoom-in-up" data-aos-duration="3000">
// 							<p className="text-danger">ROLANICK</p>
// 							<p className="section3-heading">Who We Are...</p>
// 							<h2>Transforming With Innovations</h2>
// 							<p className="section3-paragraph1">
// 								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
// 								and carrying out basic and detailed services in engineering, procurement, construction, equipment
// 								leasing and marine.
// 							</p>
// 							<p className="section3-paragraph2">{`We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.`}</p>
// 							<div className="info" fade-up-left data-aos-easing="ease-in-quad" data-aos-duration="1500">
// 								<div className="info-sub">
// 									<p>25+</p>
// 									<p>Trusted Partners</p>
// 								</div>
// 								<div className="info-sub">
// 									<p>50+</p>
// 									<p>Satisfied Clients</p>
// 								</div>
// 								<div className="info-sub">
// 									<p>5+</p>
// 									<p>Years Experience</p>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="section3-inner-right" data-aos="zoom-in-down" data-aos-duration="2500">
// 							<img src="/assets/who_img1.png" alt="" />
// 						</div>
// 					</div>
// 				</section>

// 				<section className="home-section-4 container">
// 					<div className="section4-inner">
// 						<div className="section4-inner-img" data-aos="fade-down" data-aos-duration="3000" ease-in-out-quart>
// 							<img src="/assets/why__img.png" alt="" />
// 						</div>
// 						<div className="section4-inner-text">
// 							<h2>Why Choose Us</h2>
// 							<div className="text_gridbox" data-aos="fade-up" data-aos-duration="3000" ease-in-out-quart>
// 								<div className="text_gridItem">
// 									<div className="empty-box"></div>
// 									<p className="grid-heading">Quality</p>
// 									<p>
// 										Great service delivery is incomplete without quality. It is our core value of operation, we achieve
// 										this by employing the policy of harnessing available resources, experience (of higly skilled
// 										engineers) and technical expertise.
// 									</p>
// 								</div>
// 								<div className="text_gridItem">
// 									<div className="empty-box"></div>
// 									<p className="grid-heading">Integrity</p>

// 									<p>
// 										Service entails a lot of commitment laced with passion, with years of experience and service
// 										provision, we stand for excellent and honest work as we stay true to our words. Maintaining the
// 										trust placed in us by all our clients and stakeholders is key to us.
// 									</p>
// 								</div>
// 								<div className="text_gridItem">
// 									<div className="empty-box"></div>
// 									<p className="grid-heading">Professionalism</p>
// 									<p>
// 										Skill and competence are as important as practice therefore all staff are highly trained, possess
// 										high experiential knowledge in the field, and are highly professional. We value professionalism, to
// 										us it means giving clients the best value for their money.
// 									</p>
// 								</div>
// 								<div className="text_gridItem">
// 									<div className="empty-box"></div>
// 									<p className="grid-heading">Safety</p>
// 									<p>
// 										As one of our offered service we are not lacking in ensuring that our installations and technical
// 										works are properly done. We have zero reservations as regards safety. Our staff are highly trained
// 										for personal & on-site safety.
// 									</p>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>

// 				<section className="home-section-5 container">
// 					<div className="section5-inner">
// 						<h2>Our Services</h2>
// 						<div className="section5-inner-text">
// 							<p>
// 								{`At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine.`}
// 							</p>
// 							<Link href="/services">
// 								<button className="btn btn-outline-danger hug">All Services</button>
// 							</Link>
// 						</div>

// 						{/* <div className="section5-arrows">
// 							<div className="arrows">
// 								<img src="/assets/keyboardArrowLeft.png" alt="" />
// 								<img src="/assets/keyboardArrowRight.png" alt="" />
// 							</div>
// 							<div className="line"></div>
// 						</div> */}
// 					</div>
// 				</section>

// 				<ServiceComp />
// 				{/* <SwiperButtonNext /> */}
// 				{/* <div className="section5-arrows">
// 					<div className="arrows">
// 						<img src="/assets/keyboardArrowLeft.png" alt="" />
// 						<img src="/assets/keyboardArrowRight.png" alt="" />
// 					</div>
// 					<div className="line"></div>
// 				</div> */}

// 				<ClientComp />

// 				<section className="home-section-7 container">
// 					<div className="section7-inner">
// 						<h2>Our Projects</h2>
// 						<div className="section7-inner-sub">
// 							<img
// 								src="/assets/projects1.png"
// 								alt=""
// 								className="large-img"
// 								data-aos="fade-left"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							/>

// 							<div
// 								className="section7-inner-sub_text"
// 								data-aos="fade-right"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							>
// 								<p className="text-heading">Project Name</p>
// 								<p className="inner-text-body">
// 									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
// 									lectus. Arcu, non ornare commodo, convallis lectus.
// 								</p>

// 								<Link href="/" className="text-link">
// 									<a className="text-link_link">
// 										More Details <img src="/assets/moreDetailsArrow.png" alt="" />
// 									</a>
// 								</Link>
// 							</div>
// 						</div>
// 						<div className="section7-inner-sub sub-2">
// 							<img
// 								src="/assets/projects2.png"
// 								alt=""
// 								className="large-img"
// 								data-aos="fade-right"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							/>

// 							<div
// 								className="section7-inner-sub_text sub-2_text"
// 								data-aos="fade-left"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							>
// 								<p className="text-heading">Project Name</p>
// 								<p className="inner-text-body">
// 									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
// 									lectus. Arcu, non ornare commodo, convallis lectus.
// 								</p>

// 								<Link href="/" className="text-link">
// 									<a className="text-link_link">
// 										More Details
// 										<img src="/assets/moreDetailsArrow.png" alt="" />
// 									</a>
// 								</Link>
// 							</div>
// 						</div>
// 						<div className="section7-inner-sub">
// 							<img
// 								src="/assets/projects3.png"
// 								alt=""
// 								className="large-img"
// 								data-aos="fade-left"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							/>

// 							<div
// 								className="section7-inner-sub_text"
// 								data-aos="fade-right"
// 								data-aos-offset="200"
// 								data-aos-duration="500"
// 							>
// 								<p className="text-heading">Project Name</p>
// 								<p className="inner-text-body">
// 									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
// 									lectus. Arcu, non ornare commodo, convallis lectus.
// 								</p>

// 								<Link href="/projects" className="text-link">
// 									<a className="text-link_link">
// 										More Details
// 										<img src="/assets/moreDetailsArrow.png" alt="" />
// 									</a>
// 								</Link>
// 							</div>
// 						</div>
// 						<div className="section7-inner-btn">
// 							<button className="btn btn-danger hug">All Services</button>
// 						</div>
// 					</div>
// 				</section>
// 			</div>
// 		</FrontLayout>
// 	);
// };

// export default Home;
