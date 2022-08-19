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
import Link from "next/link";

const Home = () => {
	return (
		<FrontLayout>
			<div className="home container">
				<section className="home-hero ">
					<div className="inner">
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
									<p>
										End to end service in the design, engineering, procurement, fabrication, installation, repair of
										(GRE), (GRP) and Vinylester Pipe system and products.
									</p>
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
				<section className="about-section">
					<div className="about-inner">
						<div className=" about-inner-left">
							<img className="about-img" src="/assets/about_img1.png" alt="" />
						</div>

						<div className="about_text_sect about-inner-right">
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
								<button className="btn btn-outline-danger hug">Learn More</button>
							</div>
						</div>
					</div>
				</section>
				<section className="home-section-3">
					<div className="section3-inner">
						<div className="section3-inner-left">
							<p className="text-danger">ROLANICK</p>
							<p>Who We Are...</p>
							<h2>Transforming With Innovations</h2>
							<p>
								{`	Ralonick Constructions operates within the framework of commercial and industrial activities, developing
								and carrying out basic and detailed services in engineering, procurement, construction, equipment
								leasing and marine. We exceed our clients' trust through the timely delivery of quality, satisfactory
								products and services.`}
							</p>
							<div className="info">
								<div className="info-sub">
									<p>25</p>
									<p>Years Experience</p>
								</div>
								<div className="info-sub">
									<p>25</p>
									<p>Industries served</p>
								</div>
								<div className="info-sub">
									<p>25</p>
									<p>Factories Built</p>
								</div>
							</div>
						</div>
						<div className="section3-inner-right">
							<img src="/assets/who_img1.png" alt="" />
						</div>
					</div>
				</section>
				<section className="home-section-4">
					<div className="section4-inner">
						<div className="section4-inner-img">
							<img src="/assets/why_img.png" alt="" />
						</div>
						<div className="section4-inner-text">
							<h2>Why Choose Us</h2>
							<div className="text_gridbox">
								<div className="text_gridItem">
									<div className="empty-box"></div>
									<p className="grid-heading">Quality</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum
										aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis
										fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae
										urna.
									</p>
								</div>
								<div className="text_gridItem">
									<div className="empty-box"></div>
									<p className="grid-heading">Integrity</p>

									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum
										aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis
										fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae
										urna.
									</p>
								</div>
								<div className="text_gridItem">
									<div className="empty-box"></div>
									<p className="grid-heading">Professionalism</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum
										aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis
										fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae
										urna.
									</p>
								</div>
								<div className="text_gridItem">
									<div className="empty-box"></div>
									<p className="grid-heading">Safety</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum
										aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis
										fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae
										urna.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <div className="ourServices">
					<h2>Our Services</h2>
					<div className="ourServices_text">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum
							aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio
						</p>
						<button className="btn btn-outline-danger hug">All Services</button>
					</div>
					<div className="ourServices_gridbox">
						<div className="ourServices_gridItem">
							<img src="/assets/services1.png" alt="" />
							<div>
								<p>Chemical Research</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus
									purus cursus. Luctus dolor et consequat nunc at ut.
								</p>
								<p>
									<Link href="/">
										<a>
											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
										</a>
									</Link>
								</p>
							</div>
						</div>
						<div className="ourServices_gridItem">
							<img src="/assets/services2.png" alt="" />
							<div>
								<p>Chemical Research</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus
									purus cursus. Luctus dolor et consequat nunc at ut.
								</p>
								<p>
									<Link href="/">
										<a>
											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
										</a>
									</Link>
								</p>
							</div>
						</div>
						<div className="ourServices_gridItem">
							<img src="/assets/services3.png" alt="" />
							<div>
								<p>Chemical Research</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus. Proin scelerisque sed massa arcu nunc id ridiculus
									purus cursus. Luctus dolor et consequat nunc at ut.
								</p>
								<p>
									<Link href="/">
										<a>
											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
										</a>
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className="services_arrows">
						<img src="/assets/keyboardArrowLeft.png" alt="" />
						<img src="/assets/keyboardArrowRight.png" alt="" />
					</div>
				</div> */}
				{/* <div className="reviews">
					<h2>Clients Reviews</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros vitae vitae dictum mattis risus, ut nec.
						Rhoncus egestas quis pellentesque risus posuere.facilisis. Enim quisque id sit molestie tincidunt faucibus.
						Amet, dictum eget egestas dictum non leo cras faucibus egestas. Mattis imperdiet elit nullam adipiscing
						lobortis fames. Et egestas vitae feugiat nisi, sed sit in pulvinar at. Ultrices tincidunt vel in sit
						ullamcorper. Sollicitud
					</p>
					<div>
						<img src="/assets/clientPic.png" alt="" />
						<h3>Cindy Clifford</h3>
						<p>Rumuodara Interior Designer</p>
					</div>
					<img src="/assets/reviewslider.png" alt="" />
				</div> */}
				{/* <div className="projects">
					<h2>Our Projects</h2>
					<div className="projects_sub">
						<img src="/assets/projects1.png" alt="" />
						<div>
							<p>Project Name</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus.
								Arcu, non ornare commodo, convallis lectus.
							</p>
							<p>
								<Link href="/">
									<a>
										More Details <img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</p>
						</div>
					</div>
					<div className="projects_sub">
						<img src="/assets/projects2.png" alt="" />
						<div>
							<p>Project Name</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus.
								Arcu, non ornare commodo, convallis lectus.
							</p>
							<p>
								<Link href="/">
									<a>
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</p>
						</div>
					</div>
					<div className="projects_sub">
						<img src="/assets/projects3.png" alt="" />
						<div>
							<p>Project Name</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus.
								Arcu, non ornare commodo, convallis lectus.
							</p>
							<p>
								<Link href="/">
									<a>
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</p>
						</div>
					</div>
					<div className="projects_btn">
						<button className="btn btn-danger hug">All Services</button>
					</div>
				</div> */}
			</div>
		</FrontLayout>
	);
};

export default Home;
