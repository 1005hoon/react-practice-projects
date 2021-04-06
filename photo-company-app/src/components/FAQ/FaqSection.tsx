import React from "react";
import { FAQ, Question } from "./styles";
import Toggle from "../Toggle/Toggle";
import { AnimateSharedLayout } from "framer-motion";

import { useScroll } from "../useScroll";
import { scrollReveal } from "../../animation";

const FaqSection = (): JSX.Element => {
  const [element, controls] = useScroll();
  if (element) {
    console.log("showing");
  }
  return (
    <FAQ
      variants={scrollReveal}
      animate={controls as any}
      ref={element as any}
      initial="hidden"
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Question>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </div>
          </Toggle>
        </Question>
        <Question>
          <Toggle title="Daily Schedule.">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </div>
          </Toggle>
        </Question>
        <Question>
          <Toggle title="Different Payment Methods.">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </div>
          </Toggle>
        </Question>
        <Question>
          <Toggle title="What products do you offer.">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
            </div>
          </Toggle>
        </Question>
      </AnimateSharedLayout>
    </FAQ>
  );
};

export default FaqSection;
