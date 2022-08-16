import React from "react";
import BodyComp from "../components/BodyComp";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
	return (
		<div className="app">
			<HeaderComp />
			<BodyComp />
			<main className="app-children">{children}</main>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;
