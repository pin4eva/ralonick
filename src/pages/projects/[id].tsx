import React from "react";
import { Project1 } from "../../components/Data";
import FrontLayout from "../../layouts/front.layout";

function SingleProjects() {
    return (

        <FrontLayout>
            <div className="single-project container">
                <section className="single-project-first-section">
                    
               
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
                <div className="first-section_grid">
                    <div className="first-section_grid-item">
                        <img src={"/images/GridFrame1.png"} className="a" alt="" />
                        <img src={"/images/GridFrame2.png"} className="b" alt="" />
                        <img src={"/images/GridFrame3.png"} className="c" alt="" />
                        <img src={"/images/GridFrame4.png"} className="d" alt="" />

                    </div>
                </div>
 </section>
                <div className="single-project-second-section">

                </div>
            </div>
        </FrontLayout>
    )
}
export default SingleProjects