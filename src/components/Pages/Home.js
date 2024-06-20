import React from "react";
import "./Home.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

export const Home = () => {
   // Dummy data for dropdown options
   const stations = ["Hyderabad", "Banglore", "Chennai", "Mumbai","Pune"];
 const navigate = useNavigate();
   
  return (
    <div><NavBar/>
    <div className="banner-container">
      <img
        src="https://ridegobus.com/wp-content/themes/gobus/img/go-bus-banner_final2400.jpg"
        alt="Banner"
        className="banner-image"
      />
      <div className="search-card">
        <h2>Book Bus Tickets</h2>
        <form className="search-form">
           {/* Dropdown for "From" station */}
           <select name="from" className="search-input">
            <option value="From">From</option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
          {/* Dropdown for "To" station */}
          <select name="to" className="search-input">
            <option value="To">To</option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
          <input type="date" className="search-input" />
          <button type="submit" className="search-button0" onClick={ ()=> navigate("/booking")}>Search Buses</button>
        </form>
      </div>
      
      <div>
        <h2 style={{ marginBottom:'20px',}}>Bus Booking Discount Offers</h2>
        
        <img
        src="https://offercdn.paytm.com/blog/2021/04/busfest-ms-app.png"
        alt=""
        className="animated-image"
      />
      <img
        src="https://offercdn.paytm.com/blog/2021/06/HAPPYBUS_750x500.png"
        alt=""
        className="animated-image"
      />
      <img
        src="https://shorturl.at/jPZ58"
        alt=""
        className="animated-image"
      />
      <img
        src="https://offercdn.paytm.com/blog/2023/06/firstbus-app.jpg"
        alt=""
        className="animated-image"
      />
      <img
        src="https://shorturl.at/ahAGV"
        alt=""
        className="animated-image"
      />
      <img
        src="https://shorturl.at/xDIR3"
        alt=""
        className="animated-image"
      />
      <img
        src="https://shorturl.at/djDJ6"
        alt=""
        className="animated-image"
      />
      <img
        src="https://shorturl.at/akKU6"
        alt=""
        className="animated-image"
      />
<div>
  
  <h2>Why Choose Us for Bus Ticket Booking ?</h2>
  <div className="small-card">
      <img src="https://cdn-icons-png.flaticon.com/512/608/608769.png" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">1,00,000+ Bus Routes</h2>
        <p className="small-card-description">offering unparalleled choices for your travel needs</p>
      </div>
    </div>
    <div className="small-card">
      <img src="https://rb.gy/mnmzt7" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">3500+ Bus Partners</h2>
        <p className="small-card-description">ranging from State RTCs to private partners</p>
      </div>
      
    </div>
    <div className="small-card">
      <img src="https://rb.gy/hrahyi" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">Fastest Bus Booking</h2>
        <p className="small-card-description">swift and seamless bus ticket booking experience</p>
      </div>
      
    </div>
    <div className="small-card">
      <img src="https://i.pinimg.com/564x/2d/36/e2/2d36e265cc99388b64e46161fe1a69e0.jpg" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">24/7 Customer Support</h2>
        <p className="small-card-description">available for all your bus booking needs</p>
      </div>
      
    </div>

    <div className="small-card">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/transfer-6469599-5331483.png" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">Instant Refunds</h2>
        <p className="small-card-description">with free cancellation when changing or cancelling your booking</p>
      </div>  
    </div>
    <div className="small-card">
      <img src="https://rb.gy/pgh92y" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">Best Deals & Discounts</h2>
        <p className="small-card-description">Unlock best value with premium deals & exclusive discounts</p>
      </div>
      
    </div>

    <div className="small-card">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-607c19fcc82451c4c0cb6c8b1fea556d-lq" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">Cashback on every Trip</h2>
        <p className="small-card-description">available for all your bus booking needs</p>
      </div>
      
    </div>
    <div className="small-card">
      <img src="https://www.shoppre.com/img/refer-and-earn/refer-and-earn-shoppre-shipping.png" alt="Icon" className="small-card-image" />
      <div className="small-card-content">
        <h2 className="small-card-heading">Refer and Earn </h2>
        <p className="small-card-description">available for all your bus booking needs</p>
      </div>
      
    </div>
</div>

<div>
  <h2>Book Bus Tickets </h2>
  <p style={{fontSize:'15px'}}>From SRTC (State Road Transport Corporation)</p>
  <div className="small-card2">
      <img src="https://shorturl.at/fowW4" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">APSRTC </h2>
        <p className="small-card2-description">Andhra Pradesh State Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://shorturl.at/alnvZ" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">KSRTC </h2>
        <p className="small-card2-description"> Karnataka STate Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://shorturl.at/dwzSU" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">TSRTC </h2>
        <p className="small-card2-description">Telangana State Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://shorturl.at/EGMS3" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">MSRTC </h2>
        <p className="small-card2-description">Maharastra State Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://shorturl.at/lOTV5" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">GSRTC </h2>
        <p className="small-card2-description">Gujarath State Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://rb.gy/0nloag" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">Kerala RTC </h2>
        <p className="small-card2-description">Kerala State Road Transport Corporation</p>
      </div>
      </div>
      <div className="small-card2">
      <img src="https://rb.gy/fw0awg" alt="Icon" className="small-card2-image" />
      <div className="small-card2-content">
        <h2 className="small-card2-heading">OSRTC </h2>
        <p className="small-card2-description">Odisha State Road Transport Corporation</p>
      </div>
      </div>
      
</div>

<div>

</div>


<div className="textcard"> 
<h6>Online Bus Booking Services</h6>
<p>AbhiBus is India`s leading online bus ticket booking service provider. Check out budget friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.</p>
  <p>AbhiBus has simplified the online bus booking process for your travel planning. In case you need to cancel the ticket or change the dates, You can save both time and money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!</p>
<p>Browse through all your bus route options, and use our advanced smart filters to ensure a reliable and comfortable journey, tailored to your scheduled travel plans.

</p>
</div>
<div className="textcard"> 
  <h6>Online Bus Ticket Booking at Lowest Price</h6>
  <p>With AbhiBus, travellers can book bus tickets online at the lowest ticket fares. Travellers can choose their favorite bus for online bus booking. AbhiBus is the right place for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses are available for bus booking online on AbhiBus.</p>
  <p>Below, you will find various types of buses available to book bus tickets on AbhiBus at the lowest fare for bus ticket booking:</p>
  <ul>
    <li>AC Buses</li>
    <li>Non AC Buses</li>
    <li>Ordinary Buses</li>
    <li>Mini Buses</li>
    <li>Super Luxury (Non-AC Seater)</li>
    <li>Volvo AC Buses</li>
    <li>Sleeper AC Buses</li>
    <li>Sleeper Buses</li>
    <li>Deluxe Buses</li>
    <li>Sleeper Cum Seater AC</li>
    <li>Double Decker Buses</li>
    <li>Mercedes buses</li>
    <li>Non-Mercedes buses</li>
    <li>Electric Buses</li>
    <li>Express Buses</li>
  </ul>
  <p>The bus ticket fare depends on the factors such as type of bus, bus operator, bus routes distance between origin and destination cities, amenities offered by the bus operator, and bus operators may change ticket prices during festive seasons. Travelling by bus journey is the best option, cost effective and the most convenient travel option compared to other modes of transport.</p>
  <p>AbhiBus is India's leading online bus ticket booking service provider. Check out budget friendly offers and save big with discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.</p>
  <p>AbhiBus has simplified the online bus booking process for your travel planning. In case you need to cancel the ticket or change the dates, You can save both time and money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!</p>
</div>


<div className="textcard"> 
<h6>Benefits of Booking Bus Tickets Online</h6>
<p>In this day and age of technology, offline modes of bus ticket booking are no longer preferred. Online ticket booking is easy, fast, and hassle-free. AbhiBus ticks off all the three with user-friendly app and website navigation.</p>
  <p>Booking bus tickets online with AbhiBus has resolved many issues that people encounter while booking tickets at offline counters or through travel agents. Download the AbhiBus App to experience the benefits of bus ticket booking online.</p>
  <p>Here is a list of all the benefits of booking bus tickets online on AbhiBus:</p>
  <ul>
      <li>Avoid standing in long queues at offline bus ticket counters.</li>
      <li>No more hassle of approaching travel agents.</li>
      <li>Choose from multiple bus services.</li>
      <li>Book both Private and SRTC bus tickets online.</li>
      <li>Check bus ticket availability online.</li>
      <li>Book both Private and SRTC bus tickets online.</li>
      <li>Check bus ticket availability online.</li>
    </ul>
</div>
  
<div className="textcard"> 
<h6>Track Your Bus Live Location</h6>
<p>AbhiBus is solving the biggest concern while boarding a bus by providing a tracking option that provides the live location of the bus. This option keeps passengers informed about the bus live location so that passengers can plan their boarding accordingly. AbhiBus live bus tracking system allows you to track your bus status by entering your AbhiBus Booking ID and either Email ID or Mobile Number details in the input field box. It's a simple, fast, and secure way to manage, track your bus live location on Google Maps with AbhiBus live bus tracking technology. Find scheduled bus departure and arrival times of your bus route, the distance between cities and more information.</p>
  <p>Booking Bus tickets online in advance and reserving your seats also gives you benefits on early bird discount offers and help you to plan a hassle-free bus journey. Book bus tickets now and enjoy the live bus tracking status online with us. </p>
</div>  



</div>
<Footer/>
</div>
    </div>
    
  );
};
