import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer>
			<div className="vessel container">
				{/* <p>footer component {new Date().getFullYear()}</p> */}
				<div className="grid-item">
					<h4>Ralonik LTD</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Dolor, ultrices aliquam, <br /> quis nunc erat. Amet nullam elementum <br /> eget nec.{" "}
					</p>

					<button className="ll btn-primary">About Ralonik</button>
				</div>
				<div className="grid-item">
					<h5>Company</h5>
					<p>About</p>
					<p>Projects</p>
					<p>Services</p>
				</div>
				<div className="grid-item">
					<h5>Services</h5>
					<p>Dredging</p>
					<p>Fireproofing</p>
					<p>Constructing</p>
					<h5 className="see">
						<Link href="/">See all Services</Link> <img src="/assets/Vector 1.png" alt="" />
					</h5>
				</div>
				<div className="grid-item">
					<h5 className="c">Contact</h5>
					<h5 className="r1">+234 9012 624 162</h5>
					<p>
						4517 Washington Ave. <br /> Manchester, Kentucky 3949
					</p>
					<h5 className="r2">Charlesclifford43@gmail.com</h5>
					<p>Mon - Sat: 8;am-5pm</p>
				</div>
				<div className="grid-item">
					<p>
						<i className="fa-brands fa-figma"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-instagram"></i>
					</p>{" "}
					<br /> <br />
					<p>
						{" "}
						<b>Still Have a Question?</b>
					</p>
					<br />
					<button className="btn btn-danger hug shadow-none mx-auto">Send a Message</button>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;
