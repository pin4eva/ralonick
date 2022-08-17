import React from "react";
import Link from "next/link";
import { Research } from "./Data";
function SixthSection() {
    return (
        <div>
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
                            {/* <Link href="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}> */}
                                <p>Learn More</p> 
                                <img src={'/images/Vector2.png'}>

                                </img>
                                {/* </Link> */}
</div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
export default SixthSection