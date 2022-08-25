// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import FrontLayout from "../layouts/front.layout";
// import Link from "next/link";

// const Home = () => {
// 	return (
// 		<FrontLayout>
// 			<div className="home container">
// 				<section className="home-hero ">
// 					<div className="inner">
// 						<div className="left">
// 							<div className="inner-left">
// 								<div className="hero_img1">
// 									<img className="img1" src="/assets/hero_img1.png" alt="hero" />
// 									<div className="hero-arrows">
// 										<div className="line"></div>
// 										<div className="arrow-img">
// 											<img src="/assets/keyboardArrowLeft.png" alt="" />
// 											<img src="/assets/keyboardArrowRight.png" alt="" />
// 										</div>
// 									</div>
// 								</div>
// 								<div className="hero-text">
// 									<h1>{`Diverse & Flexible Structure `}</h1>
// 									<p>
// 										End to end service in the design, engineering, procurement, fabrication, installation, repair of
// 										(GRE), (GRP) and Vinylester Pipe system and products.
// 									</p>
// 									<button className="btn btn-danger hug">See Projects</button>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="inner-right">
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
// 				<section className="about-section">
// 					<div className="about-inner">
// 						<div className=" about-inner-left">
// 							<img className="about-img" src="/assets/about_img1.png" alt="" />
// 						</div>

// 						<div className="about_text_sect about-inner-right">
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
// 								<button className="btn btn-outline-danger hug">Learn More</button>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="home-section-3">
// 					<div className="section3-inner">
// 						<div className="section3-inner-left">
// 							<p className="text-danger">ROLANICK</p>
// 							<p className="section3-heading">Who We Are...</p>
// 							<h2>Transforming With Innovations</h2>
// 							<p className="section3-paragraph1">
// 								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
// 								and carrying out basic and detailed services in engineering, procurement, construction, equipment
// 								leasing and marine.
// 							</p>
// 							<p className="section3-paragraph2">{`We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.`}</p>
// 							<div className="info">
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
// 						<div className="section3-inner-right">
// 							<img src="/assets/who_img1.png" alt="" />
// 						</div>
// 					</div>
// 				</section>
// 				<section className="home-section-4">
// 					<div className="section4-inner">
// 						<div className="section4-inner-img">
// 							<img src="/assets/why_img.png" alt="" />
// 						</div>
// 						<div className="section4-inner-text">
// 							<h2>Why Choose Us</h2>
// 							<div className="text_gridbox">
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
// 				<section className="home-section-5">
// 					<div className="section5-inner">
// 						<h2>Our Services</h2>
// 						<div className="section5-inner-text">
// 							<p>
// 								{`At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine.`}
// 							</p>
// 							<button className="btn btn-outline-danger hug">All Services</button>
// 						</div>
// 						<div className="section5-inner-gridbox">
// 							<div className="section5-gridItem">
// 								<img className="section5-gridItem-img" src="/assets/services1.png" alt="" />
// 								<div className="section5-gridItem-text">
// 									<p className="grid-heading">{`Active & Passive Fire Proofing`}</p>
// 									<p className="grid-text">
// 										Fire Proofing is a vital component for any structure to ensure safety of lives and minimal financial
// 										loss of properties. Ralonick offers professional fire proofing services ranging from cemetitious
// 										fire proofing, to Automatic fire suppression, etc.
// 									</p>

// 									<Link href="/">
// 										<a className="grid-link">
// 											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
// 										</a>
// 									</Link>
// 								</div>
// 							</div>
// 							<div className="section5-gridItem">
// 								<img className="section5-gridItem-img" src="/assets/services2.png" alt="" />
// 								<div className="section5-gridItem-text">
// 									<p className="grid-heading">Field Joint Coating Services</p>
// 									<p className="grid-text">
// 										{`This involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick offers engineering design & fabrication of customized field joint coating equipment which involves liquid applied materials.`}
// 									</p>

// 									<Link href="/">
// 										<a className="grid-link">
// 											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
// 										</a>
// 									</Link>
// 								</div>
// 							</div>
// 							<div className="section5-gridItem item3">
// 								<img className="section5-gridItem-img" src="/assets/services3.png" alt="" />
// 								<div className="section5-gridItem-text">
// 									<p className="grid-heading">{`Procurement & Installation of FRP/GRP`}</p>
// 									<p className="grid-text">
// 										In conjunction with our foreign partners AOCOMM Composite Limited(major manufacturers of FRP and GRP
// 										Products) we secure leadership in the area of technical support, procurement and maintenance for
// 										upstream and downstream oil and gas refinery.
// 									</p>

// 									<Link href="/">
// 										<a className="grid-link">
// 											Learn More <img src="/assets/learnMoreArrow.png" alt="" />
// 										</a>
// 									</Link>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="section5-arrows">
// 							<div className="arrows">
// 								<img src="/assets/keyboardArrowLeft.png" alt="" />
// 								<img src="/assets/keyboardArrowRight.png" alt="" />
// 							</div>
// 							<div className="line"></div>
// 						</div>
// 					</div>
// 				</section>
// 				<section className="home-section-6">
// 					<div className="section6-inner">
// 						<h2>Clients Reviews</h2>
// 						<p className="section6-inner-txt1">
// 							{`I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!`}
// 						</p>
// 						<div className="section6-inner-profile">
// 							<img src="/assets/clientPic.png" alt="" />
// 							<h3>Cindy Clifford</h3>
// 							<p className="section6-inner-profile_caption">Creative Director Sobaz Oil and gas</p>
// 						</div>
// 						<img src="/assets/reviewslider.png" alt="" />
// 					</div>
// 				</section>
// 				<section className="home-section-7">
// 					<div className="section7-inner">
// 						<h2>Our Projects</h2>
// 						<div className="section7-inner-sub">
// 							<img src="/assets/projects1.png" alt="" className="large-img" />
// 							<div className="section7-inner-sub_text">
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
// 							<img src="/assets/projects2.png" alt="" className="large-img" />
// 							<div className="section7-inner-sub_text sub-2_text">
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
// 							<img src="/assets/projects3.png" alt="" className="large-img" />
// 							<div className="section7-inner-sub_text">
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
