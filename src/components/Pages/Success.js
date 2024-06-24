import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import "./success.css";
import axios from 'axios';
export function Success() {
  const [showCountdown, setShowCountdown] = useState(false);
  const Name = sessionStorage.getItem("username");
  const Refno = sessionStorage.getItem("busId");
  const Qty = sessionStorage.getItem("numberOfSeats");
  
  const Amount = sessionStorage.getItem("total");
  const presentDate = new Date().toISOString().split('T')[0];
  useEffect(() => {
  
    const countdownTimer = setTimeout(() => {
      setShowCountdown(true);
      axios.post("https://bus-booking-server.vercel.app/api/user", { Name,Refno,Qty,Status:"Pending..",Amount,Date: presentDate})
  .then(response => {
    console.log('Data saved successfully:', response.data);
    
  })
  .catch(error => {
    console.error('Error saving data:', error);
  });
    }, 5000);

    
    const redirectTimer = setTimeout(() => {
      window.location.href = "/Tickets";
     
    }, 10000);

  
    return () => {
      
      clearTimeout(countdownTimer);
      clearTimeout(redirectTimer);
    

    };
  }, []);

  const handleRedirect = () => {
   
    window.location.href = "/Tickets";
  };

  

  
  return (
    <>
      <NavBar />
      <div className="about-container">
        <img
          src="https://www.payment-ebanx.com/images/ebanx-payment.jpg"
          alt="About Us"
          className="about-image"
        />
        <h2 className="about-subtitle">Your Payment is Successful</h2>
        <p className="about-description">
          Thank You for your Payment. You will shortly receive your journey
          details to your Registered Email & Mobile Number
        </p>
        {showCountdown && <p>Redirecting in 5 seconds...</p>}
        <button onClick={handleRedirect}>Go to Desired Page</button>
      </div>
    </>
  );
}

