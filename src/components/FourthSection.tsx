import React from "react";
function FourthSection() {
    return (
        <div>
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
        </div>
    )
}
export default FourthSection