import React from "react";
import FrontLayout from "../layouts/front.layout";
function Project (){
return(
<FrontLayout>
<div>
        <section className="firstSection">
<div className="img">
    <img src={'/images/Frame99.png'} alt="" className=""></img>
</div>
<h1 className="h1">About
    <br />
    Ralonik LTD.
    </h1>
<div className="btn">
    <button className="button-hug">Book Services</button>
</div>
</section>
    </div>
</FrontLayout>
)
}
export default Project
