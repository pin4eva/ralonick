import React, { useState } from "react";

interface IServicecomp {
	image?: string;
	title?: string;
	description?: string;
	subtitle?: string;
	subtext?: string;
	images?: string[];
}

const ServiceInterface: React.FC<{ props: IServicecomp }> = ({ props }) => {
	const [body, setBody] = useState(false);

	const showHandler = () => {
		setBody(!body);
	};
	return (
		<div className="service-box container">
			<h2 className="title-header" onClick={showHandler}>
				{props.title}
			</h2>

			<div className={body ? "service-content" : "d-none"}>
				<div className="service-image">
					<img src={props.image} />
				</div>
				<div className="service-text">
					<p className="description">{props.description}</p>
					<p className="subtitle">{props.subtitle}</p>
					<p className="subtext">{props.subtext}</p>
				</div>

				<div className="service-image-grid">
					{props.images?.map((image) => (
						<img src={image} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceInterface;
