import Link from "next/link";
import React, { useState } from "react";
// import frame9 from './images/Frame9.png';

const HeaderComp = () => {
	const [toggle, setToggle] = useState(false);

	// const [show,setShow] = useState(true)

	const toggleMenu = () => {
		setToggle(!toggle);
	};

	// const showStuff = () => {
	// 	toggleMenu()
	// 	setShow(!show)
	// }

	return (
		<header className="app-header">
			<nav className="navbar container">
				<Link href="/">
					<a className="logo nav-brand">Ralonick LTD</a>
				</Link>

				<ul className={toggle ? " nav d-block" : "nav d-none d-md-flex"} onClick={() => setToggle(false)}>
					{navList.map((nav, i) => (
						<li key={i} className="nav-item">
							<Link href="/">
								<a className="nav-link">{nav.name}</a>
							</Link>
						</li>
					))}
					<li className="nav-item">
						<button className="btn btn-danger  shadow-none">Contact Us</button>
					</li>
				</ul>
				<button className="btn d-inline-block d-md-none border-0" onClick={() => setToggle(!toggle)}>
					{toggle ? <i className="fas fa-close"></i> : <i className="fas fa-bars hide"></i>}
				</button>
			</nav>

			<div className="line"></div>
			<Hero />
		</header>
	);
};

export default HeaderComp;

const navList = [
	//===========Mapped Through Navlinks===============
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Projects", link: "/projects" },
];

const MobileNav = () => {
	return (
		<div className="mobile-nav d-block d-md-none">
			<ul className="nav flex-column">
				{navList.map((nav, i) => (
					<li key={i} className="nav-item">
						<Link href="/">
							<a className="nav-link">{nav.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
//============HERO SECTION OF THE PAGE===============
const Hero = () => {
	return (
		<div className="hero-section row container-fluid">
			<div className="hero-image-1 row col-md-3 justify-content-md-cente pt-3">
				<img src="images/Frame9.png" alt="this image" />
			</div>

			<div className="hero-text col-md-5 container justify-content-md-center mt-3">
				<p className="fw-800 hero-h1 pt-5">Diverse & Flexible Structure</p>
				<p className="fw-500 hero-h5 pt-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida facilisi mauris morbi.
				</p>
				<div className="pt-4">
					<button className="btn btn-danger hug shadow-none ">See Projects</button>
				</div>
			</div>

			<div className="hero-image-2 row justify-content-md-center mt-5 col-md-5">
				<img className="dark-image" src="images/Frame8.png" alt="" />
				{/* <span className="absolute">
					<img className="blur-image" src="images/Frame10.png " alt="" />
				</span> */}
			</div>
		</div>
	);
};
