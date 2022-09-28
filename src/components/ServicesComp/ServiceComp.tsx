/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { IService } from "pages/services";
import React, { useState } from "react";

interface IProp {
	service: IService;
	open: boolean;
	setOpen: () => void;
}

const ServiceComp: React.FC<IProp> = ({ service, open, setOpen }) => {
	return (
		<div className="service-layout container">
			<div className="service-box container">
				<h2 className="title-header" onClick={setOpen}>
					{service?.title}
				</h2>

				<div className={open ? "service-content" : "d-none"}>
					<div className="service-image">
						<img src={service?.image} />
					</div>
					<div className="service-text">
						<p className="subtitle">{service?.subtitle}</p>
						<p className="description">{service?.description}</p>
						<p className="subtext">{service?.subtext}</p>
					</div>

					<div className="service-image-grid">
						{service?.images?.map((image, i) => (
							<img src={image} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceComp;