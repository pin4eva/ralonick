/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer container" >
			<div className="footer-first-part">
				<p>RALONICK LTD.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam
					elementum eget nec.
				</p>
				<Link href="/about"><button className="btn btn-outline-danger hug">About Ralonik</button></Link>
			</div>
			<div className="footer-second-part">
				<p>Company</p>
				<ul>
					<li>
						<Link href="/about"><a>About</a></Link>
					</li>
					{/* <li>
						<Link href="/"><a>Projects </a></Link>
					</li> */}
					<li>
						<Link href="/services"><a>Services</a></Link>
					</li>
				</ul>
			</div>
			<div className="footer-third-part">
				<p>Services</p>
				<ul>
					<li>
						<Link href="/"><a>Dredging</a></Link>
					</li>
					<li>
						<Link href="/"><a>Fireproofing</a></Link>
					</li>
					<li>
						<Link href="/"><a>Constructing</a></Link>
					</li>
				</ul>
				<Link href="/services">
					<a className="footer_arrowlink">
						See all Services
						<img src="/assets/footerArrow.png" alt="" />
					</a>
				</Link>
			</div>
			<div className="footer-fourth-part">
				<div>Contact</div>
				<h6>+234 9012 624 162</h6>
				<p>Plot 102, Km 5 East-West Road,</p>
					<p>Rumuodara, Port Harcourt,</p>
					<p>Rivers State, Nigeria.</p>
			<a href="mailto:info@ralonik.com"><h6>info@ralonik.com</h6></a>
				<p>Mon - Sat: 8;am-5pm</p>
			</div>
			<div className="footer-last-part">

				<Link href="">
					<div className="footer_icons">
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
				</Link>

				<p>
					<Link href="/contact"><a>Still Have a Question? </a></Link>
				</p>
				<button className="btn hug btn-danger">Send a Message</button>
			</div>
		</footer>
	);
};

export default FooterComp;
