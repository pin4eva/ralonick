/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer" >
			<div className="footer-first-part">
				<p>RALONICK LTD.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam
					elementum eget nec.
				</p>
				<button className="btn btn-outline-danger hug">About Ralonik</button>
			</div>
			<div className="footer-second-part">
				<p>Company</p>
				<ul>
					<li>
						<Link href="/"><a>About</a></Link>
					</li>
					<li>
						<Link href="/"><a>Projects </a></Link>
					</li>
					<li>
						<Link href="/"><a>Services</a></Link>
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
				<Link href="/">
					<a className="footer_arrowlink">
						See all Services
						<img src="/assets/footerArrow.png" alt="" />
					</a>
				</Link>
			</div>
			<div className="footer-fourth-part">
				<p>Contact</p>
				<p>+234 9012 624 162</p>
				<p>4517 Washington Ave. Manchester, Kentucky 3949</p>
				<p>Charlesclifford43@gmail.com</p>
				<p>Mon - Sat: 8;am-5pm</p>
			</div>
			<div className="footer-last-part">
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
