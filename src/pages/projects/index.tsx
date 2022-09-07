import React from "react";
import FrontLayout from "../../layouts/front.layout";
import Link from "next/link";
import { Research2, Workers } from "../../components/Data";
import ClientComp from "../../components/ClientComp";
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
                          
                        </div>  
                        <div className="inner-second">
                                <p className="p">Ralonick constructions operates within the framework of commercial and industrial activities, developing and carrying basic & and detailed services in engineering.</p>
                        <button className=" btn btn-danger hug">Book Services</button>
                            </div>
                    </div>
                </section>
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
								<Link href="/projects/jrj"className="text-link">
									<a className="text-link_link">
										More Details <img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="section7-inner-sub sub-2">
							<img src="/assets/projects2.png" alt="" className="large-img" />
							<div className="section7-inner-sub_text sub-2_text">
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>

								<Link href="/projects/jff" className="text-link">
									<a className="text-link_link">
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className="section7-inner-sub">
							<img src="/assets/projects3.png" alt="" className="large-img" />
							<div className="section7-inner-sub_text">
								<p className="text-heading">Project Name</p>
								<p className="inner-text-body">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc
									lectus. Arcu, non ornare commodo, convallis lectus.
								</p>

								<Link href="/projects/jjj" className="text-link">
									<a className="text-link_link">
										More Details
										<img src="/assets/moreDetailsArrow.png" alt="" />
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
                <ClientComp/>
                {/* <section className="home-section-6">
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
                </section> */}
                <section className="firth-section">
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
            </div >
        </FrontLayout >
    )
}
export default Project
