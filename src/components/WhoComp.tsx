import React from "react";

const WhoComp = () => {
  return (
    <div className="who">
      <section className="who_text_section">
        <p className="who_ralonick">ROLANICK</p>
        <p>Who We Are...</p>
        <h2>Transforming With Innovations</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus risus,
          velit enim semper vestibulum aliquet. Ultricies tempor ac curabitur
          ornare at nunc facilisis tincidunt nisl. Odio id quis fermentum sapien
          sem iaculis augue erat. Ut dignissim sapien, nibh dolor malesuada. Est
          sit vitae urna.
        </p>
        <div className="who_info">
          <div>
            <p>25</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p>25</p>
            <p>Industries served</p>
          </div>
          <div>
            <p>25</p>
            <p>Factories Built</p>
          </div>
        </div>
      </section>
      <section className="who_img_section">
        <img src="/assets/who_img1.png" alt="" />
      </section>
    </div>
  );
};

export default WhoComp;
