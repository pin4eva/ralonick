import React from "react";
function SecondSection() {
    return (
        <div>
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
        </div>
    )
}
export default SecondSection