/* eslint-disable @next/next/no-img-element */
import { useSwiper } from "swiper/react";
import FrontLayout from "../layouts/front.layout";
import Link from "next/link";
import ClientComp from "../components/ClientComp";
import ServiceComp from "../components/ServiceComp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { SwiperData } from "../components/Data";

const SwiperButtonControl = () => {
	const swiper = useSwiper();
	// const myData = SwiperData;

	return (
		<div className="hero-arrows">
			{" "}
			<div className="line"></div>
			<div className="arrow-img">
				<button onClick={() => swiper.slidePrev()} className="left">
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button onClick={() => swiper.slideNext()} className="right">
					<i className="fa-solid fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};

const Home = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<FrontLayout>
			<div className="home">
				<section className="home-hero container">
					<div className="inner">
						<div className="left">
							<div className="inner-left">
								<Swiper
									className="hero_img1 container"
									modules={[Navigation, Autoplay]}
									spaceBetween={50}
									slidesPerView={1}
									navigation
									autoplay={{
										delay: 5000,
										disableOnInteraction: false,
									}}
									loop={true}
									loopFillGroupWithBlank={true}
									speed={1000}
								>
									{SwiperData.map((data) => {
										return (
											<SwiperSlide key={data.id}>
												<img className="img1" src={data.image} alt="hero" />
											</SwiperSlide>
										);
									})}
									<SwiperButtonControl />
									{/* <div className="hero-arrows">
										<div className="line"></div>
										<div className="arrow-img">
											<img src="/assets/keyboardArrowLeft.png" className="" alt="" />
											<img src="/assets/keyboardArrowRight.png" alt="" />
										</div>
									</div> */}
								</Swiper>

								<div className="hero-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
									<h1>{`Diverse & Flexible Structure `}</h1>
									<p>
										End to end service in the design, engineering, procurement, fabrication, installation, repair of
										(GRE), (GRP) and Vinylester Pipe system and products.
									</p>
									<Link href="/projects">
										<button className="btn btn-danger hug">See Projects</button>
									</Link>
								</div>
							</div>
						</div>

						<div className="inner-right" data-aos="fade-up" data-aos-duration="3000" ease-in-out-quart>
							<div className="video-desc">
								<div className="video-desc-inner">
									<img src="/assets/PlayArrow.png" alt="" />
									<div>
										<p className="mb-0 desc-text">Watch Video Tour</p>
										<p className="duration mb-0">5:15 min</p>
									</div>
								</div>
							</div>
							<img className="img2" src="/assets/hero_img2.png" alt="" />
						</div>
					</div>
				</section>

				<section className="about-section container">
					<div className="about-inner">
						<div className=" about-inner-left" data-aos="fade-up" data-aos-duration="3000" ease-in-out-quart>
							<img className="about-img" src="/assets/about_img1.png" alt="" />
						</div>

						<div
							className="about_text_sect about-inner-right"
							data-aos-easing="ease-out-cubic"
							data-aos="fade-down"
							data-aos-duration="3000"
							ease-in-out-quart
						>
							<div className="right-text">
								<p className="text-danger fw-600">RALONICK</p>
								<h2 className="h1">About Us</h2>
								<p>
									Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with
									sole interest in operation and maintenance of production facilities, local and foreign procurement of
									oil & gas materials and consultation.
								</p>
								<p>
									Our operation is based on a diverse and flexible structure. We adopt a system of Total quality
									Management (TQM) at a reasonable cost and within the shortest possible time, in conjunction with our
									technical partners. We provide end to end service in the design, engineering, procurement,
									fabrication, installation, repair and support of Glass fiber Reinforced Epoxy (GRE) Polyester (GRP)
									and Vinylester Pipe system and products.
								</p>
								<Link href="/about">
									<button
										className="btn btn-outline-danger hug"
										data-aos="flip-left"
										data-aos-easing="ease-out-cubic"
										data-aos-duration="1500"
									>
										Learn More
									</button>
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="home-section-3 container">
					<div className="section3-inner">
						<div className="section3-inner-left " data-aos="zoom-in-up" data-aos-duration="3000">
							<p className="text-danger">ROLANICK</p>
							<p className="section3-heading">Who We Are...</p>
							<h2>Transforming With Innovations</h2>
							<p className="section3-paragraph1">
								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
								and carrying out basic and detailed services in engineering, procurement, construction, equipment
								leasing and marine.
							</p>
							<p className="section3-paragraph2">{`We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.`}</p>
							<div className="info" fade-up-left data-aos-easing="ease-in-quad" data-aos-duration="1500">
								<div className="info-sub">
									<p>25+</p>
									<p>Trusted Partners</p>
								</div>
								<div className="info-sub">
									<p>50+</p>
									<p>Satisfied Clients</p>
								</div>
								<div className="info-sub">
									<p>5+</p>
									<p>Years Experience</p>
								</div>
							</div>
						</div>
						<div className="section3-inner-right" data-aos="zoom-in-down" data-aos-duration="2500">
							<img src="/assets/who_img1.png" alt="" />
						</div>
					</div>
				</section>

				<div className="home-section-41 container">
					<div className="fifth-image" data-aos="zoom-in-down" data-aos-duration="2500">
						<img src="assets/why__img.png" alt="" />
					</div>

					<div className="fifth-section-text">
						<h1>Why Choose Us</h1>
						<div className="strict-text" data-aos="zoom-in-up" data-aos-duration="3000">
							<div>
								<span>
									<img src="assets/safety.svg" alt="" />
								</span>
								<h5>Quality</h5>
								<p>
									Great service delivery is incomplete without quality. It is our core value of operation, we achieve
									this by employing the policy of harnessing available resources, experience (of higly skilled
									engineers) and technical expertise.
								</p>
							</div>
							<div>
								<span>
									<img src="assets/integrity.svg" alt="" />
								</span>
								<h5>Integrity</h5>
								<p>
									Service entails a lot of commitment laced with passion, with years of experience and service
									provision, we stand for excellent and honest work as we stay true to our words. Maintaining the trust
									placed in us by all our clients and stakeholders is key to us.
								</p>
							</div>
							<div>
								<span>
									<img src="assets/quality.svg" alt="" />
								</span>
								<h5>Professionalism</h5>
								<p>
									Skill and competence are as important as practice therefore all staff are highly trained, possess high
									experiential knowledge in the field, and are highly professional. We value professionalism, to us it
									means giving clients the best value for their money.
								</p>
							</div>
							<div>
								<span>
									<img src="images/Bag.png" alt="" />
								</span>
								<h5>Safety</h5>
								<p>
									As one of our offered service we are not lacking in ensuring that our installations and technical
									works are properly done. We have zero reservations as regards safety. Our staff are highly trained for
									personal & on-site safety.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>

				<section className="home-section-5 container">
					<div className="section5-inner">
						<h2>Our Services</h2>
						<div className="section5-inner-text">
							<p>
								{`At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine.`}
							</p>
							<Link href="/services">
								<button className="btn btn-outline-danger hug">All Services</button>
							</Link>
						</div>
					</div>
				</section>

				<ServiceComp />

				<ClientComp />

				<section className="home-section-7 container">
					<div className="section7-inner">
						<h2>Our Projects</h2>
						<div className="section7-inner-sub">
							<img
								src="/assets/projects1.png"
								alt=""
								className="large-img"
								data-aos="fade-left"
								data-aos-offset="200"
								data-aos-duration="500"
							/>

							<div
								className="section7-inner-sub_text"
								data-aos="fade-right"
								data-aos-offset="200"
								data-aos-duration="500"
							>
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
							<img
								src="/assets/projects2.png"
								alt=""
								className="large-img"
								data-aos="fade-right"
								data-aos-offset="200"
								data-aos-duration="500"
							/>

							<div
								className="section7-inner-sub_text sub-2_text"
								data-aos="fade-left"
								data-aos-offset="200"
								data-aos-duration="500"
							>
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
							<img
								src="/assets/projects3.png"
								alt=""
								className="large-img"
								data-aos="fade-left"
								data-aos-offset="200"
								data-aos-duration="500"
							/>

							<div
								className="section7-inner-sub_text"
								data-aos="fade-right"
								data-aos-offset="200"
								data-aos-duration="500"
							>
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>

								<Link href="/projects" className="text-link">
									<a className="text-link_link">
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="section7-inner-btn">
							<button className="btn btn-danger hug">All Services</button>
						</div>
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default Home;
