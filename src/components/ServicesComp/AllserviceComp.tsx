import React from "react";
import Data from "../data.json";
import ServiceInterface from "./service_interface";

const AllserviceComp = () => {
	return (
		<div>
			{Data.map((service) => (
				<ServiceInterface
					props={{
						title: service.title,
						image: service.image,
						description: service.text,
						images: service.images,
						subtitle: service.subtitle,
						subtext: service.subtext,
					}}
				/>
			))}
		</div>
	);
};

export default AllserviceComp;
