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

				<div className="second-section">
					
				</div>
				<div>3</div>

				{/* ===========beginning of fourth section============= */}
				<div className="fourth-section container">
					<div className="frame3">
						<img src="assets/frame3.png" alt="frame2" />
					</div>
					<div className="fourth-section-text1">
						<span>Our Vision:</span>
						<ul>
							<li>We aim to be Nigeria’s leading company in Design,  Engineering, Procurement, Fabrication, Construction, Equipment Leasing  and Installation Services in Land & Marine.</li>
						</ul>
					</div>
					<div className="fourth-section-text2">
						<span>Our Mission:</span>
						<ul>
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
