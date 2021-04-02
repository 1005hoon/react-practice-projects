import React from "react";
import { FAQ, Question } from "./styles";

const FaqSection = (): JSX.Element => {
  return (
    <FAQ>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <Question>
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <div className="line"></div>
      </Question>
      <Question>
        <h4>Daily Schedule.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <div className="line"></div>
      </Question>
      <Question>
        <h4>Different Payment Methods.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <div className="line"></div>
      </Question>
      <Question>
        <h4>What products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
        <div className="line"></div>
      </Question>
    </FAQ>
  );
};

export default FaqSection;
