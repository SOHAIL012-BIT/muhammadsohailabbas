import React from 'react'
import './services.css'
import {MdCheckCircleOutline} from 'react-icons/md'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I can do</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>UI/UX Design</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Authentication</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Back-end programming</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Payment gateway</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Troubleshoot and Maintenance</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Software Engineering</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Object-oriented programming</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data Structure & Algorithms</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Agile and Scrum</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Testing</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Testing & Troubleshoot</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Data Analysis</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Machine Learning</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data Scrapping</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data visualization</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data cleaning</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Advanced Excel</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services