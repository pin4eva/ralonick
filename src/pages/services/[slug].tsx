import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { services } from ".";
import { IService } from "interface/service.interface";
import FrontLayout from "../../layouts/front.layout";
import ServiceSidebarComp from "components/serviceSidebarComp";

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
						<img src={service.image} alt="bg" />
					</div>
				</section>
				<div className="title">
					<p>{service.title}</p>
				</div>

				<section className="single-service-description container">
					<ServiceSidebarComp />

					<div className="single-service-description_inner">
						<div className="title-2">
							<p>{service.title}</p>
						</div>
						<div className="single-service-description_item">
							<p className="description-text">{service.description}</p>
							<h4 className="description-subitle">{service.subtitle}</h4>
							<p className="description-text">{service.subtext}</p>
						</div>

						<div className="single-service-image_wrapper">
							{service?.images?.map((image) => (
								<div className="grid-image">
									<img src={image} alt="" />
								</div>
							))}
						</div>
					</div>
				</section>
				{/* 
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
				</div> */}
			</div>
		</FrontLayout>
	);
};

export default Singleservice;
