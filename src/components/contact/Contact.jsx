import React, { useEffect, useRef } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();

  const service_id = process.env.SERVICE_ID;
  const template_key = process.env.TEMPLATE_ID;
  const public_key = process.env.PUBLIC_KEY;

  // let userTimezone, currentTime

  // const getUserTimeLocation = () => {

  //   // Get the user's timezone name
  //   userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //   currentTime = new Date();
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    // getUserTimeLocation()
    // const emailParams = {
    //   useruserTimezone: userTimezone,
    //   currentTime: currentTime,
    //   formValue: form.current,
    // };

    
    emailjs.sendForm('service_nm5orbi', 'template_3ik3tqb', form.current, '3JkVYMeqnopyn3juZ')
      .then((result) => {
        debugger
        console.log(result.text);
      }, (error) => {
        debugger
        console.log("Error is", error.text);
      });

    e.target.reset()
  };

  // useEffect(()=>{
  //   getUserTimeLocation()
  // },[])

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        {/* first column */}
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>muhammadsohail.dev@gmail.com</h5>
            <a href='mailto:muhammadsohail.dev@gmail.com' target={'_blank'}>Send a Message</a>
          </article>

          {/* <article className='contact__option'>
            <BsTelephoneOutbound className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>(778)-245-2008</h5>
            <a href='tel:+17782452008'>Call Me</a>
          </article> */}

          <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Muhammad Sohail Abbas</h5>
            <a href='https://www.linkedin.com/in/muhammad-sohail-abbas' target={'_blank'}>Connect</a>
          </article>
        </div>
        {/* second column */}
        <form ref={form} onSubmit={sendEmail}>
          <input type={'text'} name='name' placeholder='Your Full name' required />
          <input type={'email'} name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact