import React from "react";
import { Options } from "./Data";
function FirthSection() {
    return (
        <div>
            <section className="firthSection">
                <div className="img7">
                    <img src={'/images/Rectangle4.png'} alt="" className=""></img>
                </div>
                <div className="text">
                    <div>
                        <p>Why Choose Us</p>
                    </div>
                    <div className="textBox">

                        {
                            Options.map((item) => {
                                return (
                                    <div className="txt">
                                        <div className="box"></div>
                                        <div key={item.id}>
                                            <h1>{item.name}</h1>
                                            <p>{item.text}</p>
                                        </div>

                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default FirthSection