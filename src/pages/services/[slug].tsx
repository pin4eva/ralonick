/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";

const singleservice = () => {
	return (
		<div className="single-service-section">
			<section className="single-service-hero">
				<div className="single-service-hero-image">
					<img src="/assets/Frame 50.png" alt="bg" />
				</div>
			</section>

			<section className="single-service-1 container">
				<div className="single-service-1-inner">
					<h2>Active & Passive Fire Proofing</h2>

					<div className="single-service-1-inner-text">
						<p>
							Ralonick is a professional fire proofing company offering clients’ a one-stop for all their fire proofing
							needs be it passive or active fire proofing. Fire Proofing is applied to Building, Steel Decking,
							Structural Beams, Siding System.
						</p>
						<h4>Passive Fire Proofing:</h4>
						<p>
							Passive Fire Proofing is a vital component for any structure of building to safeguard lives and limit
							financial impact of damage to building and their content. We offer Cementitious Fire Proofing, Mineral
							Fibre Fire Proofing, Itumescent Paint Fire Proofing under Passive Fire Proofing.
						</p>

						<h4>Active Fire Proofing:</h4>
						<p>
							Active Fire Proofing (AFP) is an integral part of fire protection characterized by items and systems which
							require a certain amount of motion and response in order to work. We offer Manual Fire Suppression &
							Automatic Fire Suppression.
						</p>
					</div>

					<div className="single-service-1-inner-images">
						<div className="single-service-1-inner-images-1">
							<img src="/assets/b1.png" alt="b1" />
						</div>
						<div className="single-service-1-inner-images-2">
							<img src="/assets/b2.png" alt="b2" />
						</div>
						<div className="single-service-1-inner-images-3">
							<img src="/assets/b3.png" alt="b3" />
						</div>
						<div className="single-service-1-inner-images-4">
							<img src="/assets/b4.png" alt="b4" />
						</div>
					</div>
					<div className="single-service-1-inner-button">
						<button className="btn btn-danger hug">Book Service</button>
					</div>
				</div>
			</section>

			<section className="single-service-2 container">
				<div className="single-service-2-inner">
					<div className="single-service-2-inner-top">
						<div className="single-service-2-inner-top-item">
							<p className="years">
								25 <sup>+</sup>
							</p>
							<p className="info">Completed Projects</p>
						</div>
						<div className="single-service-2-inner-top-item">
							<p className="years">
								25<sup> +</sup>
							</p>
							<p className="info">Trusted Partners</p>
						</div>
						<div className="single-service-2-inner-top-item">
							<p className="years">
								25<sup> +</sup>
							</p>
							<p className="info">Satisfied Clients</p>
						</div>
						<div className="single-service-2-inner-top-item">
							<p className="years">
								25<sup> +</sup>
							</p>
							<p className="info">Years Experience</p>
						</div>
					</div>
					<div className="single-service-2-inner-heading">
						<h3>Why Choose Us</h3>
						<div className="single-service-2-inner-bottom">
							<div className="single-service-2-inner-bottom-item">
								<div className="icon">
									<img src="/assets/img1.png" alt="p1" />
								</div>
								<p>Quality</p>
							</div>
							<div className="single-service-2-inner-bottom-item">
								<div className="icon">
									<img src="/assets/img2.png" alt="p1" />
								</div>
								<p>Integrity</p>
							</div>
							<div className="single-service-2-inner-bottom-item">
								<div className="icon">
									<img src="/assets/img3.png" alt="p1" />
								</div>
								<p>Safety</p>
							</div>
							<div className="single-service-2-inner-bottom-item">
								<div className="icon">
									<img src="/assets/img4.png" alt="p1" />
								</div>
								<p>Professionalism</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default singleservice;
