import React from "react";
import FrontLayout from "../layouts/front.layout";

const Home = () => {
	return (
		<FrontLayout>
			<div className="container">
				<h1 className="fw-800">Welcome Home</h1>

				<button className="btn btn-danger hug shadow-none">See Projects</button>
			</div>
		</FrontLayout>
	);
};

export default Home;
