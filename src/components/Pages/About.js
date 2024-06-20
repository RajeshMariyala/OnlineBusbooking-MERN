import React from "react";
import Footer from "../Footer";
import "./About.css"; 
import NavBar from "../NavBar";

export const About = () => {
  return (<div><NavBar/>
   
    <div className="about-container">
        
    <img src="https://www.abhibus.com/img/abhibus-about-banner.png" alt="About Us" className="aboutimage"/>
      <h1 className="about-title">About Us</h1>
      <h2 className="about-subtitle">Book Bus India's Top Rated Bus Booking Platform</h2>
      <p className="about-description">Bus Booking over the years, has strived to deliver easy booking solutions to its customers.Our continued efforts have resulted in AbhiBus becoming one of the leading and top-rated bus booking platforms in India for various Bus services. We have a strong presence with a ticket inventory from over 3500 bus partners and 100000 route options on our app and website.</p>
      <p className="about-description"> Bus BOOKing is a pioneer in providing end-to-end software and other value-added solutions such as e-ticketing systems, fleet management solutions, vehicle tracking systems, passenger information systems, and logistics management backed by a 24x7 customer support center. The company also provides technology solutions to more than 300 large private bus partners in India, 5 state transport corporations, </p>
      <p className="about-description">we proudly serves as the preferred Information Technology Partner for State Transport Corporations and Private Bus Fleet Bus Partners. reflecting our commitment to maintaining exceptional quality standards.</p>
      <p className="about-description2">Feel free to explore more about our project.</p>
    <Footer/>
    </div></div>
  );
};
