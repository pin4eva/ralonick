import React from "react";
import FrontLayout from "../layouts/front.layout";
import HeroComp from "../components/HeroComp";
import AboutComp from "../components/AboutComp";
import WhoComp from "../components/WhoComp";
import WhyComp from "../components/WhyComp";

const Home = () => {
	return (
		<FrontLayout>
			<HeroComp/>
			<AboutComp/>
			<WhoComp/>
			<WhyComp/>
		</FrontLayout>
	);
};

export default Home;
