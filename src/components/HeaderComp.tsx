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

export const documents = [
	{ name: "Industry Operational Permit", link: "/certificate/specialized-category.pdf" },
	{ name: "Service Operational Permit", link: "/certificate/major-category.pdf" },
	{ name: "C.A.C", link: "/certificate/CAC-Certificate.pdf" },
	{ name: "NCDMB Certificate", link: "/certificate/NCDMB-Cert.pdf" },
	{ name: "Nogic Certificate", link: "/certificate/Nogic.pdf" },
	{ name: "Tin Certificate", link: "/certificate/Tin.pdf" },
];

const HeaderComp = () => {
	const router = useRouter();

	const [navDisplay, setNavDisplay] = useState(false);

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
								<a className={router.pathname == `${navList[0].link}` ? "active" : ""}>{navList[0].name}</a>
							</Link>
							<div className={router.pathname == `${navList[0].link}` ? "d-none" : ""}></div>
						</li>
						<li className="click">
							<Link href={navList[1].link}>
								<a className={router.pathname == `${navList[1].link}` ? "active" : ""}>{navList[1].name}</a>
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
							>
								{navList[2].name}
							</a>

							<div></div>

							<ul className="dropdown-menu" aria-labelledby="book-dropdown">
								{services.slice(0, 4).map((item, i) => {
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
						<li className="dropdown">
							<a
								className=" dropdown-toggle"
								id="book-dropdown"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{navList[3].name}
							</a>
							<div></div>

							<ul className="dropdown-menu custom" aria-labelledby="book-dropdown">
								{documents.map((item, i) => {
									return (
										<li key={i}>
											<Link href={item.link} className="dropdown-item">
												{item.name}
											</Link>
										</li>
									);
								})}
							</ul>
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
							<i className="fa-solid fa-bars c-pointer" onClick={showNavHandler}></i>
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
