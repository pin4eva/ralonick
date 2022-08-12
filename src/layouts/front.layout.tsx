import React from "react";
import BodyComp from "../components/BodyComp";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";



const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			<HeaderComp />
			<main className="app-children">{children}</main>
			<BodyComp />
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
