import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout layout>
        <Toggle title="Can I learn programming from 0 on your platform?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quidem.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="How much do I have to pay per month?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quidem.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Is it possible to pay in full in one go?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quidem.
              </p>
            </div>
          </div>
        </Toggle>
        <Toggle title="If I buy the course, can my brother and I also study?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                quidem.
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  margin: 2rem;

  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answear {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  .faq-line {
    background-color: #ccc;
    height: 0.1rem;
    width: 100%;
    margin: 1rem auto;
  }
`;

export default FaqSection;
