import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import NavbarComp from "../components/NavbarComp";


const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			{/* <HeaderComp /> */}
			<NavbarComp/>
			<main className="app-children">{children}</main>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
