import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";

import { BsCalendar2Check } from "react-icons/bs";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Urdu Grammarly",
    timeLine:"Oct 2022 - Present",
    description:'I spearheaded the development of an innovative project called "Urdu Grammarly". google Maps. The key functionalities of the Urdu Grammarly project included accurate prediction of the next word, comprehensive grammar checks, and providing sentence corrections.',
    github: "",
    technology:"React Js, Django and MUI.",
    myRole:"Django and React JS frameworks to build a robust backend and frontend and worked on training of NLP base Models."
  },
  {
    id: 2,
    image: IMG3,
    title: "Full Stack web app using Spring Boot",
    title: "Portfolio Website",
    timeLine:"Oct 2022 - Present",
    description:'I spearheaded the development of an innovative project called "Urdu Grammarly". google Maps. The key functionalities of the Urdu Grammarly project included accurate prediction of the next word, comprehensive grammar checks, and providing sentence corrections.',
    github: "",
    technology:"React Js, Django and MUI.",
    myRole:"Django and React JS frameworks to build a robust backend and frontend and worked on training of NLP base Models."
  },
  {
    id: 3,
    image: IMG2,
    title: "Minions: E-commerce Android Application",
    title: "Portfolio Website",
    timeLine:"Oct 2022 - Present",
    description:'I spearheaded the development of an innovative project called "Urdu Grammarly". google Maps. The key functionalities of the Urdu Grammarly project included accurate prediction of the next word, comprehensive grammar checks, and providing sentence corrections.',
    github: "",
    technology:"React Js, Django and MUI.",
    myRole:"Django and React JS frameworks to build a robust backend and frontend and worked on training of NLP base Models."
  },
  {
    id: 4,
    image: IMG4,
    title: "Nuclei Detection using CNN",
    title: "Portfolio Website",
    timeLine:"Oct 2022 - Present",
    description:'I spearheaded the development of an innovative project called "Urdu Grammarly". google Maps. The key functionalities of the Urdu Grammarly project included accurate prediction of the next word, comprehensive grammar checks, and providing sentence corrections.',
    github: "",
    technology:"React Js, Django and MUI.",
    myRole:"Django and React JS frameworks to build a robust backend and frontend and worked on training of NLP base Models."  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title,timeLine, github,description,myRole,technology }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="qualification__title">{title}</h3>
           
              <div className="__calendar">
                  <BsCalendar2Check className="calendar__icon" />
                  &nbsp; {timeLine}
              </div>
              <div className="detail_project">
              <p> <span className="bullet_Point"> &#10022; </span>{description}</p>
              <p> <span className="bullet_Point"> &#10022; </span> {myRole}</p>
              <p> <span className="bullet_Point"> &#10022; </span> {technology}</p>
              </div>
              {/* <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>
                  Github
                </a>
                
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
