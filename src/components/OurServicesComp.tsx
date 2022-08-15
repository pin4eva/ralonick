import React from "react";
import { Link } from "react-router-dom";
import ButtonLight from "../UI/Buttons/ButtonLight";
import classes from "./OurServices.module.scss";
import learnMoreArrow from "../../assets/learnMoreArrow.png";
import servicesImg1 from "../../assets/services1.png";
import servicesImg2 from "../../assets/services2.png";
import servicesImg3 from "../../assets/services3.png";
import leftArrow from "../../assets/keyboardArrowLeft.png";
import rightArrow from "../../assets/keyboardArrowRight.png";

const OurServices = () => {
  return (
    <div className={classes.ourServices}>
      <h2>Our Services</h2>
      <div className={classes.ourServices_text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus,
          velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur
          ornare at nunc facilisis tincidunt nisl. Odio
        </p>
        <ButtonLight>All Services</ButtonLight>
      </div>
      <div className={classes.ourServices_gridbox}>
        <div className={classes.ourServices_gridItem}>
          <img src={servicesImg1} alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link to="/">
                Learn More <img src={learnMoreArrow} alt="" />
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.ourServices_gridItem}>
          <img src={servicesImg2} alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link to="/">
                Learn More <img src={learnMoreArrow} alt="" />
              </Link>
            </p>
          </div>
        </div>
        <div className={classes.ourServices_gridItem}>
          <img src={servicesImg3} alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link to="/">
                Learn More <img src={learnMoreArrow} alt="" />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.services_arrows}>
        <img src={leftArrow} alt="" />
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
};

export default OurServices;
