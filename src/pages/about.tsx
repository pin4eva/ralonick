import React from "react";
import FrontLayout from "../layouts/front.layout";

const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page container">
				<div className="first-section">
					<div className="frame1">
						<img src="assets/about1.png" alt="frame1" />
					</div>
					<div className="first-text fw-800">
						<p>About </p>
						<p className="p2">Ralonik LTD.</p>
					</div>
				</div>
				{/*========== END OF SECTION ONE ==========*/}

				{/* ================BEGINING OF SECTION TWO============================== */}
				<div className="second-section container">
					<div className="second-section-text">
						<h5 className="fw-600">Top Quality Construction & Engineering Services</h5>

						<p className="text-one fw-500">
							Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with sole
							interest in operation and maintenance of production facilities, local and foreign procurement of oil & gas
							materials and consultation. It is a registered private limited liability company under the Nigeria Law.
						</p>

						<p className="text-two fw-500">
							Our operation is within the framework of commercial and industrial activities, developing and carrying out
							basic and detailed service in Engineering, Procurement, Construction and Equipment leasing in Land and
							Marine.
						</p>

						<p className="text-three fw-500">
							We adopt a system of Total quality Management (TQM) at a reasonable cost and within the shortest possible
							time, in conjunction with our technical partners. We provide end to end service in the design,
							engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
							(GRE) Polyester (GRP) and Vinylester Pipe system and products.
						</p>
					</div>
					<div className="second-section-image">
						<img src="assets/about_img1.png" alt="sec2" />
					</div>
				</div>
				{/* ============================END OF SECOND SECTION============================= */}

				{/* ================BEGINNING OF SECTION THREE===================== */}
				<div className="third-section container">
					<div className="third-section-text">
						<h1 className="fw-800">Transforming With Innovations</h1>
						<div className="third-section-text_1">
							<p className="fw-500">
								Ralonick Constructions operates within the framework of commercial and industrial activities, developing
								and carrying out basic and detailed services in engineering, procurement, construction, equipment
								leasing and marine. We exceed our clients' trust through the timely delivery of quality, satisfactory
								products and services.
							</p>
						</div>

						<div className="main-stats">
							<div>
								<p className="blue-text ">
									25 <span>+</span>
								</p>
								<p className="black-text">Trusted Partners</p>
							</div>

							<div>
								<p className="blue-text">
									50 <span>+</span>
								</p>
								<p className="black-text">Satisfied Clients</p>
							</div>

							<div>
								<p className="blue-text">
									5 <span>+</span>
								</p>
								<p className="black-text">Years Experience</p>
							</div>
						</div>
					</div>

					<div className="third-section-image">
						<img src="assets/who_img1.png" alt="this" />
					</div>
				</div>

				{/* ===========beginning of fourth section============= */}
				<div className="fourth-section container">
					<div className="frame3">
						<img src="assets/frame3.png" alt="frame2" />
					</div>
					<div className="fourth-section-text1">
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
					<div className="fourth-section-text2">
						<span>Our Mission:</span>
						<ul className="fw-500">
							<li>
								To provide quality service in the fastest possible manner with minimal impact on the environment.{" "}
							</li>
							<li>
								To exceed our clients' trust through the delivery of quality and exclusive world class satisfactory
								products & services.{" "}
							</li>
							<li>
								To utilize the latest specialized equipment and experience personnel and tackle all land & marine
								constructions.
							</li>
							<li>
								To ensure minimal safety hazards on-site for personnels through the use of suitable equipments, experts
								and safety equipments & measures.
							</li>
						</ul>
					</div>
					<div className="frame2">
						<img src="assets/frame2.png" alt="frame2" />
					</div>
				</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;
