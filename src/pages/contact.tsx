import React from "react";
import FrontLayout from "../layouts/front.layout";
import { useRef } from "react";
import emailjs from "emailjs-com";

const contact = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		emailjs.sendForm("service_3v9dlod", "template_n56wgqw", `${form.current}`, "nwqUtlSWhBh4vaEL4");
	};
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
				<form ref={form} onSubmit={sendEmail}>
					<div className="form-group input-box">
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							name="name"
							placeholder="Your Name"
							required
						/>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							name="email"
							placeholder="your Email"
							required
						/>
						<input
							type="number"
							className="form-control"
							id="exampleInputEmail1"
							name="number"
							placeholder="Your Phone"
							required
						/>
					</div>
					<div className="form-group textarea">
						<textarea name="message" id="" className="filltext" placeholder="Your Message" />
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
