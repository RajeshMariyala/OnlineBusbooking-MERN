import React, { useState, useEffect } from 'react';
import './Tickets.css'
import Footer from "../Footer";
import NavBar from "../NavBar";
import axios from 'axios';

const HistoryOfTickets = () => {

  const [HistoryArray, sethistoryArray] = useState([]);
  const fetchData = async () => {
    try {
        const response = await axios.get('https://bus-booking-server.vercel.app/api/user');
        sethistoryArray(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

useEffect(() => {
    fetchData();
}, []);
 
  
  const handleDownloadPDF = () => {
    window.open("https://drive.google.com/file/d/1Mb6TjyZlkoLK4ub741NlZYtL0CAmDf2_/view?usp=sharing");
    alert('Downloading PDF...');
  };

  return (
    <div>
    <div className="history-of-tickets-card">
      <h2 style={{fontSize:"30px"}}>History of Tickets</h2>
      <div className="history-of-tickets-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticket Number</th>
              <th>Place</th> 
              <th>Booking Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            
            {HistoryArray.map(item => (
                        <tr key={item.id}>
                            <td>{item.Name}</td>
                            <td>{item.Refno}</td>
                            <td>{item.Qty}</td>
                            <td>{item.Status}</td>
                            <td>
                  <button onClick={handleDownloadPDF}>Download Tickets</button>
                </td>
                        </tr>
                    ))}
           
          </tbody>
        </table>
      </div>
    </div></div>
  );
};

const RescheduleTickets = () => {
  const [historyArray, setHistoryArray] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://bus-booking-server.vercel.app/api/user');
      setHistoryArray(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDateEdit = (id) => {
    const updatedHistoryArray = historyArray.map(item => {
      if (item.id === id) {
        return { ...item, editingDate: true }; 
      }
      return item;
    });
    setHistoryArray(updatedHistoryArray);
  };

  const handleDateChange = (id, newDate) => {
    const updatedHistoryArray = historyArray.map(item => {
      if (item.id === id) {
        return { ...item, Date: newDate, editingDate: false }; 
      }
      return item;
    });
    setHistoryArray(updatedHistoryArray);
  };

  return (
    <div>
    <div className="history-of-tickets-card">
      <h2 style={{ fontSize: "30px" }}>Reschedule of Tickets</h2>
      <div className="history-of-tickets-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticket Number</th>
              <th>Qty</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {historyArray.map(item => (
              <tr key={item.id}>
                <td>{item.Name}</td>
                <td>{item.Refno}</td>
                <td>{item.Qty}</td>
                <td>
                  {item.editingDate ? (
                    <input
                      type="date"
                      value={item.Date}
                      onChange={(e) => handleDateChange(item.id, e.target.value)}
                      onBlur={() => handleDateChange(item.id, item.Date)}
                    />
                  ) : (
                    <span onClick={() => handleDateEdit(item.id)}>{item.Date}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};



const CancelTicket = () => {
  const [historyArray, setHistoryArray] = useState([]);

  const resultArray = historyArray.map(item => (
    <tr key={item.id}>
      <td>{item.Refno}</td>
      <td>{item.Name}</td>
      <td>{item.Qty}</td>
      <td>{item.Status}</td>
    </tr>
  ));

  function deleteData(id) {
    let flag = window.confirm("Are you sure want to cancle?");
    if (!flag) {
      return;
    }

    let url = `https://bus-booking-server.vercel.app/api/user/${id}`;
    axios.delete(url)
      .then((resData) => {
        alert(resData.data.status);
      })
      .catch(error => {
        console.error("Error deleting ticket:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const bookingId = document.getElementById('bookingid').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    deleteData(bookingId, mobileNumber);
  }

  return (
    <div>
      <h2 style={{ fontSize: '30px' }}>Cancel Ticket</h2>
      <div className="cancel-card">
        <div className="text-container">
          <h6 className="c-h6">Enter Ticket Details</h6>
          <p className="c-p">Check your email or SMS that you received while booking</p>
        </div>
        <fieldset style={{ borderRadius: '10px' }}>
          <form className="search-form" onSubmit={handleSubmit}>
            <span style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>Bus Booking ID</span> &nbsp;
            <input id="bookingid" className="search-input" type="text" placeholder="Enter Id Here" />
            <span style={{ fontSize: '20px', fontFamily: 'sans-serif' }}>Mobile No</span> &nbsp;
            <input id="mobileNumber" className="search-input" type="text" placeholder="Enter Mobile No" />
            <button className="cancel-button0" type="submit">Cancel Ticket</button>
          </form>
        </fieldset>

        <div className="text-container2">
          <h6 className="c-h6">Help:</h6>
          <p className="c-p">&nbsp;&nbsp;Check your email or SMS that you received while booking</p>
          <p className="c-p">&nbsp;&nbsp;For the cancellation cut off time defined by the bus partner, you can check the cancellation policy in your booking confirmation email.</p>
          <p className="c-p">&nbsp;&nbsp;While you cancel your ticket you can choose one of the following refund modes: Original refund mode, Wallet Cash or UPI.</p>
        </div>

      </div>

    </div>
  );
};


export const Tickets = () => {
  
  const [currentPage, setCurrentPage] = useState("history");

  return (
    <div>
      
      <nav>
        <ul>
          <li>
            <button1 className="active" onClick={() => setCurrentPage("history")}>
              History of Tickets
            </button1>
          </li>
          <li>
            <button1 className="active" onClick={() => setCurrentPage("reschedule")}>
              Reschedule of Tickets
            </button1>
          </li>
          <li>
            <button1 className="active" onClick={() => setCurrentPage("cancel")}>
              Cancel Ticket
            </button1>
          </li>
        </ul>
      </nav>

      <NavBar/>
      {currentPage === "history" && <HistoryOfTickets />}
      {currentPage === "reschedule" && <RescheduleTickets />}
      {currentPage === "cancel" && <CancelTicket />}
      <br/>
      <Footer/>
    </div>
   
  );
};
