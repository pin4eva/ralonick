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
	{ name: "Documents", link: "/documents" },
];

const HeaderComp = () => {
	const router = useRouter();

	const [navDisplay, setNavDisplay] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const showDropdown = () => {
		setDropdown(!dropdown);
		let change = document.getElementById("remove-active");
		change?.classList.remove("active");
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
						<li className="click">
							<Link href={navList[0].link}>
								<a className={router.pathname == `${navList[0].link}` ? "active" : ""} id="remove-active">
									{navList[0].name}
								</a>
							</Link>
							<div className={router.pathname == `${navList[0].link}` ? "d-none" : ""}></div>
						</li>
						<li className="click">
							<Link href={navList[1].link}>
								<a className={router.pathname == `${navList[1].link}` ? "active" : ""} id="remove-active">
									{navList[1].name}
								</a>
							</Link>
							<div className={router.pathname == `${navList[1].link}` ? "d-none" : ""}></div>
						</li>
						<li className="dropdown">
							<a
								className=" dropdown-toggle"
								id="book-dropdown"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								// onClick={showDropdown}
							>
								{navList[2].name}
							</a>
							<div></div>

							<ul className="dropdown-menu" aria-labelledby="book-dropdown">
								{services.map((item, i) => {
									return (
										<li key={i} onClick={() => setDropdown(false)}>
											<Link className="dropdown-item" href={`/services/${item.slug}`}>
												{item.title}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						<li className="click">
							<Link href={navList[3].link}>
								<a className={router.pathname == `${navList[3].link}` ? "active" : ""} id="remove-active">
									{navList[3].name}
								</a>
							</Link>
							<div className={router.pathname == `${navList[3].link}` ? "d-none" : ""}></div>
						</li>
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

{
	/* {navList.map((nav, i) => (
							<li key={i}>
								<Link href={nav.link}>
									<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
								</Link>
							</li>
						))} */
}
