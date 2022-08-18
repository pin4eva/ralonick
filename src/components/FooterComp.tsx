import Link from "next/link";
import React from "react";

const FooterComp = () => {
	return (
		<footer>
			<div className="footer">
				<div className="part1">
					<h1>Rolanick LTD</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, ultrices aliquam, quis nunc erat. Amet nullam elementum eget nec. </p>
					<Link href="/"><button>All Services</button></Link>
				</div>
				<div className="part2">
					<h1>Company</h1>
					<div className="text">
						<h2>About</h2>
						<h2>Projects</h2>
						<h2>Services</h2>
					</div>

				</div>
				<div className="part21">
					<h1>Services</h1>
					<div className="text">
						<h2>Dredging</h2>
						<h2>Fireproofing</h2>
						<h2>Constructing</h2>
						<div className="button">
							<Link href="/">See all Services</Link>
							<Link href="/"><img src={("./images/VectorRed.png")} alt=""></img></Link>
						</div>

					</div>
				</div>
				<div className="part3">
					<h1>Contact</h1>
					<div className="text">
						<h1>+234 9012 624 162</h1>
						<h2>4517 Washington Ave.
							<br />
							Manchester, Kentucky 3949
						</h2>

					</div>
					<h3>Charlesclifford43@gmail.com</h3>
					<h4>Mon - Sat: 8;am-5pm</h4>

				</div>

				<div className="part4">
					<i class="fa-brands fa-figma"></i>
					<img src={("./images/twitter.png")} alt="" />
					<i class="fa-brands fa-instagram"></i>
					<div className="question">
					<p>Still Have a Question?</p>
					<Link href="/"><button>Send a Message</button></Link>
				</div>
				</div>

				
			</div>

			<p>footer component {new Date().getFullYear()}</p>
		</footer>
	);
};

export default FooterComp;
