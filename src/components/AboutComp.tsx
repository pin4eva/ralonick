import React from "react";

const AboutComp = () => {
	return (
		<div className="about">
			<section className="about_text_sect">
				<p>RALONICK</p>
				<h2>About Us</h2>
				<p>
					Our operation is based on a diverse and flexible structure. We adopt a system of Total quality Management
					(TQM) at a reasonable cost and within the shortest possible time, in conjunction with our technical partners.
					We provide end to end service in the design, engineering, procurement, fabrication, installation, repair and
					support of Glass fiber Reinforced Epoxy (GRE) Polyester (GRP) and Vinylester Pipe system and products.
				</p>
				<p>
					Odio quisque potenti feugiat commodo sit hendrerit cum platea. Turpis neque in turpis commodo egestas turpis
					auctor ut pharetra. Arcu quam morbi viverra lectus facilisi.
				</p>
				<button className="btn2">LEARN MORE</button>
			</section>
			<section className="about_img_sect">
				<img src="/assets/about_img1.png" alt="" />
			</section>
		</div>
	);
};

export default AboutComp;
