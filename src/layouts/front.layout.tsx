import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import Home from "../pages/Home";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			<HeaderComp />
			<Home/>
			<main className="app-children">{children}</main>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
