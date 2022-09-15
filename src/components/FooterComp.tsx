/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer container">
			<div className="footer-about-container">
				<p className="fw-700 footer-about-logo">RALONICK LTD.</p>
				<p className="fw-500 footer-about-description">
					Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria,with sole
					interest in operation and maintenance of production facilities.
				</p>
				<button className="btn btn-outline-danger hug">About Ralonik</button>
			</div>

			<div className="footer-navlinks">
				<p className="footer-links-title fw-600">Company</p>
				<ul className="list-unstyled links">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/services">Services</Link>
					</li>
				</ul>
			</div>

			<div className="footer-service-links">
				<p className="footer-service-link-title fw-600">Services</p>
				<ul className="list-unstyled">
					<li>
						<Link href="/">Dredging</Link>
					</li>
					<li>
						<Link href="/">Fireproofing</Link>
					</li>
					<li>
						<Link href="/">Constructing</Link>
					</li>
				</ul>
				<Link href="/services">
					<a className="footer_arrowlink">
						See all Services
						<Link href="/services">
							<img src="/assets/footerArrow.png" alt="" />
						</Link>
					</a>
				</Link>
			</div>

			<div className="footer-contacts">
				<p className="footer-contact-title fw-600">Contact</p>
				<p className="telephone fw-700">+234-70 3008 1280</p>
				<p className="location fw-400">
					Plot 102, Km 5 East-West Road, Rumuodara, Port Harcourt, Rivers State, Nigeria.
				</p>
				<p className="contact-email fw-700">ralonickservicesltd@gmail.com</p>
				<p className="open-duration fw-400">Mon - Sat: 8am-5pm</p>
			</div>

			<div className="footer-icon-details">
				<div className="footer_icons">
					<a href="www.figma.com">
						<i className="fa-brands fa-facebook"></i>
					</a>
					<a href="www.figma.com">
						<i className="fa-brands fa-twitter"></i>
					</a>
					<a href="www.figma.com">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</div>
				<p className="more-details fw-600">
					<Link href="/contact">Still Have a Question? </Link>
				</p>
				<Link href="/contact">
					<button className="btn hug btn-danger">Send a Message</button>
				</Link>
			</div>
		</footer>
	);
};

export default FooterComp;
