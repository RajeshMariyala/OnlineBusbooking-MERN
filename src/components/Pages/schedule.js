import { useState, useEffect } from 'react';
import axios from 'axios';
import "./schedule.css"
import NavBar1 from '../NavBar1';

function Schedule() {
  const [showForm, setShowForm] = useState(false);
  const [BookArray, setBookArray] = useState([]);
  const [Busid, setBusid] = useState("");
  const [Date, setDate] = useState("");
  const [Bus, setBus] = useState("");
  const [Location, setLocation] = useState("");
  const [Availability, setAvailability] = useState("");
  const [Price, setPrice] = useState("");

  function clearFields() {
    setBusid("");
    setDate("");
    setBus("");
    setLocation("");
    setAvailability("");
    setPrice("");
  }

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    let url = "https://bus-booking-server.vercel.app/api/Book";
    axios.get(url).then((resData) => {
      setBookArray(resData.data);
    });
  }

  function addDataButton_click() {

    if (!Busid || !Date || !Bus || !Location  || !Availability || !Price) {
      alert("Please fill in all fields");
      return;
    }

    let bookObj = {};
    bookObj.Busid = parseInt(Busid);
    bookObj.Date = Date;
    bookObj.Bus = Bus;
    bookObj.Location = Location;
    bookObj.Availability = Availability;
    bookObj.Price = Price;

    let url = "https://bus-booking-server.vercel.app/api/Book";
    axios.post(url, bookObj).then((resData) => {
      alert(resData.data.status);
      getData();
      setShowForm(false);
      clearFields();
    }).catch(error => {
      alert("Error: " + error.message);
    });
  }

  function deleteData_click(Busid) {

    let flag = window.confirm("Are you sure want to delete?");
    if (flag == false) {
      return;
    }

    let url = "https://bus-booking-server.vercel.app/api/Book/" + Busid;
    axios.delete(url).then((resData) => {
      alert(resData.data.status);
      getData();
    });
  }

  function selectRow(item) {
    setBusid(item.Busid);
    setDate(item.Date);
    setBus(item.Bus);
    setLocation(item.Location);
    setAvailability(item.Availability);
    setPrice(item.Price);
    setShowForm(true);
  }

  function updateDataButton_click() {
    if (!Busid) {
      alert("Please select a row to update.");
      return;
    }

    let bookObj = {};
    bookObj.Busid = parseInt(Busid);
    bookObj.Date = Date;
    bookObj.Bus = Bus;
    bookObj.Location = Location;
    bookObj.Availability = Availability;
    bookObj.Price = Price;

    let url = "https://bus-booking-server.vercel.app/api/Book/" + Busid;
    axios.put(url, bookObj)
      .then((resData) => {
        alert(resData.data.status);
        getData();
        setShowForm(false);
        clearFields();
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  }

  let resultArray = BookArray.map((item, index) => (
    <tr key={index}>
      <td>{item.Busid}</td>
      <td>{item.Date}</td>
      <td>{item.Bus}</td>
      <td>{item.Location}</td>
      <td>{item.Availability}</td>
      <td>{item.Price}</td>
      <td>
        <a href="javascript:void(0);"
          onClick={() => deleteData_click(item.Busid)}>
          <img src='images/delete.png' width={"35px"} height={"35px"} style={{ marginLeft: "5px",margin:"3px" }} />
        </a>
      </td>
      <td>
        <a href="javascript:void(0);"
          onClick={() => selectRow(item)}>
          <img src='images/select.png' width={"35px"} height={"35px"} />
        </a>
      </td>
    </tr>
  ));

  return (
    <><NavBar1/>
    <div className='page' 
    style={{
  backgroundImage: 'url("images/des.webp")',
  width: "1490px",
  height: "1030px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}>
      <h3 style={{paddingTop:"40px",marginLeft:"20px"}}>Bus Availability List</h3>
      <button type="button" className='button1' onClick={() => setShowForm(!showForm)}>+&nbsp;Add</button>&nbsp;&nbsp;
      <button type="button" className="button2" onClick={updateDataButton_click}>Update Data</button>
      <table border="2" cellSpacing="0" width="1000" className='table1'>
        <thead >
          <tr >
            <th>Bus ID</th>
            <th>Date</th>
            <th>Bus Name</th>
            <th>Bus Location</th>
            <th>Availability</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {resultArray}
        </tbody>
      </table>
      <div >
        {showForm && (
          <form onSubmit={addDataButton_click} className='box'>
            <input type="number" placeholder="Busid" value={Busid} onChange={(e) => setBusid(e.target.value)} required/><br /><br />
            <input type="date" placeholder="Date" value={Date} onChange={(e) => setDate(e.target.value)} required/><br /><br />
            <input type="text" placeholder="Bus Name" value={Bus} onChange={(e) => setBus(e.target.value)} required/><br /><br />
            <input type="text" placeholder="Location" value={Location} onChange={(e) => setLocation(e.target.value)} required /><br /><br />
            <input type="number" placeholder="Avalibility" value={Availability} onChange={(e) => setAvailability(e.target.value)} required/><br /><br />
            <input type="number" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} required/><br /><br />
            <button type="submit" >Submit</button>
          </form>
        )}
      </div>
      </div>
    </>
  );
}

export default Schedule;



