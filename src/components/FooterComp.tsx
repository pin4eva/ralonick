
import React from "react";
import Link from "next/link";

const FooterComp: React.FC = () => {
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
								<Link href="/">About</Link>
							</li>
							<li>
								<Link href="/">Projects</Link>
							</li>
							<li>
								<Link href="/">Services</Link>
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
						<Link href="/">
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
							<Link href="/"> Still Have a Question? </Link>
						</p>
						<button className="btn hug btn-danger">Send a Message</button>
					</div>

					<p>footer component {new Date().getFullYear()}</p>
				</footer>
			</div>
		</footer>
	);
};

export default FooterComp;
