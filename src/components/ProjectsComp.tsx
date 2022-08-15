import React from "react";
import Link from "next/link";
import ButtonDark from "./ButtonDark";

const ProjectsComp = () => {
  return (
    <div className="projects">
      <h2>Our Projects</h2>
      <div className="projects_sub">
        <img src="/assets/projects1.png" alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link href="/e">
              <a>
              More Details <img src="/assets/moreDetailsArrow.png" alt="" />
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="projects_sub">
        <img src="/assets/projects2.png" alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link href="/f">
             <a>
               More Details
              <img src="/assets/moreDetailsArrow.png" alt="" />
             </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="projects_sub">
        <img src="/assets/projects3.png" alt="" />
        <div>
          <p>Project Name</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi
            sagittis aliquet elementum nunc lectus. Arcu, non ornare commodo,
            convallis lectus.
          </p>
          <p>
            <Link href="/g">
            <a>
                More Details
              <img src="/assets/moreDetailsArrow.png" alt="" />
            </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="projects_btn">
        <ButtonDark>All Services</ButtonDark>
      </div>
    </div>
  );
};

export default ProjectsComp;
