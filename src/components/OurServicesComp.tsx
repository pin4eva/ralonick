import React from "react";
import Link from "next/link";
import ButtonLight from "./ButtonLight";

const OurServicesComp = () => {
  return (
    <div className="ourServices">
      <h2>Our Services</h2>
      <div className="ourServices_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus,
          velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur
          ornare at nunc facilisis tincidunt nisl. Odio
        </p>
        <ButtonLight>All Services</ButtonLight>
      </div>
      <div className="ourServices_gridbox">
        <div className="ourServices_gridItem">
          <img src="/assets/services1.png" alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link href="/a">
                <a>Learn More <img src="/assets/learnMoreArrow.png" alt="" /></a>
              </Link>
            </p>
          </div>
        </div>
        <div className="ourServices_gridItem">
          <img src="/assets/services2.png" alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link href="/b">
                <a>
                Learn More <img src="/assets/learnMoreArrow.png" alt="" />
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="ourServices_gridItem">
          <img src="/assets/services3.png" alt="" />
          <div>
            <p>Chemical Research</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
              sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
              convallis lectus. Proin scelerisque sed massa arcu nunc id
              ridiculus purus cursus. Luctus dolor et consequat nunc at ut.
            </p>
            <p>
              <Link href="/c">
                <a>Learn More <img src="/assets/learnMoreArrow.png" alt="" /></a> 
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="services_arrows">
        <img src="/assets/leftArrow.png" alt="" />
        <img src="/assets/rightArrow.png" alt="" />
      </div>
    </div>
  );
};

export default OurServicesComp;
