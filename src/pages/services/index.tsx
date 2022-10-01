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
    const [singleServicesFifthDisplay, setSingleServicesFifthDisplay] = useState(false);
    const [singleServicesSixthDisplay, setSingleServicesSixthDisplay] = useState(false);
    const [singleServicesSeventhDisplay, setSingleServicesSeventhDisplay] = useState(false);
    const [singleServicesEigthDisplay, setSingleServicesEigthDisplay] = useState(false);
    const [singleServicesNinthDisplay, setSingleServicesNinthDisplay] = useState(false);
    const [singleServicesTenthDisplay, setSingleServicesTenthDisplay] = useState(false);
    const [singleServicesEleventhDisplay, setSingleServicesEleventhDisplay] = useState(false);
    //FIRST FUNCTION
    const hideSingleServicesHandler = () => {
        setSingleServicesDisplay(true);

    };
    const showSingleServicesHandler = () => {
        setSingleServicesDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesThirdDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesSixthDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    //SECOND FUNCTION
    const revailSingleServicesSecondHandler = () => {
        setSingleServicesSecondDisplay(true);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesSixthDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesSecondHandler = () => {
        setSingleServicesSecondDisplay(false);
    };
    //THIRD FUNCTION
    const revailSingleServicesThirdHandler = () => {
        setSingleServicesThirdDisplay(true);
        setSingleServicesDisplay(true);
        setSingleServicesSecondDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesSixthDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesThirdHandler = () => {
        setSingleServicesThirdDisplay(false);
    };
    //FOURTH FUNCTION
    const revailSingleServicesFourthHandler = () => {
        setSingleServicesFourthDisplay(true);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesSixthDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesFourthHandler = () => {
        setSingleServicesFourthDisplay(false);
    };
    //FIFTH FUNCTION
    const revailSingleServicesFifthHandler = () => {
        setSingleServicesFifthDisplay(true);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSixthDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesFifthHandler = () => {
        setSingleServicesFifthDisplay(false);
    };
    //SIXTH FUNCTION
    const revailSingleServicesSixthHandler = () => {
        setSingleServicesSixthDisplay(true);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesSixthHandler = () => {
        setSingleServicesSixthDisplay(false);
    };
    //SEVENTH FUNCTION
    const revailSingleServicesSeventhHandler = () => {
        setSingleServicesSeventhDisplay(true)
        setSingleServicesSixthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesSeventhHandler = () => {
        setSingleServicesSeventhDisplay(false);
    };
    // EIGHT FUNCTION
    const revailSingleServicesEigthHandler = () => {
        setSingleServicesEigthDisplay(true)
        setSingleServicesSixthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesEigthHandler = () => {
        setSingleServicesEigthDisplay(false);
    };
    //NINTH FUNCTION
    const revailSingleServicesNinthHandler = () => {
        setSingleServicesNinthDisplay(true)
        setSingleServicesSixthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesTenthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesNinthHandler = () => {
        setSingleServicesNinthDisplay(false);
    };
    //TENTH FUNCTION
    const revailSingleServicesTenthHandler = () => {
        setSingleServicesTenthDisplay(true)
        setSingleServicesSixthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesEleventhDisplay(false);
    };
    const returnSingleServicesTenthHandler = () => {
        setSingleServicesTenthDisplay(false);
    };
    //ELEVENTH FUNCTION
    const revailSingleServicesEleventhHandler = () => {
        setSingleServicesEleventhDisplay(true)
        setSingleServicesSixthDisplay(false);
        setSingleServicesFifthDisplay(false);
        setSingleServicesFourthDisplay(false);
        setSingleServicesDisplay(true);
        setSingleServicesThirdDisplay(false);
        setSingleServicesSecondDisplay(false);
        setSingleServicesSeventhDisplay(false);
        setSingleServicesEigthDisplay(false);
        setSingleServicesNinthDisplay(false);
        setSingleServicesTenthDisplay(false);
    };
    const returnSingleServicesEleventhHandler = () => {
        setSingleServicesEleventhDisplay(false);
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
                                            <div className="c-pointer" onClick={showSingleServicesHandler}>
                                                <h1 >{"ACTIVE & PASSIVE FIRE PROOFING"}</h1>
                                                <i className="fa-solid fa-arrow-up" ></i>
                                            </div>
                                        ) : (
                                            <div className={`c-pointer ${singleServicesDisplay ? "" : "active"}`} onClick={hideSingleServicesHandler}>
                                                <h1>{"ACTIVE & PASSIVE ....."}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        )}
                                    </div>
                                    {/* Second-single-services */}
                                    <div className={"services-second-section-inner-header-inner-top"}>

                                        {singleServicesSecondDisplay ? (
                                            <div className={`c-pointer ${singleServicesSecondDisplay ? "active" : "div"}`} onClick={returnSingleServicesSecondHandler}>
                                                <h1>{"FIELD JOINT COATING SERVICES"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesSecondHandler}>
                                                <h1>{"FIELD JOINT COATING SERVICES"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}

                                    </div>
                                    {/* Third-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesThirdDisplay ? (
                                            <div className={`c-pointer ${singleServicesThirdDisplay ? "active" : "div"}`} onClick={returnSingleServicesThirdHandler} >
                                                <h1>{"GLASSFIBER REINFORCED EPOXY & POLYESTER PIPE SYSTEM"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesThirdHandler}>
                                                <h1 >{"GLASSFIBER REINFORCED EPOXY & POLYESTER PIPE SYSTEM"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Fourth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesFourthDisplay ? (
                                            <div className={`c-pointer ${singleServicesFourthDisplay ? "active" : "div"}`} onClick={returnSingleServicesFourthHandler}>
                                                <h1>{"HIGH DENSITY POLYTHENE PIPE"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesFourthHandler}>
                                                <h1 >{"HIGH DENSITY POLYTHENE PIPE"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Fifth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesFifthDisplay ? (
                                            <div className={`c-pointer ${singleServicesFifthDisplay ? "active" : "div"}`} onClick={returnSingleServicesFifthHandler}>
                                                <h1>{"POLYPROPYLENE RANDOM PIPES"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesFifthHandler}>
                                                <h1 >{"POLYPROPYLENE RANDOM PIPES"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Sixth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesSixthDisplay ? (
                                            <div className={`c-pointer ${singleServicesSixthDisplay ? "active" : "div"}`} onClick={returnSingleServicesSixthHandler}>
                                                <h1>{"PROCUREMENT & INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesSixthHandler}>
                                                <h1 >{"PROCUREMENT & INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Seventh-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesSeventhDisplay ? (
                                            <div className={`c-pointer ${singleServicesSeventhDisplay ? "active" : "div"}`} onClick={returnSingleServicesSeventhHandler}>
                                                <h1>{"STEEL STRUCTURES AND PIPES FABRICATION & INSTALLATION"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesSeventhHandler}>
                                                <h1 >{"STEEL STRUCTURES AND PIPES FABRICATION & INSTALLATION"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Eigth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesEigthDisplay ? (
                                            <div className={`c-pointer ${singleServicesEigthDisplay ? "active" : "div"}`} onClick={returnSingleServicesEigthHandler}>
                                                <h1>{"PIPELINE CONSTRUCTION & REPAIR SERVICES"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesEigthHandler}>
                                                <h1 >{"PIPELINE CONSTRUCTION & REPAIR SERVICES"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Ninth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesNinthDisplay ? (
                                            <div className={`c-pointer ${singleServicesNinthDisplay ? "active" : "div"}`} onClick={returnSingleServicesNinthHandler}>
                                                <h1>{"Active "}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesNinthHandler}>
                                                <h1 >{"Active & Passive Fire Proofing"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Tenth-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesTenthDisplay ? (
                                            <div className={`c-pointer ${singleServicesTenthDisplay ? "active" : "div"}`} onClick={returnSingleServicesTenthHandler}>
                                                <h1>{"Active & Passive........"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesTenthHandler}>
                                                <h1 >{"Active & Passive Fire Proofing"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                    {/* Eleventh-single-services */}
                                    <div className="services-second-section-inner-header-inner-top">
                                        {singleServicesEleventhDisplay ? (
                                            <div className={`c-pointer ${singleServicesEleventhDisplay ? "active" : "div"}`} onClick={returnSingleServicesEleventhHandler}>
                                                <h1>{"Active & Passive........"}</h1>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>

                                        ) : (
                                            <div className="c-pointer" onClick={revailSingleServicesEleventhHandler}>
                                                <h1 >{"Active & Passive Fire Proofing"}</h1>
                                                <i className="fa-solid fa-arrow-up"></i>
                                            </div>

                                        )}
                                    </div>
                                </div>
                                <div className="services-second-section-inner-single-section container">
                                    <div className={`services-second-section_single-section  ${singleServicesDisplay ? "" : "show"}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/project1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"Active & Passive Fire Proofing"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Services Limited is a professional fire proofing company, offering customer a one stop shop for all their fire proofing needs be it passive or active fire proofing. Passive fire proofing is a vital component of a strategy into the structure of building to safeguard peoples life and limit financial impact of damage to building and their content."}</p>
                                                    {/* <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>MIRERAL FIBRE FIRE PROOFING:</h6>
                                                        <p>{"Is a fibrous material that is mixed with water and adhesive applied to structural steel,roof decks and often wet joist.The water is mixed with the fibre at the spring gun.The material is blown into surface"}</p>
                                                    </div>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6> CEMENTITIOUS FIRE PROOFING:</h6>
                                                        <p>{"This coating consist of Cement or Gypsum which when wet forms a durable sureface with high fire resistance."}</p>
                                                    </div>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>ITUMESCENT PAINT FIRE PROOFING:</h6>
                                                        <p>{"Is considered the lightest form of passive protection when exposed to heat, it rapidly transformed through sublimation and expanda many times it. Original thickness (up to 100 times) to form stable carbonaceous char."}</p>
                                                    </div> */}
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>{"Application were fire proofing would be necessary are:"}</h6>
                                                        <ul>
                                                            <li>Building</li>
                                                            <li>Steel Decking</li>
                                                            <li>Structural Beams </li>
                                                            <li>Siding System</li>
                                                        </ul>
                                                        <h6>We also provide active fire proofing services:</h6>
                                                        <ul>
                                                            <li>Manual Fire Suppression</li>
                                                            <li>Automatic Fire Suppression</li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/mffp1.png" alt="" />
                                                <img src="./images/mffp1.png" alt="" />
                                                <img src="./images/mffp1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesSecondDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"FIELD JOINT COATING SERVICES"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"We specialised in typical field joint coating that includes liquid applied materials such as exoxies, Urethanes epoxy/urethanes heat shrinkable sleeves or sometimes fusion bonded epoxy among other materials."}</p>
                                                    <p>{"Field joint coating services involves the coating of girth weld produce on board the pipe-laying vessels or at any offshore location. Ralonick Services carries out the engineering design and fabrication of customized field joint coating equipment. "}</p>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesThirdDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"GLASSFIBER REINFORCED EPOXY (GRE) & POLYESTER (GRP) PIPE SYSTEM"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited offer solutions for Glass reinforced Epoxy pipes GRP & FRP) in the upstream, downstream of the Oil and gas, refinery,Petrochemical, power plant and other industries. We procure, fabricate andinstall glass reinforcement epoxy pipes as per below application:"}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Application:</h6>
                                                        <ul>
                                                            <li>Flow and crude oil line</li>
                                                            <li>Scrubber lines </li>
                                                            <li>Drinking water lines</li>
                                                            <li>{"Sanitary & waste lines"}</li>
                                                            <li>Inert gas and condensate lines </li>
                                                            <li>Fire fighting lines </li>
                                                            <li>Chemical and injection line </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesFourthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"HIGH DENSITY POLYTHENE PIPE (HDPE)"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited offer solutions for Glass reinforced Epoxy pipes GRP & FRP) in the upstream, downstream of the Oil and gas, refinery,Petrochemical, power plant and other industries. We procure, fabricate andinstall glass reinforcement epoxy pipes as per below application:"}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Application:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>Underground fire water line</li>
                                                            <li>Drain line</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesFifthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"POLYPROPYLENE RANDOM PIPES (PPR)"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited Polypropylene (PP- R) Pipes for the offshore and onshore of the oil and gas, food and beverage processing, heating & cooling, potable water, compressed air, fire protection, gray water and other industrial applications."}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Our PP-R Pipe Services cover the following Applications:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>HVAC</li>
                                                            <li>Fire Protection</li>
                                                            <li>{"Heating & Cooling"}</li>
                                                            <li>Refrigeration</li>
                                                            <li>Compressed Air</li>
                                                            <li>Chemical Transport</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesSixthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"PROCUREMENT AND INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited provides procurement& installation of FRP/GRP product.We services, supply and installs all kinds of FRP/GRP products for upstream and downstream oil & gas refinery petrochemical and otherindustrial application."}</p>
                                                    <p>{"Our partnership with our foreign partner AOCOMM Composite Limited amajor manufacturers of FRP and GRP products, we secure leadership in thearea of Technical support, Engineering, Procurementand Maintenanceservices"}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Products:</h6>
                                                        <ul>
                                                            <li>FRP Handrails</li>
                                                            <li>FRP Lining tank</li>
                                                            <li>{"FRP MobilToilet & Office Cabins"}</li>
                                                            <li>{"FRP Cable TrayHeating & Cooling"}</li>
                                                            <li>Bio-Digester Tank</li>
                                                            <li> FRP Laddersr</li>
                                                            <li>FRP Hose Box</li>
                                                            <li>FRP Underground tanks</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesSeventhDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"STEEL STRUCTURES AND PIPES FABRICATION & INSTALLATION"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited provides Steel structures and pipes fabrication & installation with expertise in construction capabilities and project management. Ralonick delivers solutions by providing competent personnel that has the knowledge in all kinds of fabrication and installation works."}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>PIPING AND STRUCTURAL FABRICATION SERVICES:</h6>
                                                        <ul>
                                                            <li>Pig Launcher fabrication</li>
                                                            <li>Structural Skid fabrication</li>
                                                            <li>Steel Shelter Platform Fabrication</li>
                                                            <li>{"Fabrication of boat landing & repairs "}</li>
                                                            <li>Structural Pipe Support</li>
                                                            <li>Security cage</li>
                                                            <li>Pipe spool fabrication </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesEigthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"PIPELINE CONSTRUCTION & REPAIR SERVICES"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited provides procurement& installation of FRP/GRP product.We services, supply and installs all kinds of FRP/GRP products for upstream and downstream oil & gas refinery petrochemical and otherindustrial application."}</p>
                                                    <p>{"Our partnership with our foreign partner AOCOMM Composite Limited amajor manufacturers of FRP and GRP products, we secure leadership in thearea of Technical support, Engineering, Procurementand Maintenanceservices"}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Our PP-R PipeServices cover the following Applications:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>HVAC</li>
                                                            <li>Fire Protection</li>
                                                            <li>{"Heating & Cooling"}</li>
                                                            <li>Refrigeration</li>
                                                            <li>Compressed Air</li>
                                                            <li>Chemical Transport</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesNinthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"PROCUREMENT AND INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited Polypropylene (PP- R) Pipes for the offshore and onshore of the oil and gas, food and beverage processing, heating & cooling, potable water, compressed air, fire protection, gray water and other industrial applications."}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Our PP-R PipeServices cover the following Applications:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>HVAC</li>
                                                            <li>Fire Protection</li>
                                                            <li>{"Heating & Cooling"}</li>
                                                            <li>Refrigeration</li>
                                                            <li>Compressed Air</li>
                                                            <li>Chemical Transport</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesTenthDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"PROCUREMENT AND INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited Polypropylene (PP- R) Pipes for the offshore and onshore of the oil and gas, food and beverage processing, heating & cooling, potable water, compressed air, fire protection, gray water and other industrial applications."}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Our PP-R PipeServices cover the following Applications:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>HVAC</li>
                                                            <li>Fire Protection</li>
                                                            <li>{"Heating & Cooling"}</li>
                                                            <li>Refrigeration</li>
                                                            <li>Compressed Air</li>
                                                            <li>Chemical Transport</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`services-second-section_single-section  ${singleServicesEleventhDisplay ? "show" : ""}`}>
                                        <div className="services-second-section_single-section-inner ">
                                            <div className="services-second-section_single-section-inner-image upper">
                                                <img src="./images/field1.png" alt="" />
                                            </div>
                                            <div className="services-second-section_single-section-inner-text">
                                                <div className="services-second-section_single-section-inner-text_header">
                                                    <h1>{"PROCUREMENT AND INSTALLATION OF FRP/GRP PRODUCTS"}</h1>
                                                </div>
                                                <div className="services-second-section_single-section-inner-text-body">
                                                    <p>{"Ralonick Service Limited provides procurement& installation of FRP/GRP product.We services, supply and installs all kinds of FRP/GRP products for upstream and downstream oil & gas refinery petrochemical and otherindustrial application."}</p>
                                                    <p>{"Our partnership with our foreign partner AOCOMM Composite Limited amajor manufacturers of FRP and GRP products, we secure leadership in thearea of Technical support, Engineering, Procurementand Maintenanceservices"}</p>
                                                    <div className="services-second-section_single-section-inner-text-body_subtitle">
                                                        <h6>Our PP-R PipeServices cover the following Applications:</h6>
                                                        <ul>
                                                            <li>Portable water</li>
                                                            <li>HVAC</li>
                                                            <li>Fire Protection</li>
                                                            <li>{"Heating & Cooling"}</li>
                                                            <li>Refrigeration</li>
                                                            <li>Compressed Air</li>
                                                            <li>Chemical Transport</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-second-section_single-section-inner-image lower container">
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                                <img src="./images/field2.jpg" alt="" />
                                            </div>
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