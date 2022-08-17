import React from "react";
import Link from "next/link";
import NavBar from "../pages/Header";

const HeaderComp = () => {
	return (
		<NavBar/>
		// <header className="app-header">
		// 	<nav className="navbar container">
		// 		<Link href="/">
		// 			<a className="logo nav-brand">Ralonick LTD</a>
		// 		</Link>

		// 		<ul className="nav d-none d-md-flex">
		// 			{navList.map((nav, i) => (
		// 				<li key={i} className="nav-item">
		// 					<Link href="/">
		// 						<a className="nav-link">{nav.name}</a>
		// 					</Link>
		// 				</li>
		// 			))}
		// 		</ul>

		// 		<button className="btn d-inline-block d-md-none border-0">
		// 			<i className="fas fa-bars"></i>{" "}
		// 		</button>
		// 	</nav>
		// </header>
	);
};

export default HeaderComp;

const navList = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Projects", link: "/projects" },
];

const MobileNav = () => {
	return (
		<div className="mobile-nav">
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
