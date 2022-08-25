/* eslint-disable @next/next/no-img-element */
import React from "react";
import FrontLayout from "../../layouts/front.layout";

const singleservice = () => {
	return (
		<div className="proofing">
			<section className="image">
				<img src="/assets/Frame 50.png" alt="bg" />
			</section>

			<section className="fire container">
				<div className="proofing">
					<h2>Active & Passive Fire Proofing</h2>

					<div className="prof">
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

					<div className="build">
						<div className="rod">
							<img src="/assets/b1.png" alt="rodd" />
						</div>
						<div className="tall">
							<img src="/assets/b2.png" alt="tll" />
						</div>
						<div className="steel">
							<img src="/assets/b3.png" alt="sl" />
						</div>
						<div className="block">
							<img src="/assets/b4.png" alt="bk" />
						</div>
					</div>
					<div className="bb">
						<button className="btn btn-danger hug">Book Service</button>
					</div>
				</div>
			</section>

			<section className="content container">
				<div className="grid ">
					<div className="grid-item">
						<p className="no">25+</p>
						<p className="letter">Completed Projects</p>
					</div>
					<div className="grid-item">
						<p className="no">25+</p>
						<p className="letter">Completed Projects</p>
					</div>
					<div className="grid-item">
						<p className="no">25+</p>
						<p className="letter">Completed Projects</p>
					</div>
					<div className="grid-item">
						<p className="no">25+</p>
						<p className="letter">Completed Projects</p>
					</div>
				</div>
				<div className="reason">
					<h3>Why Choose Us</h3>
					<div className="why">
						<div className="pics">
							<div className="icon">
								<img src="/assets/img1.png" alt="p1" />
							</div>
							<p>Quality</p>
						</div>
						<div className="pics">
							<div className="icon">
								<img src="/assets/img2.png" alt="p1" />
							</div>
							<p>Integrity</p>
						</div>
						<div className="pics">
							<div className="icon">
								<img src="/assets/img3.png" alt="p1" />
							</div>
							<p>Safety</p>
						</div>
						<div className="pics">
							<div className="icon">
								<img src="/assets/img4.png" alt="p1" />
							</div>
							<p>Professionalism</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default singleservice;
