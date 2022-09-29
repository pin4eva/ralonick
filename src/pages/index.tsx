/* eslint-disable @next/next/no-img-element */
import { useSwiper } from "swiper/react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";
import ClientComp from "../components/ClientComp";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/navigation";
import { SwiperData } from "../components/Data";
import Data from "../components/data.json";
import { truncateText } from "../utils/string.utils";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
	const [disableNext, setDisableNext] = useState(false);
	const [disablePrev, setDisablePrev] = useState(true);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		// if (typeof window !== undefined) {
		// 	AOS.init();
		// 	AOS.refresh();
		// }

		// setIsReady(true);
		// setTimeout(() => {
		// 	setIsReady(false);
		// }, 5000);

		if (document.readyState === "complete") {
			setIsReady(true);
			console.log("this is ready");
		} else {
			if (typeof window !== undefined) {
				window.onload = (event) => {
					const images = document?.images;
					const imageLength = images.length;
					let loadedImages = 0;
					console.log(imageLength);
					Array.from(images).forEach((image) => {
						if (image?.complete && image?.naturalHeight != 0) loadedImages++;
						console.log("almost ready");
					});
					if (loadedImages === imageLength) setIsReady(true);
				};
			}
		}
	}, []);

	return (
		<>
			<div className="spinner" style={{ display: isReady ? "none" : "block" }}>
				<ClipLoader size={70} color="#2E3092" />
			</div>

			<div style={{ display: isReady ? "block" : "none" }}>
				<FrontLayout>
					<div className="home">
						<section className="home-hero container">
							<div className="inner">
								<div className="left">
									<div className="inner-left">
										<Swiper
											className="hero_img1"
											slidesPerView={1}
											speed={1000}
											spaceBetween={10}
											onSlideChange={(e) => {
												e.isBeginning ? setDisablePrev(true) : setDisablePrev(false);
												e.isEnd ? setDisableNext(true) : setDisableNext(false);
											}}
										>
											{SwiperData.map((data, i) => (
												<SwiperSlide key={i}>
													<img className="img1" src={data} alt="hero" />
												</SwiperSlide>
											))}
											<SwiperButtonControl disableNext={disableNext} disablePrev={disablePrev} />
										</Swiper>

										<div className="hero-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
											<h1>{`Diverse & Flexible Structure `}</h1>
											<p>
												End to end service in the design, engineering, procurement, fabrication, installation, repair of
												(GRE), (GRP) and Vinylester Pipe system and products.
											</p>
											<Link href="/services">
												<button className="btn btn-danger hug">See Services</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className="about-section container">
							<div className="about-section-inner">
								<div className=" about-inner-left" data-aos="zoom-in-up" data-aos-duration="500">
									<img className="about-img" src="/assets/about_img1.png" alt="" />
								</div>

								<div className="about-inner-right" data-aos="zoom-in-up" data-aos-duration="500">
									<div className="right-text">
										<h1>About Us</h1>
										<p>
											Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria,
											with sole interest in operation and maintenance of production facilities, local and foreign
											procurement of oil & gas materials and consultation.
										</p>
										<p>
											Our operation is based on a diverse and flexible structure. We adopt a system of Total quality
											Management (TQM) at a reasonable cost and within the shortest possible time, in conjunction with
											our technical partners. We provide end to end service in the design, engineering, procurement,
											fabrication, installation, repair and support of Glass fiber Reinforced Epoxy (GRE) Polyester
											(GRP) and Vinylester Pipe system and products.
										</p>
										<Link href="/about">
											<button
												className="btn btn-outline-danger hug"
												data-aos="flip-left"
												data-aos-easing="ease-out-cubic"
												data-aos-duration="500"
											>
												Learn More
											</button>
										</Link>
									</div>
								</div>
							</div>
						</section>

						<section className="transforming container">
							<div className="transforming-inner">
								<div className="transforming-inner-left" data-aos="zoom-in-up" data-aos-duration="3000">
									<p className="text-danger fw-600">ROLANICK</p>
									<p className="transforming-heading">Who We Are...</p>
									<h2>Transforming With Innovations</h2>
									<p className="transforming-paragraph">
										Ralonick Constructions operates within the framework of commercial and industrial activities,
										developing and carrying out basic and detailed services in engineering, procurement, construction,
										equipment leasing and marine.
									</p>
									<p className="transforming-sub-text">{`We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.`}</p>

									<div
										className="statistics"
										fade-up-left="true"
										data-aos-easing="ease-in-quad"
										data-aos-duration="1500"
									>
										<div className="border-none statistics-info">
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
								<div className="transforming-inner-right" data-aos="zoom-in-down" data-aos-duration="1500">
									<img src="/assets/who_img1.png" alt="" />
								</div>
							</div>
						</section>

						<div className="quality-container container">
							<div className="quality-container-image" data-aos="zoom-in-down" data-aos-duration="1000">
								<img src="assets/why__img.png" alt="" />
							</div>

							<div className="quality-container-text">
								<h1>Why Choose Us</h1>
								<div className="quality-container-text-inner" data-aos="zoom-in-up" data-aos-duration="1000">
									<div className="text-grid">
										<span>
											<img src="assets/safety.svg" alt="" />
										</span>
										<h5>Quality</h5>
										<p>
											Great service delivery is incomplete without quality. It is our core value of operation, we
											achieve this by employing the policy of harnessing available resources, experience (of higly
											skilled engineers) and technical expertise.
										</p>
									</div>
									<div className="text-grid">
										<span>
											<img src="assets/integrity.svg" alt="" />
										</span>
										<h5>Integrity</h5>
										<p>
											Service entails a lot of commitment laced with passion, with years of experience and service
											provision, we stand for excellent and honest work as we stay true to our words. Maintaining the
											trust placed in us by all our clients and stakeholders is key to us.
										</p>
									</div>
									<div className="text-grid">
										<span>
											<img src="assets/quality.svg" alt="" />
										</span>
										<h5>Professionalism</h5>
										<p>
											Skill and competence are as important as practice therefore all staff are highly trained, possess
											high experiential knowledge in the field, and are highly professional. We value professionalism,
											to us it means giving clients the best value for their money.
										</p>
									</div>
									<div className="text-grid">
										<span>
											<img src="images/Bag.png" alt="" />
										</span>
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

						<section className="service-container container">
							<div className="service-container-inner">
								<h1>Our Services</h1>
								<div className="service-container-inner_text">
									<p className="fw-500 service-desc">
										{`At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine.`}
									</p>
									<Link href="/services">
										<button className="btn btn-outline-danger hug">All Services</button>
									</Link>
								</div>

								<Swiper
									data-aos="zoom-in-up"
									data-aos-duration="1000"
									className="service-swiper-card"
									spaceBetween={40}
									slidesPerView={2}
									navigation
									loopFillGroupWithBlank={true}
									speed={1000}
									breakpoints={{
										890: {
											slidesPerView: 2,
										},
										768: {
											slidesPerView: 1,
										},
										200: {
											slidesPerView: 1,
											spaceBetween: 30,
										},
									}}
									onSlideChange={(e) => {
										e.isBeginning ? setDisablePrev(true) : setDisablePrev(false);
										e.isEnd ? setDisableNext(true) : setDisableNext(false);
									}}
								>
									{Data.map((item, i) => {
										return (
											<SwiperSlide key={i} className="service-swiper-card-items">
												<img src={item.image} alt="" />
												<div className="content">
													<div className="title">
														<p className=" fw-600">{item.title}</p>
													</div>
													<div className="description">
														<p>{truncateText(item.text, 20)}...</p>
													</div>
												</div>
											</SwiperSlide>
										);
									})}
									<div className="control-wrapper">
										<SwiperButtons disableNext={disableNext} disablePrev={disablePrev} />
									</div>
								</Swiper>
							</div>
						</section>

						<h1 className="testimonial-head">Client Reviews</h1>
						<ClientComp />
					</div>
				</FrontLayout>
			</div>
		</>
	);
};

