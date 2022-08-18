/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import HeroComp from "../components/HeroComp";
import AboutComp from "../components/AboutComp";
import WhoComp from "../components/WhoComp";
import WhyComp from "../components/WhyComp";
import OurServicesComp from "../components/OurServicesComp";
import ReviewsComp from "../components/ReviewsComp";
import ProjectsComp from "../components/ProjectsComp";

const Home = () => {
	return (
		<FrontLayout>
			<div className="home">
				<section className="home-hero">
					<div className="inner container">
						<div className="left">
							<div className="inner-left">
								<div className="hero_img1">
									<img className="img1" src="/assets/hero_img1.png" alt="hero" />
									<div className="hero-arrows">
										<div className="line"></div>
										<div className="arrow-img">
											<img src="/assets/keyboardArrowLeft.png" alt="" />
											<img src="/assets/keyboardArrowRight.png" alt="" />
										</div>
									</div>
								</div>
								<div className="hero-text">
									<h1>{`Diverse & Flexible Structure `}</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida facilisi mauris morbi.</p>
									<button className="btn btn-danger hug">See Projects</button>
								</div>
							</div>
						</div>

						<div className="inner-right">
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
				<section className="about-section" id="about">
					<div className="about-inner container">
						<div className="about_text_sect about-inner-left">
							<div className="left-text">
								<p className="text-danger fw-600">RALONICK</p>
								<h2 className="h1">About Us</h2>
								<p>
									Our operation is based on a diverse and flexible structure. We adopt a system of Total quality
									Management (TQM) at a reasonable cost and within the shortest possible time, in conjunction with our
									technical partners. We provide end to end service in the design, engineering, procurement,
									fabrication, installation, repair and support of Glass fiber Reinforced Epoxy (GRE) Polyester (GRP)
									and Vinylester Pipe system and products.
								</p>
								<p>
									Odio quisque potenti feugiat commodo sit hendrerit cum platea. Turpis neque in turpis commodo egestas
									turpis auctor ut pharetra. Arcu quam morbi viverra lectus facilisi.
								</p>
								<button className="btn btn-outline-danger hug">Learn More</button>
							</div>
						</div>
						<div className=" about-inner-right">
							<img className="about-img" src="/assets/about_img1.png" alt="" />
						</div>
					</div>
				</section>
				<WhoComp />
				<WhyComp />
				<OurServicesComp />
				<ReviewsComp />
				<ProjectsComp />
			</div>
		</FrontLayout>
	);
};

export default Home;
