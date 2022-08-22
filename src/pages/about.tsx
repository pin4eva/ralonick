import React from "react";
import CardComp from "../components/CardComp";
import FrontLayout from "../layouts/front.layout";
const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page ">
				<div className="ral container">
					<div className="pic1">
						<img src="/assets/Fr11.png" alt="12" />
					</div>
					<div className="ltd">
						<h2>
							About <br /> Ralonik LTD.
						</h2>
					</div>
				</div>
				<div className="quality container">
					<div className="top">
						<h3>Top Quality Construction & Engineering Services</h3>
						<p>
							Top Quality Construction & Engineering Services Ralonick is a fast growing construction company rapidly
							spreading its frontiers across Nigeria, with sole interest in operation and maintenance of production
							facilities, local and foreign procurement of oil & gas materials and consultation. It is a registered
							private limited liability company under the Nigeria Law. <br /> <br /> Our operation is within the
							framework of commercial and industrial activities, developing and carrying out basic and detailed service
							in Engineering, Procurement, Construction and Equipment leasing in Land and Marine. <br /> <br /> We adopt
							a system of Total quality Management (TQM) at a reasonable cost and within the shortest possible time, in
							conjunction with our technical partners. We provide end to end service in the design, engineering,
							procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy (GRE) Polyester
							(GRP) and Vinylester Pipe system and products.
						</p>
					</div>
					<div className="point">
						<img src="/assets/engrs.png" alt="" />
					</div>
				</div>
				<br />
				<div className="trans container">
					<div className="form">
						<h3>
							Transforming With <br /> Innovations
						</h3>
						<p>
							Ralonick Constructions operates within the framework of commercial and industrial activities, developing
							and carrying out basic and detailed services in engineering, procurement, construction, equipment leasing
							and marine. <br /> We exceed our clients trust through the timely delivery of quality, satisfactory
							products and services.
						</p>
						<div className="grid-n">
							<div className="no1">
								<h4>25+</h4>
								<p>Trusted Partners</p>
							</div>
							<div className="no2">
								<h4>50+</h4>
								<p>Satisfied Clients</p>
							</div>
							<div className="no3">
								<h4>5+</h4>
								<p>Years Experience</p>
							</div>
						</div>
					</div>
					<div className="top">
						<img src="/assets/Framed.png" alt="frame" />
					</div>
				</div>


				<div className="vision container">				
					<div className="hd">
						<img src="/assets/footmark.png" alt="foot" />
					</div>
					<div className="as">
						<h5>Our Vision:</h5>
						<div className="t1">
							<ul>
								<li>We aim to be Nigeria’s leading company in Design,  Engineering, Procurement, Fabrication, Construction, Equipment Leasing  and Installation Services in Land & Marine.</li>
								<li>Continous delivery of excellent innovative values and construction solutions to meeet our clients’  requirements. </li>
								<li>Be the primary preference at all times nationally for excellence and quality in all types of construction.</li>
								<li>Continually improve the competence of our team & employ innovative and result-oriented persons.</li>
							</ul>
						</div>
					</div>
					<div className="se">
						<h5>Our Mission:</h5>
						<div className="t2">
							<ul>
								<li>To provide quality service in the fastest possible manner with minimal impact on the environment. </li>
								<li>To exceed our clients trust through the delivery of quality and exclusive world class satisfactory products & services. </li>
								<li>To utilize the latest specialized equipment and experience personnel and tackle all land & marine constructions.</li>
								<li>To ensure minimal safety hazards on-site for personnels through the use of suitable equipments, experts and safety equipments & measures.</li>
							</ul>
						</div>

					</div>
					<div className="ft">
						<img src="/assets/noon.png" alt="nn" />
					</div>
				</div>



				<div className="choose container">
					<div className="reff">
						<img src="/assets/why.png" alt="y" />
					</div>
					<div className="box">
						<h3>Why Choose Us</h3>
						<div className="table">
							<div className="ity">
								<div className="great">
									<div className="bd"></div>
									<h5>Quality</h5>
									<p>
										Great service delivery is incomplete without quality. It is our core value of operation, we achieve
										this by employing the policy of harnessing available resources, experience (of higly skilled
										engineers) and technical expertise.
									</p>
								</div>
								<div className="serv">
									<div className="bd"></div>
									<h5>Integrity</h5>
									<p>
										Service entails a lot of commitment laced with passion, with years of experience and service
										provision, we stand for excellent and honest work as we stay true to our words. Maintaining the
										trust placed in us by all our clients and stakeholders is key to us.
									</p>
								</div>
							</div>
							<div className="sm">
								<div className="pro">
									<div className="bd"></div>
									<h5>Professionalism</h5>
									<p>
										Skill and competence are as important as practice therefore all staff are highly trained, possess
										high experiential knowledge in the field, and are highly professional. We value professionalism, to
										us it means giving clients the best value for their money.
									</p>
								</div>
								<div className="safe">
									<div className="bd"></div>
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
				</div>
				<div className="team container">
					<h3>Our Team</h3>

					<CardComp />
					{/* <div className="ceo">
						<img src="/assets/guy_1.png" alt="g1" />
						<div className="black">
							<h5>Joy Julius</h5>
							<p>CEO</p>
							<div className="icon">
								<a href="www.figma.com">
									<i className="fa-brands fa-instagram"></i>
								</a>
								<a href="www.figma.com">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;
