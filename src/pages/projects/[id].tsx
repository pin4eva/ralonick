import React from "react";
import { Project1, Project2, Projects, Research2, Why, Workers } from "../../components/Data";
import FrontLayout from "../../layouts/front.layout";
import Link from "next/link";
function SingleProjects() {
    return (

        <FrontLayout>
            <div className="single-project container animate__animated animate__zoomInup">
                <section className="single-project_hero">
                    {
                        Project1.map((item) => {
                            return (
                                <div className="hero-img" key={item.id}>
                                    {item.img}

                                </div>
                            )
                        })
                    }
                </section>
                <div className="single-project-inner container">
                    <section className="single-project-first-section">
                        {
                            Project1.map((item) => {
                                return (
                                    <div className="first-section_inner" key={item.id}>
                                        <div className="first-section_inner-inner">

                                            <div className="inner-inner-text">
                                                <div className="inner-text-header">
                                                    <h1> {item.header}</h1>
                                                </div>
                                                <div className="inner-text-body">
                                                    <p className="p">{item.paragraph1}</p>
                                                    <p className="p">{item.paragraph2}</p>
                                                    <p className="p">{item.paragraph3}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="first-section_grid">
                            <div className="first-section_grid-item">
                                <div className="a">
                                    <img src={"/images/GridFrame1.png"} alt="" />
                                </div>
                                <div className="b"> <img src={"/images/GridFrame2.png"} alt="b" /></div>
                                <div className="c"> <img src={"/images/GridFrame3.png"} alt="c" /></div>
                                <div className="d"> <img src={"/images/GridFrame4.png"} alt="" /></div>
                            </div>
                        </div>

                    </section>
                    <section className="single-second-section">
                    <div className="box">
                        <div className="box-inner">
                            {Research2.map((item) => {
                                return (
                                    <div key={item.id} className="box-inner-in">
                                        <h1 className="h1">{item.number}</h1>
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
                    <section className="single-third-section">
                        <h1>Why Choose Us</h1>
                        <div className="box">
                            <div className="box-inner">

                                {Why.map((item) => {
                                    return (
                                        <div key={item.id} className="box-inner-in">
                                            {item.img}
                                            <div className="text">
                                                <h2>{item.head}</h2>
                                            </div>

                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                    </section>
                </div>
                <section className="home-section-7">
                    <div className="section7-inner">
                        <div className="section7-inner-sub">
                            <img src="/assets/projects1.png" alt="" className="large-img" />
                            <div className="section7-inner-sub_text">
                                <p className="text-heading">Project Name</p>
                                <p className="inner-text-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
                                    lectus. Arcu, non ornare commodo, convallis lectus.
                                </p>
                                <Link href="/projects/jrj" className="text-link">
                                    <a className="text-link_link">
                                        More Details <img src="/assets/moreDetailsArrow.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="last-part">

                            <div className="section7-inner-btn">
                                <button className="button hug">Contact Us</button>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="single-project-firth-section">

                    <h1>Our Team</h1>
                    <div className="profile">
                        <div className="profile-card">
                            {
                                Workers.map((item) => {
                                    return (
                                        <div className="inner-profile" key={item.id}>
                                            <div className="Portrait">
                                                {item.img}
                                            </div>
                                            <div className="info">
                                                <h2 className="profile-h2">{item.name}</h2>
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
                    </div>

                </section>
            </div>
        </FrontLayout>
    )
}
export default SingleProjects