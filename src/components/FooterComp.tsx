import React from "react";

const FooterComp = () => {
	return (
		<footer>
			<div className="contain containe">
				<div className="ranolink containe">
					<img src="images/RalonikLTD.svg" alt="" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet
						nullam elementum eget nec.{" "}
					</p>
					<button className="btn d-inline-block btn-danger hug shadow-none">About Ralonik</button>
				</div>



				<div className="company contaner">
					<h5>Company</h5>
					
					<p className="top">About</p>
					<p>Projects</p>
					<p>Services</p>
				</div>

				<div className="services contaner">
					<h5>Services</h5>
					
					<p className="top">Dredging</p>
					<p>Fireproofing</p>
					<p>Construction</p>
					<p className="danger">
						see all Services <i className="fa-solid fa-square-arrow-up-right"></i>{" "}
					</p>
				</div>

				<div className="contact conainer">
					<h5>Contact</h5>
					
					<p className="fw-700">+234 9012 624 162</p>
					<p className="location">4517 Washington Ave. Manchester, Kentucky 3949</p>
					<p className=" email">Charlesclifford43@gmail.com</p>
					<p className="date">Mon - Sat: 8;am-5pm</p>
				</div>
				<div className="icon contaner">
					<div>
						<i className="fa-brands fa-twitter"></i>
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-brands fa-figma"></i>
					</div>

					<p className="fw-600">Still Have a Question?</p>
					<button className="btn btn-danger">Send a Message</button>
				</div>

				{/* <p>footer component {new Date().getDate()}</p> */}
			</div>
		</footer>
	);
};

export default FooterComp;