export default Home;

const SwiperButtonControl: React.FC<{ disableNext: boolean; disablePrev: boolean }> = ({
	disableNext,
	disablePrev,
}) => {
	const swiper = useSwiper();

	return (
		<div className="hero-arrows">
			<div className="line"></div>
			<div className="control-arrows">
				<button disabled={disablePrev} onClick={() => swiper.slidePrev()} className="controls">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button disabled={disableNext} onClick={() => swiper.slideNext()} className="controls">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};

export const SwiperButtons: React.FC<{ disableNext: boolean; disablePrev: boolean }> = ({
	disableNext,
	disablePrev,
}) => {
	const swiper = useSwiper();

	return (
		<div className="swiper-clicks">
			<div className="arrows">
				<button disabled={disablePrev} onClick={() => swiper.slidePrev()} className="swiper-control">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button disabled={disableNext} onClick={() => swiper.slideNext()} className="swiper-control">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
			<div className="line"></div>
		</div>
	);
};

// if (document.readyState === "complete") {
// 	setIsReady(true);
// } else {
// 	window.addEventListener("load", () => {
// 		const images = document.getElementsByTagName("img");
// 		let loadedImages = 0;
// 		Array.from(images).forEach((img) => {
// 			if (img.complete && img.naturalHeight !== 0) loadedImages++;
// 			if (loadedImages === images.length) setIsReady(true);
// 		});
// 	});
// }

{
	/* <div className="spinner" style={{ display: isReady ? "none" : "flex" }}>
				<ClipLoader size={70} />
			</div> */
}
