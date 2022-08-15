import React from "react";
import classes from "./Reviews.module.scss";
import reviewslider from "../../assets/reviewslider.png";
import clientPic from "../../assets/clientPic.png";

const Reviews = () => {
  return (
    <div className={classes.reviews}>
      <h2>Clients Reviews</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros vitae
        vitae dictum mattis risus, ut nec. Rhoncus egestas quis pellentesque
        risus posuere.facilisis. Enim quisque id sit molestie tincidunt
        faucibus. Amet, dictum eget egestas dictum non leo cras faucibus
        egestas. Mattis imperdiet elit nullam adipiscing lobortis fames. Et
        egestas vitae feugiat nisi, sed sit in pulvinar at. Ultrices tincidunt
        vel in sit ullamcorper. Sollicitud
      </p>
      <div>
        <img src={clientPic} alt="" />
        <h3>Cindy Clifford</h3>
        <p>Rumuodara Interior Designer</p>
      </div>
      <img src={reviewslider} alt="" />
    </div>
  );
};

export default Reviews;
