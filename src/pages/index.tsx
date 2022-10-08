/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Reviews from "../components/reviews.json";
import { useSwiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ServiceCard from "../components/servicecard.json";

export function SlideNext() {
	const swiper = useSwiper();

	return <i className="fa-solid fa-circle-chevron-left fa-2x" onClick={() => swiper.slideNext()}></i>;
}

export function SlidePrev() {
	const swiper = useSwiper();

	return <i className="fa-solid fa-circle-chevron-right fa-2x" onClick={() => swiper.slidePrev()}></i>;
}

const HomePage = () => {
	return (
		<FrontLayout>
			<div className="home container">
				<section className="home-hero ">
					<div className="inner">
						<div className="inner-content">
							<div className="inner-left">
								<div className="inner-left-image">
									<Swiper
										modules={[Navigation, Pagination, Scrollbar, A11y]}
										spaceBetween={0}
										slidesPerView={1}
										onSwiper={(swiper) => console.log(swiper)}
										onSlideChange={() => console.log("slide change")}
									>
										<SwiperSlide>
											<img src="assets/hero_img1.png" alt="" />
										</SwiperSlide>
										<SwiperSlide>
											<img src="assets/hero_img1.png" alt="" />
										</SwiperSlide>

										<div className="inner-left-arrow_img">
											<div className="swiper-line"></div>
											<SlideNext />
											<SlidePrev />
										</div>
									</Swiper>
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

				<section className="home-section-5">
					<div className="section5-inner">
						<h2>Our Services</h2>
						<div className="section5-text">
							<p>
								At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment
								leasing for land & marine.
							</p>
							<button className="btn btn-outline-danger hug">All Services</button>
						</div>

						<div className="services-grid-wrapper">
							<div className="services-grid">
								<Swiper
									modules={[Navigation, Pagination, Scrollbar, A11y]}
									spaceBetween={8}
									slidesPerView={3}
									onSwiper={(swiper) => console.log(swiper)}
									onSlideChange={() => console.log("slide change")}
								>
									{ServiceCard.map((item) => {
										return (
											<SwiperSlide key={item.id} className="service">
												<div className="service-grid-image">
													<img src={item.image} alt="" />
												</div>
												<div className="service-grid-info">
													<h4>{item.heading}</h4>
													<p>{item.info}</p>
													<h5>
														<Link href="/">
															<a>
																Learn More <img src="/assets/learnMoreArrow.png" alt="" />
															</a>
														</Link>
													</h5>
												</div>
											</SwiperSlide>
											
										);
									})}
									<div className="servicecard-icon">
										<SlideNext />
										<SlidePrev />
										<div className="swiper-line"></div>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
				</section>

				<section className="home-section-6">
					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						autoplay={true}
						pagination={{ clickable: true }}
					>
						{Reviews.map((single) => {
							return (
								<SwiperSlide key={single.id} className="client-info">
									<h2>{single.heading}</h2>
									<p>{single.text}</p>
									<div className="profile">
										<div className="profile-image">
											<img src={single.pic} alt="" />
										</div>
										<div className="profile-text">
											<h4>{single.name}</h4>
											<h5>{single.rank}</h5>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</section>
			</div>
		</FrontLayout>
	);
};

export default HomePage;
