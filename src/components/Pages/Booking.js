import Footer from "../Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css'; 
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export const Booking = () =>  {
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({ ac: false, sleeper: false, luxury: false, superLuxury: false, nonSleeperNonAC: false, nonAC: false });
  const [searchCriteria, setSearchCriteria] = useState({ startPoint: '', endPoint: '', date: '' });
  const [noBusesMessage, setNoBusesMessage] = useState('');
  const navigate = useNavigate();
  const randomBusId = Math.floor(Math.random() * 9000) + 1000;
  useEffect(() => {
    axios.get('https://bus-booking-server.vercel.app/api/buses')
      .then(response => {
        setBuses(response.data);
        sessionStorage.setItem("busId", randomBusId.toString());
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterChange = (filterName, value) => {
    if (filterName === 'startPoint' || filterName === 'endPoint' || filterName === 'date') {
      setSearchCriteria({ ...searchCriteria, [filterName]: value });
    } else {
      setFilters({ ...filters, [filterName]: value });
    }
  };
 
  const filteredBuses = buses.filter((bus) => {
    if (filters.ac && !bus.ac) return false;
    if (filters.sleeper && !bus.sleeper) return false;
    if (filters.luxury && (!bus.ac || !bus.sleeper)) return false;
    if (filters.superLuxury && (!bus.ac || !bus.sleeper || !bus.luxury)) return false;
    if (filters.nonSleeperNonAC && (bus.ac || bus.sleeper)) return false;
    if (filters.nonAC && bus.ac) return false;

    const { startPoint, endPoint } = searchCriteria;
    if (startPoint && bus.from.toLowerCase().indexOf(startPoint.toLowerCase()) === -1) return false;
    if (endPoint && bus.to.toLowerCase().indexOf(endPoint.toLowerCase()) === -1) return false;

    return true;
  });

  useEffect(() => {
    if (filteredBuses.length === 0) {
      setNoBusesMessage('No buses available!!');
    } else {
      setNoBusesMessage('');
    }
  }, [filteredBuses]);

  return (
    <><div >
    <NavBar/>
      <div className='searchbox'>
        <input type="text" name="startPoint" placeholder="&nbsp;Start Point" onChange={(e) => handleFilterChange(e.target.name, e.target.value)} />
        <input type="text" name="endPoint" placeholder="&nbsp;End Point" onChange={(e) => handleFilterChange(e.target.name, e.target.value)} />
        <input type="date" name="date" onChange={(e) => handleFilterChange(e.target.name, e.target.value)} />
        <input  className="btn-success" type="button" name='search' class="btn btn-success" value="Search"/>
      </div>
      <div className='flex'>
        <div className='filters'>
          <h2 style={{marginBottom:"12px"}}>Filters</h2>
          <label>
            <input  className="check1" type="checkbox" name="ac" onChange={(e) => handleFilterChange(e.target.name, e.target.checked)} />&nbsp;
            AC
          </label>
          <br />
          <label>
            <input className="check2" type="checkbox" name="nonAC" onChange={(e) => handleFilterChange(e.target.name, e.target.checked)} />&nbsp;
            Non-AC
          </label>
          <br />
          <label>
            <input className="check3" type="checkbox" name="sleeper" onChange={(e) => handleFilterChange(e.target.name, e.target.checked)} />&nbsp;
            Sleeper
          </label>
          <br />
          <label>
            <input className="check4" type="checkbox" name="luxury" onChange={(e) => handleFilterChange(e.target.name, e.target.checked)} />&nbsp;&nbsp;
            Luxury
          </label>
          <br />
          <label>
            <input className="check5" type="checkbox" name="superLuxury" onChange={(e) => handleFilterChange(e.target.name, e.target.checked)} />&nbsp;
            Super Luxury
          </label>
          <br />
        </div>

        <div>
          {noBusesMessage && <p className="text-error">{noBusesMessage}</p>}
          <div className="bus-cards">
            {filteredBuses.map((bus) => (
              <div key={bus.id} className="bus-card">
                <div className='one'><br/>
                  <p>{bus.name}</p>
                  <p>Type: {bus.type}</p>
                  {bus.ac && <p>(AC)</p>}
                  {bus.sleeper }
                </div>
                <div className='two'>
                  <p>From: {bus.from} <img src='images/arrow.png'alt="" width="40px" height="40px"/>&nbsp;To:{bus.to}</p>
                  <br/> <p>Start: {bus.Start}  &nbsp;|&nbsp;End: {bus.End}</p>
                </div>
                <div className='three'>
                  <p className='p'>Price: {bus.Price}</p><br/>
                  <input className="ticketbtn" type="button" onClick={ ()=> navigate("/seatselection")} value="book seat" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div><Footer/></div>
      
    </>
  );
};
