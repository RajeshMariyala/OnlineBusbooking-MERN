import React, { useState } from 'react';
import './Seats.css';
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [emptySeats, setEmptySeats] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const seatPrice = 550;
  const taxRate = 0.1;
  const bookedSeats = [4, 7, 13, 20];
  const navigate = useNavigate();


  const toggleSeatSelection = (seat) => {
    if (bookedSeats.includes(seat)) {
      alert(`Seat ${seat} is already booked.`);
      return;
    }

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
      setEmptySeats([...emptySeats, seat]);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setEmptySeats(emptySeats.filter((emptySeat) => emptySeat !== seat));
    }
  };

  sessionStorage.setItem("numberOfSeats", selectedSeats);

  const calculateTotalPrice = () => {
    const subtotal = selectedSeats.length * seatPrice;
    const tax = subtotal * taxRate;
    return subtotal + tax;
  };
  sessionStorage.setItem("total", calculateTotalPrice());
  localStorage.setItem('total', calculateTotalPrice());

  return (
    <><NavBar />
      <div className="bus-seat-selection">
        <h2>Select Your Seats</h2>


        <div className="seat-container">

          {[...Array(20)].map((_, index) => (
            <button
              key={index}
              className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''} ${emptySeats.includes(index + 1) ? 'empty' : ''} ${(bookedSeats.includes(index + 1) ? 'booked' : '')}`}
              onClick={() => toggleSeatSelection(index + 1)}
              style={{ visibility: (emptySeats.includes(index + 1)) || (selectedSeats.includes(index + 1)) ? 'visible' : 'hidden' }}
            >
              {index + 1}
            </button>
          ))}
        </div>


        <div className="summary">
          <p>Number of Seats: {selectedSeats.length}</p>
          <p>Total Price: ₹{calculateTotalPrice().toFixed(2)}</p>
        </div>
        <button className="continue-button" onClick={() => navigate("/payment")}>
          Continue
        </button>

      </div>
      <Footer />
    </>
  );
};

export default SeatSelection;

