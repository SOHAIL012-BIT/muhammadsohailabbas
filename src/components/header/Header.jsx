import React from "react";
import "./header.css";
import ResumeView from "./ResumeView";
import ProfileImage from "../../assets/profile_image.png";
import { FaAward, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Headersocials from "./Headersocials";
import { MdWavingHand } from "react-icons/md";

import Typewriter from "./Typewriter";

const Header = () => {
  const titles = ["DebuggingMyWaySince2022","turning_caffeine_into_code_since_2022", ];

  return (
    <header>
      <div className="container header__container">
        <h2 className="homeText greetings">
          Hello{" "}
          <span>
            <MdWavingHand style={{ color: "yellow" }} />
          </span>{" "}
          I'm
        </h2>
        <h1 className="homeText name">MUHAMMAD SOHAIL ABBAS</h1>
        <h5 className="myTitle">
          Junior Software Engineer<span style={{fontWeight:"bold" ,fontSize:"32pt"}}>;</span>
         
        </h5>

        {/* <p className="titleLine" >turning_caffeine_into_code_since_<span style={{fontWeight:"bold"}}>2022</span></p> */}
        <Typewriter titles={titles} />

        
        <p className="quotes">
          {" "}
          {/* <span class="quote-marks">“</span> */}
          <FaQuoteLeft style={{margin:"0 0.5rem 1rem 0"}}/>
          Every line of code is an opportunity
          to create, innovate, and make a difference.
          {/* <span class="quote-marks">”</span> */}
        <FaQuoteRight style={{margin:"0rem 0rem -1.5rem 0.5rem"}}/>
        </p>



        <ResumeView />
        <Headersocials />

        {/* <div className='profileImage'>
          <img src={ProfileImage} alt=''/>
        </div>  */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
