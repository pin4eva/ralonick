import React from "react";
import FrontLayout from "../../layouts/front.layout";
import "animate.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {
    const router = useRouter();

    const [singleServicesDisplay, setSingleServicesDisplay] = useState(false);
    const [singleServicesSecondDisplay, setSingleServicesSecondDisplay] = useState(false);
    const [singleServicesThirdDisplay, setSingleServicesThirdDisplay] = useState(false);
    const [singleServicesFourthDisplay, setSingleServicesFourthDisplay] = useState(false);
    const showSingleServicesHandler = () => {
        setSingleServicesDisplay(true);
     
    };
    const hideSingleServicesHandler = () => {
        setSingleServicesDisplay(false);
        setSingleServicesSecondDisplay(false);   
        setSingleServicesThirdDisplay(false);
        setSingleServicesFourthDisplay(false);
    };
    //second-display
    const revailSingleServicesSecondHandler = () => {
        setSingleServicesSecondDisplay(true);   
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesFourthDisplay(false);

    };
    const returnSingleServicesSecondHandler = () => {
        setSingleServicesSecondDisplay(false);
    };
    //third-display
    const revailSingleServicesThirdHandler = () => {
        setSingleServicesThirdDisplay(true);
        setSingleServicesDisplay(true);
        setSingleServicesSecondDisplay(false);
        setSingleServicesFourthDisplay(false);
    };
    const returnSingleServicesThirdHandler = () => {
        setSingleServicesThirdDisplay(false);
    };
    //fourth-display
    const revailSingleServicesFourthHandler = () => {
        setSingleServicesFourthDisplay(true);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
    };
    const returnSingleServicesFourthHandler = () => {
        setSingleServicesFourthDisplay(false);
    };


    return (
        <div>

            <FrontLayout>
                <div className="services container animate__animated animate__zoomInUp">
                    <section className="services-hero">

                        <div className="services-hero_left">
                            <div className="services-hero_left-image">
                                <img src="./images/about1.png" alt="" />
                            </div>
                        </div>
                        <div className="services-hero_right">
                            <div className="services-hero_right-text">
                                <h1>Service</h1>
                                <h1>Ralonick LTD.</h1>
                            </div>
                        </div>
                    </section>
                    <section className="services-first-section">
                        <div className="services-first-section_inner">
                            <div className="services-first-section_inner-text">
                                <h1>We build Solutions</h1>
                            </div>
                            <div className="services-first-section_inner-inner">
                                <div className="services-first-section_inner-inner-left">
                                    <p>{"At Ralonick, we offer a wide range of services from engineering, procurement, construction, to equipment leasing for land & marine"}.</p>
                                </div>
                                <div className="services-first-section_inner-inner-right">
                                    <button className="btn btn-outline-danger hug">Book Service</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="services-second-section">
                        <div className="services-second-section-inner">

                            <div className="services-second-section-inner_card">
                                <div className="services-second-section-inner_card-inner">
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame44.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Active & Passive Fire Proofing</h3>
                                            <p>Fire Proofing is a vital component for any structure to ensure safety of lives and minimal financial loss of properties. Ralonick offers professional fire proofing services ranging from cemetitious fire proofing, to Automatic fire suppression, etc.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame46.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Field Joint Coating Services</h3>
                                            <p>This involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick offers engineering design & fabrication of customized field joint coating equipment which involves liquid applied materials.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame45.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Procurement & Installation of FRP/GRP</h3>
                                            <p>In conjunction with our foreign partners AOCOMM Composite Limited(major manufacturers of FRP and GRP Products) we secure leadership in the area of technical support, procurement and maintenance for upstream and downstream oil and gas refinery.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame44.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Active & Passive Fire Proofing</h3>
                                            <p>Fire Proofing is a vital component for any structure to ensure safety of lives and minimal financial loss of properties. Ralonick offers professional fire proofing services ranging from cemetitious fire proofing, to Automatic fire suppression, etc.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame46.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Field Joint Coating Services</h3>
                                            <p>This involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick offers engineering design & fabrication of customized field joint coating equipment which involves liquid applied materials.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame45.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Procurement & Installation of FRP/GRP</h3>
                                            <p>In conjunction with our foreign partners AOCOMM Composite Limited(major manufacturers of FRP and GRP Products) we secure leadership in the area of technical support, procurement and maintenance for upstream and downstream oil and gas refinery.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame44.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Active & Passive Fire Proofing</h3>
                                            <p>Fire Proofing is a vital component for any structure to ensure safety of lives and minimal financial loss of properties. Ralonick offers professional fire proofing services ranging from cemetitious fire proofing, to Automatic fire suppression, etc.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame46.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Field Joint Coating Services</h3>
                                            <p>This involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick offers engineering design & fabrication of customized field joint coating equipment which involves liquid applied materials.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-second-section_inner-card-inner one">
                                        <div className="services-second-section-inner_card-inner_image">
                                            <img src="./images/frame45.png" alt="" />
                                        </div>
                                        <div className="services-second-section-inner_card-inner_text">
                                            <h3>Procurement & Installation of FRP/GRP</h3>
                                            <p>In conjunction with our foreign partners AOCOMM Composite Limited(major manufacturers of FRP and GRP Products) we secure leadership in the area of technical support, procurement and maintenance for upstream and downstream oil and gas refinery.</p>
                                            <Link href={'/services/single-service'}>
                                                <a>Learn More <img src="./images/vector2.png" alt="" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-hero_upper-left_scroll">
                                    <div className="home-hero_upper-left_scroll-line"></div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                            </div>
                            <div className="services-second-section-inner-button">
                                <p>Still have a question?</p>
                                <button className="btn btn-outline-danger hug">Contact Us</button>
                            </div>
                        </div>
                    </section> */}
                    <section className="services-second-section">
                        <div className="services-second-section-inner">
                            <div className="services-second-section-inner-header">

                                <div className="services-second-section-inner-header-inner">
                                    {/* First-single-services */}
                                    <div className={"services-second-section-inner-header-inner-top"}>

                                        {singleServicesDisplay ? (
                                            <div className="c-pointer" onClick={hideSingleServicesHandler}> <h1 >{"Active & Passive Fire Proofing"}</h1><i className="fa-solid fa-arrow-right" ></i></div>
                                        ) : (
                                            <div className={`c-pointer ${singleServicesDisplay ? "" : "active"}`} onClick={showSingleServicesHandler}><h1>{"Active & Passive ....."}</h1><i className="fa-solid fa-arrow-up"></i></div>
                                        )}
                                    </div>
                                    {/* Second-single-services */}
                                    <div className={"services-second-section-inner-header-inner-top"}>

                                        {singleServicesSecondDisplay ? (
                                            <div className={`c-pointer ${singleServicesSecondDisplay ? "active" : "div"}`} onClick={returnSingleServicesSecondHandler}> <h1>{"Active & Passive...."}</h1><i className="fa-solid fa-arrow-up"></i></div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesSecondHandler}><h1>{"Active & Passive Fire Proofing"}</h1><i className="fa-solid fa-arrow-right"></i></div>

                                        )}

                                    </div>
                                    {/* Third-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesThirdDisplay ? (
                                            <div className={`c-pointer ${singleServicesThirdDisplay ? "active" : "div"}`} onClick={returnSingleServicesThirdHandler} ><h1>{"Active & Passive........"}</h1><i className="fa-solid fa-arrow-up"></i></div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesThirdHandler}><h1 >{"Active & Passive Fire Proofing"}</h1><i className="fa-solid fa-arrow-right"></i></div>

                                        )}
                                    </div>
                                    {/* Fourth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesFourthDisplay ? (
                                            <div className={`c-pointer ${singleServicesFourthDisplay ? "active" : "div"}`} onClick={returnSingleServicesFourthHandler}><h1>{"Active & Passive........"}</h1><i className="fa-solid fa-arrow-up"></i></div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesFourthHandler}><h1 >{"Active & Passive Fire Proofing"}</h1><i className="fa-solid fa-arrow-right"></i></div>

                                        )}
                                    </div>
                                </div>
                                <div className="services-second-section-inner-single-section">
                                    <div className={`services-second-section_single-section  ${singleServicesDisplay ? "" : "show"}`}>
                                        <div className="services-second-section_single-section-inner container">
                                            <img src="./images/project1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesSecondDisplay ? "show" : "hide"}`}>
                                        <div className="services-second-section_single-section-inner container">
                                            <img src="./images/project2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesThirdDisplay ? "show" : "hide"}`}>
                                        <div className="services-second-section_single-section-inner container">
                                            <img src="./images/project3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesFourthDisplay ? "show" : "hide"}`}>
                                        <div className="services-second-section_single-section-inner container">
                                            <img src="./images/project4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="services-third-section">
                        <div className="services-third-section_inner-left_box">
                            <div className="services-third-section_inner-left_box_inner">
                                <div className="services-third-section_inner-left_box_inner-text first">

                                    <h1>25+</h1>
                                    <p>Trusted Partners</p>

                                </div>
                                <div className="services-third-section_inner-left_box_inner-text second">

                                    <h1>25+</h1>
                                    <p>Completed Projects</p>

                                </div>
                                <div className="services-third-section_inner-left_box_inner-text third">
                                    <h1>50+</h1>
                                    <p>Satisfied Clients</p>

                                </div>
                                <div className="services-third-section_inner-left_box_inner-text last">
                                    <h1>5+</h1>
                                    <p>Years Experience</p>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="services-fourth-section">
                        <div className="services-fourth-section-inner">
                            <div className="services-fourth-section-inner_text">
                                <h1>Clients Reviews</h1>
                            </div>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}>
                                <div className="home-hero_uppeer-left_image">

                                    <SwiperSlide>
                                        <div className="services-fourth-section-inner_profile">
                                            <div className="home-fifth-section-inner_profile-text-testimonial">
                                                <p>{"I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!"}</p>
                                            </div>
                                            <div className="services-fourth-section-inner_profile-img">
                                                <img src="./images/image.png" alt="" />
                                            </div>
                                            <div className="services-fourth-section-inner_profile-text-info">
                                                <h3>Cindy Clifford</h3>
                                                <p>Creative Director Sobaz Oil and gas</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services-fourth-section-inner_profile">
                                            <div className="home-fifth-section-inner_profile-text-testimonial">
                                                <p>{"I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!"}</p>
                                            </div>
                                            <div className="services-fourth-section-inner_profile-img">
                                                <img src="./images/image.png" alt="" />
                                            </div>
                                            <div className="services-fourth-section-inner_profile-text-info">
                                                <h3>Cindy Clifford</h3>
                                                <p>Creative Director Sobaz Oil and gas</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="services-fourth-section-inner_profile">
                                            <div className="home-fifth-section-inner_profile-text-testimonial">
                                                <p>{"I had been looking to get my shipment and maintenance done but couldn't find the right Construction Company to do so. Rolanick Construction has been exceptional at what they do, from pre-planning, procurement, constructing in itself and maintenance it has been worth it. They understood the job and they delivered! Thank you!"}</p>
                                            </div>
                                            <div className="services-fourth-section-inner_profile-img">
                                                <img src="./images/image.png" alt="" />
                                            </div>
                                            <div className="services-fourth-section-inner_profile-text-info">
                                                <h3>Cindy Clifford</h3>
                                                <p>Creative Director Sobaz Oil and gas</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>

                        </div>
                    </section>
                </div>
            </FrontLayout>
        </div>
    )
}
export default Services