import React from "react";
import Services, { services } from "pages/services";
import Link from "next/link";

const ServiceSidebarComp = () => {
	return (
		<div>
			{services.map((item) => {
				return <aside>{<Link href={`/services/${item.slug}`}>{item.title}</Link>}</aside>;
			})}
		</div>
	);
};

export default ServiceSidebarComp;
