import React from "react";
import Link from "next/link";
function EightSection() {
    return (
        <div>
            <section className="eightSection">
                <h1>Our Projects</h1>
                <div className="imgProj">
                    <div className="imgProj1">
                        <div className="text">
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
                            <div className="button">
                                <Link href="/">More Details</Link>

                                <Link href="/"><img src={("./images/Vector2.png")} alt=""></img></Link>
                            </div>

                        </div>
                        <img src={("./images/Project1.png")} alt="" className="img1"></img>


                    </div>
                    <div className="imgProj2">
                        <div className="text">
                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
                            <div className="button">
                                <Link href="/">More Details</Link>
                                <Link href="/"><img src={("./images/Vector2.png")} alt=""></img></Link>
                            </div>

                        </div>
                        <img src={("./images/Project2.png")} alt="" className="img2"></img>
                    </div>
                    <div className="imgProj3">
                        <div className="text">

                            <h1>Project Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo, convallis lectus.</p>
                            <div className="button">
                                <Link href="/">More Details</Link>
                                <Link href="/"><img src={("./images/Vector2.png")} alt=""></img></Link>
                            </div>
                        </div>
                        <img src={("./images/Project3.png")} alt="" className="img3"></img>
                    </div>
                </div>
                <Link href="/"><button>All Services</button></Link>
            </section >
        </div >
    )
}
export default EightSection