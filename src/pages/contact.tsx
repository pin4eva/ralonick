import React from "react";
import FrontLayout from "../layouts/front.layout";

const contact = () => {
	return (
		<FrontLayout>
			<div className="contact-page container">
				<div className="contact-header">
					<h1>Get In Touch</h1>
					<p>
						<i className="fa-solid fa-phone"></i>+234-70 3008 1280
					</p>
					<p>
						<i className="fa-solid fa-envelope"></i>Email: ralonickservicesltd@gmail.com
					</p>
					<p>
						<i className="fa-solid fa-location-dot"></i>Plot 102, Km 5 East-West Road, Rumuodara, Port Harcourt, Rivers
						State, Nigeria.
					</p>
				</div>
				<form>
					<div className="form-group input-box">
						<input
							type="name"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Your Name"
						/>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="your Email"
							required
						/>
						<input
							type="number"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Your Phone"
						/>
					</div>
					<div className="form-group textarea">
						<textarea name="" id="" className="filltext" placeholder="Your Message" />
					</div>
					<button type="submit" className="btn btn-danger hug">
						Submit
					</button>
				</form>
			</div>
		</FrontLayout>
	);
};

export default contact;
