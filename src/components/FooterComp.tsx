/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer">
			<div>
				<p>RALONICK LTD.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam
					elementum eget nec.
				</p>
				<button className="btn btn-outline-danger hug">About Ralonik</button>
			</div>
			<div>
				<p>Company</p>
				<ul>
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
			<div>
				<p>Services</p>
				<ul>
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
			<div>
				<p>Contact</p>
				<p>+234 9012 624 162</p>
				<p>4517 Washington Ave. Manchester, Kentucky 3949</p>
				<p>Charlesclifford43@gmail.com</p>
				<p>Mon - Sat: 8;am-5pm</p>
			</div>
			<div>
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
				<p>
					<Link href="/">Still Have a Question? </Link>
				</p>
				<button className="btn hug btn-danger">Send a Message</button>
			</div>
		</footer>
	);
};

export default FooterComp;
