import React from "react";
import ButtonDark from "./ButtonDark";

const HeroComp = () => {
  return (
    <section className="hero_section">
      <div className="hero">
        <div className="hero_img1">
          <img src="/assets/hero_img1.png" alt="hero" />
          <div className="hero_arrows">
            <img src="/assets/keyboardArrowLeft.png" alt="" />
            <img src="/assets/keyboardArrowRight.png" alt="" />
          </div>
        </div>
        <div className="hero_text">
          <h1>{`Diverse & Flexible Structure `}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            facilisi mauris morbi.
          </p>
          <ButtonDark className="heroBtn">See Projects</ButtonDark>
        </div>
      </div>

      <div className="hero_img2">
        <div className="hero_playBtn">
          <img src="/assets/PlayArrow.png" alt="" />
          <div>
            <p>Watch Video Tour</p>
            <p>5:15 min</p>
          </div>
        </div>
        <img src="/assets/hero_img2.png" alt="" />
      </div>
    </section>
  );
};

export default HeroComp;
