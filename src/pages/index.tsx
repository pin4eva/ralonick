import React from "react";
import FrontLayout from "../layouts/front.layout";
import HeroComp from "../components/HeroComp";
import AboutComp from "../components/AboutComp";
import WhoComp from "../components/WhoComp";
import WhyComp from "../components/WhyComp";
import OurServicesComp from "../components/OurServicesComp";
import ReviewsComp from "../components/ReviewsComp";
import ProjectsComp from "../components/ProjectsComp";

const Home = () => {
	return (
		<FrontLayout>
			<HeroComp/>
			<AboutComp/>
			<WhoComp/>
			<WhyComp/>
			<OurServicesComp/>
			<ReviewsComp/>
			<ProjectsComp/>
		</FrontLayout>
	);
};

export default Home;
