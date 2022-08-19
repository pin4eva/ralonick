import React from "react";
import FrontLayout from "../layouts/front.layout";

const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page">
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

				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;
