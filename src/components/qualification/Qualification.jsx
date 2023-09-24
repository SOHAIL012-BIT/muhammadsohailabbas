import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import "./qualification.css";

const Qualification = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className="qualification section" id="qualification">
      <h5>My personal journey</h5>
      <h2 className="section__title">Qualification and Work Experience</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${isActive ? "qualification__active" : " "
              }`}
            onClick={handleToggle}
          >
            <FaGraduationCap className="qualification__icon" />
            <span className="tab__font"> Education</span>
          </div>

          <div
            className={`qualification__button button--flex ${isActive ? " " : "qualification__active"
              }`}
            onClick={handleToggle}
          >
            <FiBriefcase className="qualification__icon" />
            <span className="tab__font"> Work Experience</span>
          </div>
        </div>

        <div className="qualification__sections">
          {/* educational background */}
          <div
            className={`qualification__content ${isActive ? " qualification__active" : " qualification__inactive"
              }`}
            id="education"
          >
            {/* first education experience */}
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">
                  Bachelor's of Software Engineering
                </h3>
                <span className="qualification__subtitle">
                  Bahria University Karachi Campus.
                </span>

                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  2019-2023
                </div>
                <br />
                <p>
                 <span className="bullet_Point"> &#10022; </span> 3.51 CGPA
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Member of Bahria University Developer's Society<br />
                 <span className="bullet_Point"> &#10022; </span> Completed 40+ Community Service Hours<br />
                </p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* second education experience */}
            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div className="qualification__card">
                <h3 className="qualification__title">
                  Instrumentation & Control engineering
                </h3>
                <span className="qualification__subtitle">
                  Gujarat Tech. University
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  2016-2020
                </div>
                <br />
                <p>
                 <span className="bullet_Point"> &#10022; </span> 9.03/10 GPA
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Top 1% of Students based on overall Rank
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Member of Youth On the Move
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Merit Based Scholarship
                  <br />
                </p>
              </div>
            </div> */}
          </div>

          <div
            className={`qualification__content ${isActive ? " qualification__inactive" : " qualification__active"
              }`}
            id="work"
          >
            {/* first work experience */}
            <div className="qualification__data">
              <div className="qualification__card">
                <h3 className="qualification__title">Python Developer</h3>
                <span className="qualification__subtitle">
                  Toko Lab (Pvt) Ltd.
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" />
                  &nbsp; Aug 2023 - Present
                </div>
                <br />
                <p className="work_Acheivement">
                 <span className="bullet_Point"> &#10022; </span> Joined as a Python Developer Trainee with a primary focus on Django-based backend development. Actively participated in company's Product, collaborating with teams to contribute to application development, maintain codebase, and gain practical experience in Python programming. Worked under guidance to enhance proficiency in Python and Django, while steadily growing as a developer.
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Collaborated closely with the Data team to develop Python scripts that facilitated efficient data extraction from databases and automated report generation processes. This collaborative effort significantly reduced manual workload and enhanced report accuracy, resulting in improved data management and reporting within the team.
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Utilizing Python for feature development, with a focus on AI and ML integration. Actively participating in NLP, AI, and CV tasks, researching and implementing practical solutions to enhance the application's functionality, and contributing to an improved user experience. Your contributions are helping the project evolve effectively.
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Effectively utilized AWS services like Amazon Textract and S3 buckets to simplify data extraction from PDFs and streamline file uploads. This contributed to reducing data-related challenges and improving data accessibility within the team's workflow.

                  <br />
                </p>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* second work experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__card">
                <h3 className="qualification__title">Junior Software Engineer</h3>
                <span className="qualification__subtitle">
                  Digital Landscape (Pvt) Ltd.
                </span>
                <div className="qualification__calendar">
                  <BsCalendar2Check className="calendar__icon" /> &nbsp;
                  Jun 2022 - July 2023
                </div> 
                <br />
                <p className="work_Acheivement">
                 <span className="bullet_Point"> &#10022; </span>Started working under the guidance of senior developers, collaborating to enhance projects, fix bugs, and implement changes. Progressed to independently handling projects, demonstrating the ability to work autonomously and continuously improving skills to deliver successful outcomes.
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Proficient in utilizing CSS frameworks like React Bootstrap and Material-UI (MUI) to develop visually appealing and responsive user interfaces, while leveraging various libraries such as Jspreadsheet, React Speech Kit, face-api, and Google Maps to enhance functionality and improve the overall user experience of projects.
                  <br />
                 <span className="bullet_Point"> &#10022; </span> Developed expertise in API integration and user authentication, leveraging this knowledge to seamlessly integrate external services and ensure secure access to the applications.
                  <br />
                 <span className="bullet_Point"> &#10022; </span>Continuously learned from experienced professionals, staying updated on industry trends, and excelling in both independent and collaborative software development to deliver optimal UI/UX experiences for users.
                </p>
              </div>
            </div>

            {/* third qualification */}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
