import React from "react";
import classes from "./Projects.module.scss";
import projects1 from "../../assets/projects1.png";
import projects2 from "../../assets/projects2.png";
import projects3 from "../../assets/projects3.png";
import { Link } from "react-router-dom";
import moreDetailsArrow from "../../assets/moreDetailsArrow.png";
import ButtonDark from "../UI/Buttons/ButtonDark";

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2>Our Projects</h2>
      <div className={classes.projects_sub}>
        <img src={projects1} alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link to="/">
              More Details <img src={moreDetailsArrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
      <div className={classes.projects_sub}>
        <img src={projects2} alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link to="/">
              More Details
              <img src={moreDetailsArrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
      <div className={classes.projects_sub}>
        <img src={projects3} alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link to="/">
              More Details
              <img src={moreDetailsArrow} alt="" />
            </Link>
          </p>
        </div>
      </div>
      <div className={classes.projects_btn}>
        <ButtonDark>All Services</ButtonDark>
      </div>
    </div>
  );
};

export default Projects;
