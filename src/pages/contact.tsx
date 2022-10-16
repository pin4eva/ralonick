import React from "react";
import FrontLayout from "../layouts/front.layout";

const Contact = () => {
return (
    <div>
        <FrontLayout>
            <section className="contact">
                <div className="contact-inner container">
                    <div className="contact-inner-left">
                        <div className="contact-inner-left-inner">
                            <div className="contact-inner-left-inner-form">
                                <div className="contact-inner-left-inner-form-header">
                                    <h1>Contact Us</h1>
                                </div>
                                <form action="" method="get">
                                    <div className="contact-inner-left-inner-form-inner">

                                        <div className="contact-inner-left-inner-form-inner-input-section">
                                            <div className={`contact-inner-left-inner-form-inner-input-section_name `}>
                                                <input type="text" title="Name" placeholder="Your Name?" required className={`input `} />

                                            </div>
                                            <div className="contact-inner-left-inner-form-inner-input-section_email">
                                                <input type="mailto" name="" id="second-input" title="Email" placeholder="Your Email?" required/>
                                            </div>
                                            <div className="contact-inner-left-inner-form-inner-input-section_text-area">
                                                <textarea name="" id="" cols={30} rows={10} title="Message" placeholder="What would you like to tell us?" required></textarea>
                                            </div>
                                        </div>
                                        <input type="submit" value="Submit" className="btn hug btn-outline-danger"/>
                                        {/* <button type="submit" title="Submit" >Thanks</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact-inner-right">
                        <div className="contact-inner-right-inner">
                            <div className="contact-inner-right-inner-image">
                                <img src="./images/komi.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    </div>
)
}
export default Contact