import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Website",
    github: "https://github.com/NIVIDSHAH208/PortfolioWebsite/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Full Stack web app using Spring Boot",
    github: "https://github.com/NIVIDSHAH208/CSIS4495_BeastshopProject",
  },
  {
    id: 3,
    image: IMG2,
    title: "Minions: E-commerce Android Application",
    github: "https://github.com/NIVIDSHAH208/F21G4_Minions",
  },
  {
    id: 4,
    image: IMG4,
    title: "Nuclei Detection using CNN",
    github: "https://github.com/NIVIDSHAH208/NucleiDetection_Project",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>
                  Github
                </a>
                {/* <a href={github} className="btn btn-primary" target='_blank'>
                  Live demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
