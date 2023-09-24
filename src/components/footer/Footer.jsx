import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

import { BsLinkedin, BsMedium } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import { FaAward, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import cadev from '../../assets/cadevLogo.png'


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">

        <div className="about_left">
          {/* <div className="about__me"> */}
          <div className="footer-image">
            <img src={cadev} alt="CADEV!" />
            {/* <FaAward/> */}
          </div>
          {/* </div> */}
          <div className="about_line">
            <FaQuoteLeft style={{ margin: "0 0.5rem 1rem 0" }} />
            With the right perspective, we turn challenges into opportunities and code our way to excellence.
            <FaQuoteRight style={{ margin: "0rem -0.5rem -0.5rem 0.5rem" }} />

          </div>
          <FaAward style={{ height: "5rem", width: "5rem", marginTop: "1re" }} />
        </div>
        <div>
          <a href='#' className='footer__logo'>Muhammad Sohail Abbas</a>
          <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>Who am I</a></li>
            <li><a href='#qualification'>Qualification and Work Experience</a></li>
            <li><a href='#services'>Services</a></li>
            {/* <li><a href='#portfolio'>Portfolio</a></li> */}
            {/* <li><a href='#testimonials'>Testimonials</a></li> */}
            <li><a href='#contact'>Contact</a></li>
          </ul>

          <div className='footer__socials'>
            {/* <a href='https://facebook.com/nivid.shah.75'><FaFacebookF /></a>
        <a href='https://instagram.com/nivid_shah'><FiInstagram/></a>
        <a href='https://twitter.com/shah_nivid'><IoLogoTwitter /></a> */}
            <a href='https://www.linkedin.com/in/muhammad-sohail-abbas' target="__blank"><BsLinkedin style={{ height: "1.5rem", width: "1.5rem" }} /></a>
            <a href='https://github.com/SOHAIL012-BIT' target="__blank"><BsGithub style={{ height: "1.5rem", width: "1.5rem" }} /></a>
            <a href=' https://medium.com/@muhammadsohail.dev' target="__blank"><BsMedium style={{ height: "1.5rem", width: "1.5rem" }} /></a>
          </div>


        </div>


      </div>
      <div className='footer__copyright'>
        <small>&copy; Muhammad Sohail Abbas. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer