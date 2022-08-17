import React from "react";
import Link from "next/link";

const FooterComp = () => {
	return (
		<footer className="footer">
			<div>
				<p>RALONICK LTD.</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam
					elementum eget nec.{" "}
				</p>
				<button className="btn2">About Ralonik</button>
			</div>
			<div>
				<p>Company</p>
				<ul>
					<li>
						<Link href="/h">About</Link>
					</li>
					<li>
						<Link href="/i">Projects</Link>
					</li>
					<li>
						<Link href="/j">Services</Link>
					</li>
				</ul>
			</div>
			<div>
				<p>Services</p>
				<ul>
					<li>
						<Link href="/k">Dredging</Link>
					</li>
					<li>
						<Link href="/l">Fireproofing</Link>
					</li>
					<li>
						<Link href="/m">Constructing</Link>
					</li>
				</ul>
				<Link href="/n">
					<a className="footer_arrowlink">
						See all Services
						<img src="/assets/footerArrow.png" alt="" />
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
					<Link href="/n"> Still Have a Question? </Link>
				</p>
				<button className="btn1">Send a Message</button>
			</div>
		</footer>
	);
};

export default FooterComp;
