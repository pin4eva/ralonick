import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { useRouter } from "next/router";
import ButtonDark from ".//ButtonDark";

const navList = [
	{ name: "Home", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "Projects", link: "/projects" },
];

const NavbarComp = () => {
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
		<div className="navbar">
			<p>Ralonick LTD.</p>
			<nav>
				<ul>
					{navList.map((nav, i) => (
						<li key={i}>
							<Link href={nav.link}>
								<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
							</Link>
						</li>
					))}
					<li>
						<ButtonDark className="navBtn">Contact Us</ButtonDark>
					</li>
				</ul>
			</nav>
			<div>
				{navDisplay ? (
            <img src="/assets/closeButton.svg" alt="" onClick={hideNavHandler} />
          ) : (
            <img src="/assets/hamburger.svg" alt="" onClick={showNavHandler} />
          )}
      </div>
		</div>
    <div
        className={`mobile_nav ${
          navDisplay ? "show" : "hide"
        }`}
      >
        	<ul>
					{navList.map((nav, i) => (
						<li key={i}>
							<Link href={nav.link}>
								<a className={router.pathname == `${nav.link}` ? "active" : ""}>{nav.name}</a>
							</Link>
						</li>
					))}
					<li>
						<ButtonDark className="navBtn">Contact Us</ButtonDark>
					</li>
				</ul>
    </div>
     </React.Fragment>
	);
};

export default NavbarComp;
