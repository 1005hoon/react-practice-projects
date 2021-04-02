import React from "react";
import {} from "./styles";
const FaqSection = (): JSX.Element => {
  return (
    <div className="faq">
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payment Methods.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className="question">
        <h4>What products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
