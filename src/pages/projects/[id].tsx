import React from "react";
import { Project1 } from "../../components/Data";
import FrontLayout from "../../layouts/front.layout";

function SingleProjects() {
    return (

        <FrontLayout>
            <div className="single-project container">
                <section className="first-section">
                    
                </section>
                {
                    Project1.map((item) => {
                        return (
                            <div className="first-section_inner" key={item.id}>
                                <div className="first-section_inner-inner">
                                    <div className="inner-inner-img">
                                        {item.img}
                                     
                                    </div>
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
                <div className="second-section">

                </div>
            </div>
        </FrontLayout>
    )
}
export default SingleProjects