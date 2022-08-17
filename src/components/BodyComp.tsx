import React from "react";
import cards from "./cards.json";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import frd from "../components/Assets/helmet.jpg";
// import plants from "./Assets/steel plant.png"

const BodyComp = () => {
	return (
		<div className="container1">
			<section className="diverse container">
				<div className="grid-i">
					<img src="/assets/Frame 9.png" alt="ref" />
				</div>
				<div className="grid-i">
					<h3>
						Diverse & Flexible <br /> Structure
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Gravida facilisi mauris morbi.
					</p>
					<button className="btn btn-danger hug shadow-none">See Projects</button>
				</div>
				<div className="grid-i"></div>
				<div className="grid-i ">
					<img src="/assets/Frame 8.png" alt="" />
				</div>
			</section>

			<section className="about container">
				<div className="us">
					<h6>ROLANIK</h6>
					<h3>About Us</h3>
					<p>
						Our operation is based on a diverse and flexible structure. We adopt a <br />
						system of Total quality Management (TQM) at a reasonable cost and within <br /> the shortest possible time, in conjunction with our technical partners. We <br /> provide end to end service in the design, engineering, procurement, <br /> fabrication, installation, repair and support of Glass fiber Reinforced Epoxy <br /> (GRE) Polyester (GRP) and Vinylester Pipe system and products. <br /> Odio quisque potenti feugiat commodo sit hendrerit cum platea. Turpis <br /> neque in turpis commodo egestas turpis auctor ut pharetra. Arcu quam <br /> morbi viverra lectus facilisi.
					</p>{" "}
					<button className="btn">Learn More</button>
				</div>
				<div className="people">
					{/* <img src="" alt="we" /> */}
					<img src="/assets/helmet.jpg" alt="" />
				</div>
			</section>

			<section className="transform container">
				<div className="tx">
					<h6>ROLANIK</h6>
					<p className="t1">Who We Are...</p>
					<h2>
						Transforming <br />
						With Innovations
					</h2>
					<p className="lor">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus <br />
						risus, velit enim semper vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis <br /> fermentum sapien sem iaculis augue erat. Ut dignissim sapien,
						<br /> nibh dolor malesuada. Est sit vitae urna.
					</p>

					<div className="nos">
						<div className="things">
							<p className="dd">25</p>
							<p className="rr">Years Experience</p>
						</div>
						<div className="things">
							<p className="qq">25</p>
							<p className="cc">Industries served</p>
						</div>
						<div className="things">
							<p className="xx">25</p>
							<p className="ff">Factories Built</p>
						</div>
					</div>
				</div>
				<br />
				<div className="cy">
					<img src="/assets/Frame 1.png" alt="fre" />
				</div>
			</section>

			<section className="why container">
				<div className="plant">
					{/* <img src= {plants} alt="fill" /> */}
					<img src="/assets/steel plant.png" />
				</div>
				<div className="choose">
					<h3>Why Choose Us</h3>
					<div className="write1">
						<div className="a">
							<div className="square-icon"></div>
							<p>Quality</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br /> Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br /> malesuada. Est sit vitae urna.
							</p>
						</div>
						<div className="b">
							<div className="square-icon"></div>
							<p>Integrity</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br /> Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br /> malesuada. Est sit vitae urna.
							</p>
						</div>
					</div>
					<div className="write2">
						<div className="c">
							<div className="square-icon"></div>
							<p>Professionalism</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br /> Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br /> malesuada. Est sit vitae urna.
							</p>
						</div>
						<div className="d">
							<div className="square-icon"></div>
							<p>Safety</p> <br />
							<p>
								Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum aliquet. Ultricies tempor ac <br /> curabitur ornare at nunc facilisis tincidunt nisl. <br /> Odio id quis fermentum sapien sem iaculis <br /> augue erat. Ut dignissim sapien, nibh dolor <br /> malesuada. Est sit vitae urna.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="services">
				<div className="services-inner container">
					<h3>Our Services</h3>
					<div className="all">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper <br /> vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio
						</p>
						<div>
							<button className="btn">All Services</button>
						</div>
					</div>
					<div className="gird-v">
						<div className="gird-i">
							<img src="/Assets/f1.png" alt="ff1" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									{/* <img src="/Assets/arrow.png" alt="lp" /> */}
								</div>
							</div>
						</div>
						<div className="gird-i">
							<img src="/Assets/f2.png" alt="ff2" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									{/* <img src="/Assets/arrow.png" alt="lp" /> */}
								</div>
							</div>
						</div>
						<div className="gird-i">
							<img src="/Assets/f3.png" alt="ff3" />
							<div className="wp">
								<div className="w1">
									<h6>Chemical Research</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Duis mi sagittis aliquet elementum nunc lectus. <br /> Arcu, non ornare commodo, convallis lectus. Proin <br /> scelerisque sed massa arcu nunc id ridiculus purus <br /> cursus. Luctus dolor et consequat nunc at ut.
									</p>
								</div>
								<div className="ln">
									<p>Learn More</p>
									{/* <img src="/Assets/arrow.png" alt="lp" /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="review container">
				<div className="client">
					<h2>Clients Reviews</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros vitae vitae dictum mattis risus, ut nec. <br /> Rhoncus egestas quis pellentesque risus posuere.facilisis. Enim quisque id sit molestie tincidunt <br /> faucibus. Amet, dictum eget egestas dictum non leo cras faucibus egestas. Mattis imperdiet elit <br /> nullam adipiscing lobortis fames. Et egestas vitae feugiat nisi, sed sit in pulvinar at. Ultrices tincidunt <br /> vel in sit ullamcorper. Sollicitud
					</p>
					<div className="profile">
						<div className="image">
							<img src="/assets/lady.jpg" alt="babe" />
							<h4>Cindy Clifford</h4>
							<h5>Rumuodara Interior Designer</h5>
							<br />
						</div>
					</div>
				</div>
				<div>
					{/* <Swiper
					   modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={20}
						slidesPerView={3}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{cards.map((card, i) => (
							<SwiperSlide key={i}>
								<div>
									<img src={card.image} alt="" />
								</div>
							</SwiperSlide>
						))}
					</Swiper> */}
				</div>
			</section>

			<section className="projects container">
				<div className="proj">
					<h2>Our Projects</h2>

					<div className="grid-container">
						<div className="contain">
							<div className="con1">
								<div className="image-container">
									<h6>Project Name</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Duis mi sagittis aliquet elementum nunc lectus. Arcu, <br /> non ornare commodo, convallis lectus.
									</p>
									<h6>
										More Details <img src="/Assets/arrow.png" alt="lp" />
									</h6>
								</div>
							</div>
							<div className="con2"></div>
						</div>
						<br />
						<div className="fill">
							<div className="el1"></div>
							<div className="el2">
								<div className="image-container1">
									<h6>Project Name</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Duis mi sagittis aliquet elementum nunc lectus. Arcu, <br /> non ornare commodo, convallis lectus.
									</p>
									<h6>
										More Details <img src="/Assets/arrow.png" alt="lp" />
									</h6>
								</div>
							</div>
						</div>
						<br />
						<div className="file">
							<div className="ril1">
								<div className="image-container3">
									<h6>Project Name</h6>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Duis mi sagittis aliquet elementum nunc lectus. Arcu, <br /> non ornare commodo, convallis lectus.
									</p>
									<h6>
										More Details <img src="/Assets/arrow.png" alt="lp" />
									</h6>
								</div>
							</div>
							<div className="con3"></div>
						</div>
						<br />
						<button className="btn btn-danger hug shadow-none mx-auto">All Services</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BodyComp;
