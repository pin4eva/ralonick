import React from "react";
import { useState } from "react";
import Link from "next/link";




const HeaderComp = () => {
	const [toogle, setToogle] = useState(false)
    function toggleMenu() {
        // console.log("clicked")
        setToogle(!toogle)
    }
	return (
		<div>
 <div className="nav">
        <div className="NavBar">

            <span>
                Ralonick <strong>LTD</strong>
            </span>
            <div className="hamburger" onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            <nav className="nav-display">
                <ul className={toogle ? 'nav-display' : "null"}>
                    {/* {this.state.NavBars.map(NavBar=>*/}
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Home</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>About</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Services</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Projects</button>
                            </Link>
                    </li>
                    <li>
                        <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                            <button>Contact us</button>
                            </Link>
                    </li>
                    {/* <NavLink to="/login" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li> <button>{props.text}</button></li></NavLink>
                        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'link active' : 'link')}><li> <button>SignUp</button></li></NavLink> */}


                </ul>
            </nav>
        </div>
        </div>
		</div>
		
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

// const navList = [
// 	{ name: "Home", link: "/" },
// 	{ name: "About", link: "/about" },
// 	{ name: "Services", link: "/services" },
// 	{ name: "Projects", link: "/projects" },
// ];

// const MobileNav = () => {
// 	return (
// 		<div className="mobile-nav">
// 			<ul className="nav flex-column">
// 				{navList.map((nav, i) => (
// 					<li key={i} className="nav-item">
// 						<Link href="/">
// 							<a className="nav-link">{nav.name}</a>
// 						</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };
