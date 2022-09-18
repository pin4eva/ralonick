/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IService, services } from ".";
import FrontLayout from "../../layouts/front.layout";

const Singleservice = () => {
	const router = useRouter();
	const [service, setService] = useState<IService>();

	useEffect(() => {
		const slug = router.query?.slug;
		const service = services.find((service) => service.slug === slug);
		setService(service);
	}, [router]);

	if (!service) return <p>Loading...</p>;
	return (
		<FrontLayout>
			<div className="single-service-wrapper">
				<section className="single-service-hero container">
					<div className="single-service-hero-image">
						<img src={service?.image} alt="bg" />
					</div>
				</section>

				<section className="single-service-description container">
					<div className="single-service-description_inner">
						<h1 className="title">{service.title}</h1>

						<div className="single-service-description_item">
							<p className="description-text">{service.description}</p>
							<h4 className="description-subitle">{service.subtitle}</h4>
							<p className="description-text">{service.subtext}</p>
						</div>

						<div className="single-service-image_wrapper">
							<div className="grid-image">
								<img src="/assets/b4.png" alt="b1" />
							</div>
							<div className="grid-image">
								<img src="/assets/b3.png" alt="b2" />
							</div>
							<div className="grid-image">
								<img src="/assets/b2.png" alt="b3" />
							</div>
							<div className="grid-image">
								<img src="/assets/b1.png" alt="b4" />
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
			</div>
		</FrontLayout>
	);
};

export default Singleservice;
