import React from "react";
import Footer from "../Footer";
import "./ContactUs.css";
import NavBar from "../NavBar";

export const ContactUS = () => {
  return (
    <div><NavBar />
      <div className="contact-page">
        <div className="contact-form">
          <div className="card-c">
            <h2>Contact Us</h2>
            <form-grouped>
              <div className="form-group2">
                <input type="text" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group2">

                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className="form-group2">

                <input type="tel" id="mobile" name="mobile" placeholder="Enter your Mobile number" />
              </div>
              <div className="form-group2">

                <textarea id="message" name="message" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit">Contact Us</button>
            </form-grouped>
          </div>
        </div>
        <div className="map-container">

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90509537118!2d78.24323113439742!3d17.412608642828793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707450680244!5m2!1sen!2sin"
            width="800"
            height="650"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <br />
      <Footer />
    </div>

  );
};
