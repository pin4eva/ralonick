import React from "react";
import FrontLayout from "../layouts/front.layout";
import ClientComp from "../components/ClientComp";

const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page container">
				<div className="about-hero-section mt-3">
					<div className="hero-image">
						<img src="assets/about1.png" alt="frame1" />
					</div>
					<div className="hero-text fw-800">
						<p>About </p>
						<p className="hero-logo">Ralonik LTD.</p>
					</div>
				</div>
				{/*========== END OF SECTION ONE ==========*/}

				{/* ================BEGINING OF SECTION TWO============================== */}
				<div className="about-description container">
					<div className="about-description-text">
						<h5 className="fw-600">Top Quality Construction & Engineering Services</h5>

						<p className="fw-500">
							Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with sole
							interest in operation and maintenance of production facilities, local and foreign procurement of oil & gas
							materials and consultation. It is a registered private limited liability company under the Nigeria Law.
						</p>

						<p className="fw-500">
							Our operation is within the framework of commercial and industrial activities, developing and carrying out
							basic and detailed service in Engineering, Procurement, Construction and Equipment leasing in Land and
							Marine.
						</p>

						<p className="fw-500">
							We adopt a system of Total quality Management (TQM) at a reasonable cost and within the shortest possible
							time, in conjunction with our technical partners. We provide end to end service in the design,
							engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
							(GRE) Polyester (GRP) and Vinylester Pipe system and products.
						</p>
					</div>
					<div className="about-description-image">
						<img src="assets/about_img1.png" alt="sec2" />
					</div>
				</div>
				{/* ============================END OF SECOND SECTION============================= */}

				{/* ================BEGINNING OF SECTION THREE===================== */}
				<section className="transforming container">
					<div className="transforming-inner">
						<div className="transforming-inner-left " data-aos="zoom-in-up" data-aos-duration="3000">
							<p className="text-danger">ROLANICK</p>
							<p className="transforming-heading">Who We Are...</p>
							<h2>Transforming With Innovations</h2>
							<p className="transforming-paragraph">
								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
								and carrying out basic and detailed services in engineering, procurement, construction, equipment
								leasing and marine.
							</p>
							<p className="transforming-sub-text">{`We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.`}</p>

							<div className="statistics" fade-up-left="true" data-aos-easing="ease-in-quad" data-aos-duration="1500">
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
						<div className="transforming-inner-right" data-aos="zoom-in-down" data-aos-duration="2500">
							<img src="/assets/who_img1.png" alt="" />
						</div>
					</div>
				</section>

				{/* =====================END OF SECTION THREE======================= */}

				{/* ===================BEGINNING OF FOURTH SECTION====================== */}
				<div className="misson-vision-container container">
					<div className="mission-vision-container_inner">
						<div className="vision-frame">
							<img src="assets/frame2.png" alt="frame2" />
						</div>
						<div className="vision-description">
							<span>Our Vision:</span>
							<ul className="fw-500">
								<li>
									We aim to be Nigeria’s leading company in Design, Engineering, Procurement, Fabrication, Construction,
									Equipment Leasing and Installation Services in Land & Marine.
								</li>
								<li>
									{" "}
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
						<div className="mission-description">
							<span>Our Mission:</span>
							<ul className="fw-500">
								<li>
									To provide quality service in the fastest possible manner with minimal impact on the environment.{" "}
								</li>
								<li>
									To exceed our clients trust through the delivery of quality and exclusive world class satisfactory
									products & services.{" "}
								</li>
								<li>
									To utilize the latest specialized equipment and experience personnel and tackle all land & marine
									constructions.
								</li>
								<li>
									To ensure minimal safety hazards on-site for personnels through the use of suitable equipments,
									experts and safety equipments & measures.
								</li>
							</ul>
						</div>
						<div className="mission-frame">
							<img src="assets/frame3.png" alt="frame2" />
						</div>
					</div>
				</div>
				{/* ==============END OF FOURTH SECTION========================== */}

				{/* =======================BEGINNING OF FIFTH SECTION==================== */}
				<div className="quality-container container">
					<div className="quality-container-image" data-aos="zoom-in-down" data-aos-duration="2500">
						<img src="assets/why__img.png" alt="" />
					</div>

					<div className="quality-container-text">
						<h1>Why Choose Us</h1>
						<div className="quality-container-text-inner" data-aos="zoom-in-up" data-aos-duration="3000">
							<div className="text-grid">
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
							<div className="text-grid">
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
							<div className="text-grid">
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
							<div className="text-grid">
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
				{/* ==================END OF FIFTH SECTION====================== */}

				{/* =========================BEGINNING OF SIXTH SECTION======================= */}

				<div className="team-card-container">
					<h1>Our Team</h1>

					<div className="team-card">
						<div className="team-card-single">
							<img className="full-width" src="assets/Frame9.png" alt="" />
							<div className="full-width card-details">
								<h5>Joy Julius</h5>
								<h6>CEO</h6>
								<span>
									<i className="fa-brands fa-twitter"></i>
									<i className="fa-brands fa-instagram"></i>
								</span>
							</div>
						</div>

						<div className="team-card-single">
							<img className="full-width" src="assets/Frame14.png" alt="" />
							<div className="full-width card-details">
								<h5>Joy Julius</h5>
								<h6>CEO</h6>
								<span>
									<i className="fa-brands fa-twitter twi"></i>
									<i className="fa-brands fa-instagram"></i>
								</span>
							</div>
						</div>

						<div className="team-card-single">
							<img className="full-width" src="assets/Frame15.png" alt="" />
							<div className="full-width card-details">
								<h5>Joy Julius</h5>
								<h6>CEO</h6>
								<span>
									<i className="fa-brands fa-twitter"></i>
									<i className="fa-brands fa-instagram"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;
