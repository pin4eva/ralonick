import React from "react";
import  Link from "next/link";

function FirstSection() {
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
        </div>
        
    )
}
export default FirstSection