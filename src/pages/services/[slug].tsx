/* eslint-disable @next/next/no-img-element */
import FrontLayout from "../../layouts/front.layout";

const singleservice = () => {
	return (
		<FrontLayout>
			<div className="single-service-wrapper">
				<section className="single-service-hero container">
					<div className="single-service-hero-image">
						<img src="/assets/Frame 50.png" alt="bg" />
					</div>
				</section>

				<section className="single-service-description container">
					<div className="single-service-description_inner">
						<h1 className="title">Active & Passive Fire Proofing</h1>

						<div className="single-service-description_item">
							<p className="description-text">
								Ralonick is a professional fire proofing company offering clients’ a one-stop for all their fire
								proofing needs be it passive or active fire proofing. Fire Proofing is applied to Building, Steel
								Decking, Structural Beams, Siding System.
							</p>
							<h4 className="description-subitle">Passive Fire Proofing:</h4>
							<p className="description-text">
								Passive Fire Proofing is a vital component for any structure of building to safeguard lives and limit
								financial impact of damage to building and their content. We offer Cementitious Fire Proofing, Mineral
								Fibre Fire Proofing, Itumescent Paint Fire Proofing under Passive Fire Proofing.
							</p>

							<h4 className="description-subitle">Active Fire Proofing:</h4>
							<p className="description-text">
								Active Fire Proofing (AFP) is an integral part of fire protection characterized by items and systems
								which require a certain amount of motion and response in order to work. We offer Manual Fire Suppression
								& Automatic Fire Suppression.
							</p>
						</div>

						<div className="single-service-image_wrapper">
							<div className="grid-image">
								<img src="/assets/b1.png" alt="b1" />
							</div>
							<div className="grid-image">
								<img src="/assets/b2.png" alt="b2" />
							</div>
							<div className="grid-image">
								<img src="/assets/b3.png" alt="b3" />
							</div>
							<div className="grid-image">
								<img src="/assets/b4.png" alt="b4" />
							</div>
						</div>
						<div className="order-button">
							<button className="btn btn-danger hug">Book Service</button>
						</div>
					</div>
				</section>

				<div className="statistics container">
					<div className="border-none statistics-info">
						<p className="primary-bold">25+</p>
						<p className="primary-light">Completed Projects</p>
					</div>
					<div className="statistics-info">
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

				<div className="quality-wrapper container">
					<h1 className="quality-wrapper-title">Why Choose Us</h1>
					<div className="quality-statistics">
						<div className="border-none quality-statistics-info">
							<div className="icons">
								<img src="/assets/img1.png" alt="p1" />
							</div>
							<p className="primary-light">Quality</p>
						</div>
						<div className="quality-statistics-info">
							<div className="icons">
								<img src="/assets/img2.png" alt="p1" />
							</div>
							<p className="primary-light">Integrity</p>
						</div>
						<div className="quality-statistics-info">
							<div className="icons">
								<img src="/assets/img3.png" alt="p1" />
							</div>
							<p className="primary-light">Safety</p>
						</div>
						<div className="border-none quality-statistics-info ">
							<div className="icons">
								<img src="/assets/img4.png" alt="p1" />
							</div>
							<p className="primary-light">Professionalism</p>
						</div>
					</div>
				</div>

				{/* <div className="single-service-2-inner-heading">
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
						</div> */}
			</div>
		</FrontLayout>
	);
};

export default singleservice;
