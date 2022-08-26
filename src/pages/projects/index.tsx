import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Link from "next/link";

import { Projects, Research, Research2, Workers } from "../../components/Data";
function Project() {
    return (
        <FrontLayout>

            <div className="projects container">
                <section className="firstSection">
                    <div className="img">
                        <img src={'/images/Frame99.png'} alt="" className=""></img>
                    </div>
                    <h1 className="h1">Project
                        <br />
                        Ralonik LTD.
                    </h1>
                </section>
                <section className="second-section">
                    <div className="text">
                        <div className="inner-first">
                            <h1>
                                Transforming
                                With Innovations
                            </h1>
                            <div className="inner-second">
                                <p className="p">Ralonick constructions operates within the framework of commercial and industrial activities, developing and carrying basic & and detailed services in engineering.</p>
                            </div>
                        </div>
                    </div>
                    <div className="button-hug">
                        <button className="button-hug">Book Services</button>
                    </div>
                </section>
                <section className="third-section">
                    <div className="inner">
                        {Projects.map((item) => {
                            return (
                                <div className="inner-inner" key={item.id}>
                                    <div className="inner_text">
                                        <div className="inner-inner_text">
                                            <h6>{item.header}</h6>
                                            <p>{item.text}</p>
                                            <Link as={"/projects/{$[id]}"} href="/projects/{$[id]}" className="p">{item.link}</Link>
                                            <Link as={"/projects/{$[id]}"} href="/projects/{$[id]}">{item.arrow}</Link>
                                        </div>
                                    </div>

                                    <div className="inner_img">
                                        {item.img}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className="fourth-section">
                    <div className="box">
                        <div className="box-inner">
                            {Research2.map((item) => {
                                return (
                                    <div key={item.id} className="box-inner-in">
                                        <h1 className="h1">{item.number}</h1>
                                        <h1><p>{item.text}</p></h1>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
                <section className="home-section-6">
                    <div className="section6-inner">
                        <h2>Clients Reviews</h2>
                        <p className="section6-inner-txt1">
                            {`I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!`}
                        </p>
                        <div className="section6-inner-profile">
                            <img src="/assets/clientPic.png" alt="" />
                            <h3>Cindy Clifford</h3>
                            <p className="section6-inner-profile_caption">Creative Director Sobaz Oil and gas</p>
                        </div>
                        <div className="slider">
                            <div className="slider1"></div>
                            <div className="slider2"></div>
                            <div className="slider3"></div>
                        </div>
                    </div>
                </section>
                <section className="firth-section">
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
            </div >
        </FrontLayout >
    )
}
export default Project
