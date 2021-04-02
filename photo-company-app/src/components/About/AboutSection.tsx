import React from "react";
import home1 from "../../img/home1.png";

import { About, Description, Hide, ImageContainer } from "./styles";

const AboutSection = (): JSX.Element => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography ideas that you have. We have
          professionals with amzing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <ImageContainer>
        <img src={home1} alt="guy with a camera" />
      </ImageContainer>
    </About>
  );
};

export default AboutSection;
