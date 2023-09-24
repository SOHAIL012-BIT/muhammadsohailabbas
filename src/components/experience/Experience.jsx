import React from "react";
import "./experience.css";
import Article from "./Article";

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <Article name="HTML" level="Experienced" />
            <Article name="CSS"  level="Experienced"/>
            <Article name="JavaScript"  level="Experienced"/>
            <Article name="React" level="Experienced" />
            <Article name="jQuery" level="Experienced" />
            <Article name="Thymeleaf"  level="Experienced"/>
          </div>
        </div>
{/* backend stuff */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Article name="Java" level="Experienced" />
            <Article name="C#" level="Experienced" />
            <Article name="Python"  level="Experienced"/>
            <Article name="Node.js"  level="Experienced"/>
            <Article name="Spring" level="Experienced" />
            <Article name="SQL / NoSQL" level="Experienced" />       
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
