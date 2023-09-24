import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <Qualification />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
