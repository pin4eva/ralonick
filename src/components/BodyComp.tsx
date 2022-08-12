import React from "react";
// import frd from "../components/Assets/helmet.jpg";
// import plants from "./Assets/steel plant.png"

const BodyComp = () => {
	return (
		<div className="container1">
			<section className="about ">
				<div className="us">
					<h6>ROLANIK</h6>
					<h3>About Us</h3>
					<p>
						Our operation is based on a diverse and flexible structure. We adopt a <br />
						system of Total quality Management (TQM) at a reasonable cost and within <br /> the shortest possible time,
						in conjunction with our technical partners. We <br /> provide end to end service in the design, engineering,
						procurement, <br /> fabrication, installation, repair and support of Glass fiber Reinforced Epoxy <br />{" "}
						(GRE) Polyester (GRP) and Vinylester Pipe system and products. <br /> <br /> Odio quisque potenti feugiat
						commodo sit hendrerit cum platea. Turpis <br /> neque in turpis commodo egestas turpis auctor ut pharetra.
						Arcu quam <br /> morbi viverra lectus facilisi.
					</p>{" "}
					<br />
					<button className="btn">Learn More</button>
				</div>
				<div className="people">
					{/* <img src="" alt="we" /> */}
					<img src="/Assets/helmet.jpg" alt="" />
				</div>
			</section>

			<section className="why">
				<div className="plant">
					{/* <img src= {plants} alt="fill" /> */}
					<img src="/Assets/steel plant.png" />
				</div>
				<div className="choose">
					<h3>Why Choose Us</h3>
					<div className="write1">
						<div className="a">
							<div className="square-icon"></div>
							<p>Quality</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br />{" "}
								vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br />{" "}
								Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br />{" "}
								malesuada. Est sit vitae urna.
							</p>
						</div>
						<div className="b">
							<div className="square-icon"></div>
							<p>Integrity</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br />{" "}
								vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br />{" "}
								Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br />{" "}
								malesuada. Est sit vitae urna.
							</p>
						</div>
					</div>
					<div className="write2">
						<div className="c">
							<div className="square-icon"></div>
							<p>Professionalism</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br />{" "}
								vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br />{" "}
								Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br />{" "}
								malesuada. Est sit vitae urna.
							</p>
						</div>
						<div className="d">
							<div className="square-icon"></div>
							<p>Safety</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br />{" "}
								vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br />{" "}
								Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br />{" "}
								malesuada. Est sit vitae urna.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="services">
				<div className="works">
					<h3>Our Services</h3>
					<div className="all">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum
							aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio
						</p>
						<div>
							<button className="btn">All Services</button>
						</div>
					</div>
					<div className="grid-container">
						<div className="grid-item">
							<img src="/Assets/f1.png" alt="ff1" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum
										nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa
										arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									<img src="/Assets/arrow.png" alt="lp" />
								</div>
							</div>
						</div>
						<div className="grid-item">
							<img src="/Assets/f2.png" alt="ff2" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum
										nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa
										arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									<img src="/Assets/arrow.png" alt="lp" />
								</div>
							</div>
						</div>
						<div className="grid-item">
							<img src="/Assets/f3.png" alt="ff3" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum
										nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa
										arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									<img src="/Assets/arrow.png" alt="lp" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BodyComp;
