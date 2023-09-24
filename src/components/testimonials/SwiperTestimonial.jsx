import React from "react";
import IMG1 from "../../assets/avatar1.jpg";
import IMG2 from "../../assets/avatar2.jpg";
import IMG3 from "../../assets/avatar3.jpg";
// import Swiper core and required modules
import {  Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const myData = [
  {
    key: 1,
    image: IMG1,
    name: "Akshay Shakhia",
    review:
      "His efficient way of working, finding a quick and robust solution to any problem, approaching a problem in a novelty way and blending different technologies for innovative and affordable ideas, leading and mentoring geographically spread and multicultural teams in a smooth way are few of the qualities that I have seen in him every day.",
  },
  {
    key: 2,
    image: IMG2,
    name: "Rupesh Jogani",
    review:
      "You can rely on Nivid all the time to get things done. He always keeps the zeal to learn the unknowns and dig deeper into incidents. He is hard working, always gives feedback, great listener. One thing that amazes me every time about saumya is his level of patience, attitude and cool he keeps at times under extreme pressure.",
  },
  {
    key: 3,
    image: IMG3,
    name: "Aditya Vasavada",
    review:
      "Nivid was super helpful with everything, and he really guided me towards what's most important to study for the final, so I can focus on some topics and perform better.",
  },
];

const SwiperTestimonial = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="container testimonials__container"
    >
      {myData.map(({ key, image, name, review }) => {
        return (
          <SwiperSlide key={key} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperTestimonial;
