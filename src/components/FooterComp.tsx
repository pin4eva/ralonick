/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer container">
			<div className="part-1">
				<h4>RALONICK LTD.</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam
					elementum eget nec.
				</p>
				<button className="btn btn-outline-danger hug">About Ralonik</button>
			</div>
			<div className="part-2">
				<h5>Company</h5>
				<p>
					<Link href="/about">About</Link>
				</p>
				<p>
					<Link href="/">Projects</Link>
				</p>
				<p>
					<Link href="/services">Services</Link>
				</p>
			</div>
			<div className="part-3">
				<h5>Services</h5>
				<p>
					<Link href="/">Dredging</Link>
				</p>
				<p>
					<Link href="/">Fireproofing</Link>
				</p>
				<p>
					<Link href="/">Constructing</Link>
				</p>
				<div className="services-link">
					<Link href="/services">
						<a>
							See all Services
							<img src="/assets/footerArrow.png" alt="" />
						</a>
					</Link>
				</div>
			</div>
			<div className="part-4">
				<h5>Contact</h5>
				<p>+234 9012 624 162</p>
				<p>4517 Washington Ave. Manchester, Kentucky 3949</p>
				<a href="www.info@ralonik.com">
					info@ralonik.com
				</a>
				<p>Mon - Sat: 8;am-5pm</p>
			</div>
			<div className="part-5">
				<div className="footer-icons">
					<a href="www.figma.com">
						<i className="fa-brands fa-figma"></i>
					</a>
					<a href="www.figma.com">
						<i className="fa-brands fa-twitter"></i>
					</a>
					<a href="www.figma.com">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</div>
				<h5>Still Have a Question?</h5>
				<button className="btn btn-danger hug">Send a Message</button>
			</div>
		</footer>
	);
};

export default FooterComp;
