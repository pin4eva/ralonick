import React from "react";
// import Link from "next/link";
import {OurSection1, OurSection2, Project, Research, Why, Workers } from "../components/Data";
import FrontLayout from "../layouts/front.layout";

function About() {

    return (
		<FrontLayout>
        <div className="about container">

            <section className="firstSection">
                <div className="img">
                    <img src={'/images/Frame99.png'} alt="" className=""></img>
                </div>
                <h1 className="h1">About
                    <br />
                    Ralonik LTD.</h1>
            </section>
            <section className="secondSection">
                <div className="text">
                    <h3>Top Quality Construction & Engineering Services</h3>
                    <p className="p">Ralonick is a fast growing construction company rapidly spreading its frontiers across Nigeria, with sole interest in operation and maintenance of production facilities, local and foreign procurement of oil & gas materials and consultation. It is a registered private limited liability company under the Nigeria Law.</p>
                    <p className="p">
                        Our operation is within the framework of commercial and industrial activities, developing and carrying out basic and detailed service in Engineering, Procurement, Construction and Equipment leasing in Land and Marine.</p>
                    <p className="p">We
                        adopt a system of Total quality Management (TQM) at a
                        reasonable cost and within the shortest possible time, in
                        conjunction with our technical partners. We provide end to end
                        service in the design, engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
                        (GRE) Polyester (GRP) and Vinylester Pipe system and products.</p>
                </div>
                <img src={"/images/TwoHelmet.png"} alt="" />
            </section>
            <section className="thirdSection">
                <div className="text">
                    <div className="text-inner">
                        {/* <h2 className="h2">ROLANIK
                        </h2>
                        <h2>Who We Are ...</h2> */}
                        <h1>
                            Transforming
                            With Innovations
                        </h1>
                        <p className="p">Ralonick Constructions operates within the framework of commercial and industrial activities, developing and carrying out basic and detailed services in engineering, procurement, construction, equipment leasing and marine.
                            We exceed our clients' trust through the timely delivery of quality, satisfactory products and services.</p>
                    </div>
                    <div className="box">
                        <div className="box-inner">
                            {Research.map((item) => {
                                return (
                                    <div key={item.id} className="box-inner-in">
                                        <h1 className="h1">{item.number}</h1>
                                        <h1><p>{item.text}</p></h1>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="img">
                    {Project.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.img}
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="fourthSection">
                <div className="our-section-1">
                    {
                        OurSection1.map((item) => {
                            return (
                                <div className="our-section-1-inner-upper" key={item.id}>

                                    <div className="our-section-1-inner-upper-img">
                                        {item.img}
                                    </div>
                                    <div className="our-section-1-inner-upper-text">
                                        <h2>{item.head}</h2>
                                        <ul>
                                            <li><p>We aim to be Nigeria’s leading company in Design,  Engineering, Procurement, Fabrication, Construction, Equipment Leasing  and Installation Services in Land & Marine.</p></li>
                                            <li><p>Continous delivery of excellent innovative values and construction solutions to meeet our clients’  requirements. </p></li>
                                            <li><p>Be the primary preference at all times nationally for excellence and quality in all types of construction.</p></li>
                                            <li><p>Continually improve the competence of our team & employ innovative and result-oriented persons.</p></li>
                                        </ul>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
                <div className="our-section-2">
                    {
                        OurSection2.map((item) => {
                            return (
                                <div className="our-section-2-inner" key={item.id}>

                                    <div className="our-section-2-inner-text">
                                        <h2>{item.head}</h2>
                                        <ul>
                                            <li><p>To provide quality service in the fastest possible manner with minimal impact on the environment.</p></li>
                                            <li><p>To exceed our clients' trust through the delivery of quality and exclusive world class satisfactory products & services.</p></li>
                                            <li><p>To utilize the latest specialized equipment and experience personnel and tackle all land & marine constructions.</p></li>
                                            <li><p>To ensure minimal safety hazards on-site for personnels through the use of suitable equipments, experts and safety equipments & measures.</p></li>
                                        </ul>
                                    </div>    <div className="our-section-2-inner-img">
                                        {item.img}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="firthSection">
                <div className="img">
                    <img src={"/images/Rectangle4.png"} alt="" />
                </div>
                <div className="text ">
                    <h1>Why Choose Us</h1>
                    <div className="text-box">
                        {
                            Why.map((item) => {
                                return (
                                    <div key={item.id} className="inner-text-box">
                                        <div className="inner-inner-inner-text-box">
                                            {item.img}
                                        </div>
                                        <div className="inner-text-text">
                                            <h2 className="h2">{item.head}</h2>
                                            <p>{item.body}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="sixthSection">
                <h1>Our Team</h1>
                <div className="profile">
                    {
                        Workers.map((item) => {
                            return (
                                <div className="inner-profile" key={item.id}>
                                    <div className="Portrait">
                                        {item.img}
                                    </div>
                                    <div className="info">
                                        <h2 className="h2 profile-h2">{item.name}</h2>
                                        <p className="profile-p">{item.ceo}</p>
                                        <div className="icons">
                                            {item.iconinstagram}
                                            {item.icontwitter}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
		
        </div>
		</FrontLayout>
    )
	
}
export default About