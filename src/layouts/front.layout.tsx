import React from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			<HeaderComp />
			<main className="app-children">{children}</main>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
