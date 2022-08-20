import React from "react";
import Link from "next/link";
function EightSection() {
    return (
        <div>
            <section className="firstSection">
                {/* <img src="Frame 9.png" alt="frame9"/> */}
                <div className="img1">
                <div className="img11">
                <img src={'/images/Frame9.png'} alt=""></img>
                </div>
                
                <div className="scroll">
                    <img src={'/images/Line1.png'} alt=""></img>
                    <img src={'/images/ArrowRight.png'} alt=""></img>
                    <img src={'/images/ArrowLeft.png'} alt=""></img>
                    </div>
                </div>
                
               
                <div className="text">
                    <h1>
                        Diverse & Flexible Structure
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida facilisi mauris morbi.
                    </p>
                   {/* <Link href="/project" className={({ isActive }) => (isActive ? 'link active' : 'link')}> */}
                    <button>See more</button>
                   {/* </Link>  */}
                </div>
            </section>
            <section className="secondSectiion">
                <div className="img2">
                    <img src={'/images/Frame8.png'} alt=""></img>
                </div>
                <div className="playBox">


                    {/* <video  autoPlay className="play">
  <source src="video.mp4" type="video/mp4"/> */}
                    <div className="img3">
                        <img src={'/images/PlayArrow.png'} alt=""></img>
                    </div>
                    <div>
                        <h2>Watch Video Tour</h2>

                        <p>5:15 min</p>
                    </div>
                </div>
            </section>
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
            <section className="fourthSection">
                <div className="text">
                    <span>ROLANIK</span>
                    <p>
                        Who We Are ...
                    </p>
                    <h1>Transforming
                        With Innovations</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est sit vitae urna.</p>
                    <div className="img6">
                        <ul>
                            <li><span>25</span>Years Experience</li>
                            <li><span>25</span>Years Experience</li>
                            <li><span>25</span>Years Experience</li>
                        </ul>
                    </div>
                </div>
                <div className="img5">
                    <img src={('./images/Rectangle1.png')} className="img" alt=""></img>
                    <img src={('./images/Rectangle2.png')} className="img51" alt=""></img>
                    <img src={('./images/Rectangle3.png')} className="img" alt=""></img>
                </div>
            </section>
            <section className="sixthSection">
                <h1>Our Services</h1>
                <div className="buttext">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus, velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur ornare at nunc facilisis tincidunt nisl. Odio</p>
                    <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        <button>All Services</button>
                    </Link>
                </div>
                <div className="Boxes">
                    {Research.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>{item.img}</div>
                                <div className="text">
                                    <h1>{item.header}</h1>
                                    <p>{item.text}</p>
                                    <div className="button">

                                        <Link href="/">Learn More</Link>

                                        <Link href="/">
                                            <img src={'/images/Vector2.png'}>
                                        </img>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
                </div>
                <div className="scroll1">
                        <img src={'/images/Line1.png'} alt=""></img>
                        
                        <img src={'/images/ArrowLeft.png'} alt=""></img>
                        <img src={'/images/ArrowRight.png'} alt=""></img>
                    </div>
            </section >
            <section className="seventhSection">
                <h1>Clients Reviews</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros vitae vitae dictum mattis risus, ut nec. Rhoncus egestas quis pellentesque risus posuere.facilisis. Enim quisque id sit molestie tincidunt faucibus. Amet, dictum eget egestas dictum non leo cras faucibus egestas. Mattis imperdiet elit nullam adipiscing lobortis fames. Et egestas vitae feugiat nisi, sed sit in pulvinar at. Ultrices tincidunt vel in sit ullamcorper. Sollicitud</p>
                <img src={("./images/Image.png")} alt=""></img>
                <h2>Cindy Clifford</h2>
                <p className="p2">Rumuodara Interior Designer</p>
                <div className="indicator">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
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