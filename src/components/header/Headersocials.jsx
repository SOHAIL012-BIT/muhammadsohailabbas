import React from 'react'
import { BsLinkedin, BsMedium } from 'react-icons/bs' 
import { SiLeetcode } from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Headersocials = () => {
  return (
      <div className='header__socials'>
          <a href='https://www.linkedin.com/in/muhammad-sohail-abbas' target="__blank"><BsLinkedin style={{height:"1.5rem",width:"1.5rem"}}/></a>
          <a href='https://github.com/SOHAIL012-BIT' target="__blank"><BsGithub style={{height:"1.5rem",width:"1.5rem"}}/></a>
          <a href=' https://medium.com/@muhammadsohail.dev' target="__blank"><BsMedium style={{height:"1.5rem",width:"1.5rem"}}/></a>
         
          {/* <a href='https://leetcode.com/NividShah/' target="__blank"><SiLeetcode /></a> */}
    </div>
  )
}

export default Headersocials