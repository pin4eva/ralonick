import React from "react";
import FrontLayout from "../layouts/front.layout";
import About from "./AboutComp";


const Home = () => {
	return (
		<FrontLayout>
			<div className="container">
		<About/>
				
			</div>
		</FrontLayout>
	);
};

export default Home;
