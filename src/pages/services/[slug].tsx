/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";

const singleservicepage = () => {
	return (
		<FrontLayout>
			<div className="single-service container">
				<div className="single-service-hero">
					<img src="/assets/Frame 50.png" alt="" />
				</div>

				<div className="section_2">
					<div className="section_2_inner">
						<h2>Active & Passive Fire Proofing</h2>
						<p>
							Ralonick is a professional fire proofing company offering clients’ a one-stop for all their fire proofing
							needs be it passive or active fire proofing. Fire Proofing is applied to Building, Steel Decking,
							Structural Beams, Siding System.
						</p>

						<h5>Passive Fire Proofing:</h5>
						<p>
							Passive Fire Proofing is a vital component for any structure of building to safeguard lives and limit
							financial impact of damage to building and their content. We offer Cementitious Fire Proofing, Mineral
							Fibre Fire Proofing, Itumescent Paint Fire Proofing under Passive Fire Proofing.
						</p>

						<h5>Active Fire Proofing:</h5>
						<p>
							Active Fire Proofing (AFP) is an integral part of fire protection characterized by items and systems which
							require a certain amount of motion and response in order to work. We offer Manual Fire Suppression &
							Automatic Fire Suppression.
						</p>

						<div className="section_2_images">
							<div className="section_2_image">
								<img src="/assets/b1.png" alt="" />
							</div>
							<div className="section_2_image">
								<img src="/assets/b2.png" alt="" />
							</div>
							<div className="section_2_image">
								<img src="/assets/b4.png" alt="" />
							</div>
							<div className="section_2_image">
								<img src="/assets/b3.png" alt="" />
							</div>
						</div>
						<div className="btn-1">
							<button className="btn btn-danger hug">Book Service</button>
						</div>
					</div>
				</div>

				<div className="section_3">
					<div className="records">
						<div className="records-grid">
							<h5>
								25 <sup>+</sup>
							</h5>
							<p>Completed Projects</p>
						</div>
						<div className="records-grid">
							<h5>
								25 <sup>+</sup>
							</h5>
							<p>Trusted Partners</p>
						</div>
						<div className="records-grid">
							<h5>
								50 <sup>+</sup>
							</h5>
							<p>Satisfied Clients</p>
						</div>
						<div className="records-grid">
							<h5>
								5 <sup>+</sup>
							</h5>
							<p>Years Experience</p>
						</div>
					</div>

					<div className="reasons">
						<h2>Why Choose Us</h2>
						<div className="grid-container">
							<div className="grid-item">
								<img src="/assets/img1.png" alt="" />
								<p>Quality</p>
							</div>
							<div className="grid-item">
								<img src="/assets/img2.png" alt="" />
								<p>Integrity</p>
							</div>
							<div className="grid-item">
								<img src="/assets/img3.png" alt="" />
								<p>Safety</p>
							</div>
							<div className="grid-item">
								<img src="/assets/img4.png" alt="" />
								<p> Professionalism</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FrontLayout>
	);
};

export default singleservicepage;
