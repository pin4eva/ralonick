import React from "react";
import Link from "next/link";
function ThirdSection() {
    return (
        <div >
            <section className="thirdSection">
                <div className="text">
                    <div className="txt">
                        <span>ROLANIK</span>
                        <h1>About Us</h1>
                        <p>Our operation is based on a diverse and flexible structure. We
                            adopt a system of Total quality Management (TQM) at a
                            reasonable cost and within the shortest possible time, in
                            conjunction with our technical partners. We provide end to end
                            service in the design, engineering, procurement, fabrication, installation, repair and support of Glass fiber Reinforced Epoxy
                            (GRE) Polyester (GRP) and Vinylester Pipe system and products.
                        </p>
                        <p>Odio quisque potenti feugiat commodo sit hendrerit cum platea. Turpis neque in turpis commodo egestas turpis auctor ut pharetra. Arcu quam morbi viverra lectus facilisi.</p>
                    </div>
                    <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        <button>
                            Learn More
                            </button>
                        </Link>
                </div>
                <div className="img4">
                    <img src={'/images/TwoHelmet.png'} alt=""></img>
                </div>
            </section>
        </div>
    )
}
export default ThirdSection