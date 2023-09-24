import React from "react";
import "./about.css";
import NivImg from "../../assets/nividabout.png";
import { FaAward, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import avatar_image from "../../assets/avatar profile.png";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Who am I</h2>

      <div className="container about__container">
        <div className="about_left">
          <div className="about__me">
            <div className="about__me-image">
              <img src={avatar_image} alt="About Sohail" />
            </div>
          </div>
          <div className="about_line">
            <FaQuoteLeft style={{ margin: "0 0.5rem 1rem 0" }} />
            Let's build a future where technology is a force for good, and where
            the synergy of innovation and passion leads to groundbreaking
            solutions that benefit society as a whole.
            <FaQuoteRight style={{ margin: "0rem -0.5rem -0.5rem 0.5rem" }} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              {/* <FaAward className="about__icon" /> */}
              <h5>JavaScript</h5>
              {/* <small>1+ Years</small>/ */}
            </article>

            <article className="about__card">
              <h5>Python</h5>
            </article>

            <article className="about__card">
              <h5>ReactJS</h5>
            </article>
            <article className="about__card">
              <h5>Django</h5>
            </article>
            <article className="about__card">
              <h5>NodeJS</h5>
            </article>
            <article className="about__card">
              <h5>.Net Core</h5>
            </article>
            <article className="about__card">
              <h5>SQL</h5>
            </article>
            <article className="about__card">
              <h5>MongoDB</h5>
            </article>
            <article className="about__card">
              <h5>AWS</h5>
            </article>
          </div>

          {/* Bug-free code is a myth, but perfecting it is an art form */}

          <p className="about_text">
            I'm a highly motivated and adaptable software engineer with a strong
            passion for the future of technology. My expertise encompasses
            System Design, Data Engineering, and Web Development, with
            proficiency in JavaScript,Python, and .NET . However, what truly
            excites me is the rapidly evolving landscape of Artificial
            Intelligence (AI) and the enchanting possibilities of Natural
            Language Processing (NLP). With a relentless commitment to growth
            and a vision for shaping the future, I am dedicated to honing my
            skills in AI and NLP to contribute to groundbreaking advancements in
            these fields. I thrive on embracing new challenges and look forward
            to harnessing the transformative power of AI and NLP to drive
            innovation and create a brighter tomorrow.
          </p>
          {/* <a href="#contact" className="btn btn-primary">
            Contact Me
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default about;
