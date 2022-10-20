/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoComp from "./LogoComp";
import Services, { services } from "pages/services";

export const navList = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
];

const HeaderComp = () => {
	const router = useRouter();

	const [navDisplay, setNavDisplay] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const toggleService = () => {
		setDropdown(!dropdown);
	};

	const showNavHandler = () => {
		setNavDisplay(true);
	};
	const hideNavHandler = () => {
		setNavDisplay(false);
	};
	return (
		<React.Fragment>
			<header className="app-header">
				<nav className="desktop-nav container ">
					<Link href="/">
						<a className="logo">
							<LogoComp />
						</a>
					</Link>
					<ul className="app-nav">
						<li>
							<Link href={navList[0].link}>
								<a className={router.pathname == `${navList[0].link}` ? "active" : ""}>{navList[0].name}</a>
							</Link>
						</li>
						<li>
							<Link href={navList[1].link}>
								<a className={router.pathname == `${navList[1].link}` ? "active" : ""}>{navList[1].name}</a>
							</Link>
						</li>
						<li className="dropdown-center">
							<a
								className=" dropdown-toggle"
								id="book-dropdown"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								onClick={toggleService}
								onMouseOver={toggleService}
								onMouseOut={() => setDropdown(false)}
							>
								{navList[2].name}
							</a>
							<ul className={`dropdown-menu ${dropdown ? "d-block" : "d-none"}`} aria-labelledby="book-dropdown">
								{/* <li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li> */}
								{services.map((item, i) => {
									return (
										<li key={i}>
											<Link className="dropdown-item" href={`/services/${item.slug}`}>
												{item.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						{/* {navList.map((nav, i) => (
							<li key={i}>
								<Link href={nav.link}>
									<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
								</Link>
							</li>
						))} */}
						<li>
							<Link href="/contact">
								<button className="btn btn-danger">Contact Us</button>
							</Link>
						</li>
					</ul>
					<div className="bars">
						{navDisplay ? (
							<img className="c-pointer" src="/assets/closeButton.svg" alt="" onClick={hideNavHandler} />
						) : (
							<img className="c-pointer" src="/assets/hamburger.svg" alt="" onClick={showNavHandler} />
						)}
					</div>
				</nav>
				<div className={`mobile-nav  ${navDisplay ? "show" : "hide"}`}>
					<div className="inner container">
						<ul>
							{navList.map((nav, i) => (
								<li key={i}>
									<Link href={nav.link}>
										<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
									</Link>
								</li>
							))}
							<li>
								<Link href="/contact">
									<button className="btn btn-danger">Contact Us</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
};

export default HeaderComp;
{
	/* <a className={router.pathname == `${navList[2].link}` ? "active" : ""}>{navList[2].name}</a> */
}
