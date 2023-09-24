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
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Full Stack Software Development</p>
            </li>
         
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Chatbots Development</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Documentation </p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data Engineering</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Web Scraping</p>
            </li>
            {/* <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Troubleshoot and Maintenance</p>
            </li> */}
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Writing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Data Engineering</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p> Software Re-Engineering</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Language Specific (JavaScript,Python, .Net Core)</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Software Design</p>
            </li>
            <li>
              <MdCheckCircleOutline className="service__list-icon" />
              <p>Natural Language Processing</p>
            </li>
          
          </ul>
        </article>

        {/* <article className='service'>
          <div className='service__head'>
            <h3></h3>
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
        </article> */}
      </div>
    </section>
  )
}

export default Services