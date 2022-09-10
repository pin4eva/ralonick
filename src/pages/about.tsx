/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../layouts/front.layout";
import TeamCard from "../components/teamcard.json";
import Link from "next/link";

const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page container">
				<div className="first-section">
					<div className="first-section-image">
						<img src="/assets/service_hero_img.png" alt="hero-img" />
					</div>
					<div className="first-section-text">
						About <br /> Ralonik LTD.
					</div>
				</div>

				<div className="second-section">
					<div className="second-section-inner">
						<div className="inner-left">
							<h5>Top Quality Construction & Engineering Services</h5>
							<p>
								Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with
								sole interest in operation and maintenance of production facilities, local and foreign procurement of
								oil & gas materials and consultation. It is a registered private limited liability company under the
								Nigeria Law. <br /> Our operation is within the framework of commercial and industrial activities,
								developing and carrying out basic and detailed service in Engineering, Procurement, Construction and
								Equipment leasing in Land and Marine. <br /> We adopt a system of Total quality Management (TQM) at a
								reasonable cost and within the shortest possible time, in conjunction with our technical partners. We
								provide end to end service in the design, engineering, procurement, fabrication, installation, repair
								and support of Glass fiber Reinforced Epoxy (GRE) Polyester (GRP) and Vinylester Pipe system and
								products.
							</p>
						</div>
						<div className="inner-right">
							<img src="/assets/about_img.png" alt="" />
						</div>
					</div>
				</div>

				<div className="third-section">
					<div className="transform">
						<div className="transform-text">
							<h2>Transforming With Innovations</h2>
							<p>
								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
								and carrying out basic and detailed services in engineering, procurement, construction, equipment
								leasing and marine. We exceed our clients trust through the timely delivery of quality, satisfactory
								products and services.
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
						</div>
						<div className="transform-image">
							<img src="/assets/who_img1.png" alt="" />
						</div>
					</div>
				</div>

				<div className="fourth-section">
					<div className="image-wrapper">
						<div className="image-1">
							<img src="/assets/frame3.png" alt="" />
						</div>
						<div className="image-2">
							<h5>Our Vision:</h5>
							<ul>
								<li>
									We aim to be Nigeria’s leading company in Design, Engineering, Procurement, Fabrication, Construction,
									Equipment Leasing and Installation Services in Land & Marine.
								</li>
								<li>
									Continous delivery of excellent innovative values and construction solutions to meeet our clients’
									requirements.
								</li>
								<li>
									Be the primary preference at all times nationally for excellence and quality in all types of
									construction.
								</li>
								<li>Continually improve the competence of our team & employ innovative and result-oriented persons.</li>
							</ul>
						</div>
						<div className="image-3">
							<h5>Our Mission:</h5>
							<ul>
								<li>
									To provide quality service in the fastest possible manner with minimal impact on the environment.
								</li>
								<li>
									To exceed our clients trust through the delivery of quality and exclusive world class satisfactory
									products & services.
								</li>
								<li>
									To utilize the latest specialized equipment and experience personnel and tackle all land & marine
									constructions.
								</li>
								<li>
									{" "}
									To ensure minimal safety hazards on-site for personnels through the use of suitable equipments,
									experts and safety equipments & measures.
								</li>
							</ul>
						</div>
						<div className="image-4">
							<img src="/assets/frame2.png" alt="" />
						</div>
					</div>
				</div>

				<div className="fifth-section">
					<div className="section5-image">
						<img src="/assets/why__img.png" alt="" />
					</div>
					<div className="section5-text">
						<h3>Why Choose Us</h3>
						<div className="section5-grid">
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
									provision, we stand for excellent and honest work as we stay true to our words. Maintaining the trust
									placed in us by all our clients and stakeholders is key to us.
								</p>
							</div>
							<div className="grid-box">
								<img src="/assets/img3.png" alt="" />
								<h5>Professionalism</h5>
								<p>
									Skill and competence are as important as practice therefore all staff are highly trained, possess high
									experiential knowledge in the field, and are highly professional. We value professionalism, to us it
									means giving clients the best value for their money.
								</p>
							</div>
							<div className="grid-box">
								<img src="/assets/img4.png" alt="" />
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
				<div className="sixth-section">
					<h2>Our Team</h2>

					<div className="team-card">
						{TeamCard.map((item) => {
							return (
								<div key={item.id} className="team">
									<div className="team-images">
										<img src={item.image} alt="" />
									</div>
									<div className="team-info">
										<h5>{item.name}</h5>
										<p>{item.title}</p>
										<div className="media-icons">
											<div className="icon1">
												<Link href="www.instagram.com">
													<i className="fa-brands fa-instagram"></i>
												</Link>
											</div>
											<div className="icon2">
												<Link href="www.twitter.com">
													<i className="fa-brands fa-twitter"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;
