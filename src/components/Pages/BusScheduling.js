import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./BusScheduling.css";
import NavBar1 from '../NavBar1';

function BusScheduling() {
  const [busSchedulingArray, setBusSchedulingArray] = useState([]);
  const [sno, setSno] = useState("");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [price, setPrice] = useState("");
  const [showForm, setShowForm] = useState(false); 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://bus-booking-server.vercel.app/api/buses');
      setBusSchedulingArray(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addData = async () => {
    const newBus = {
      sno : sno,
      name: name,
      from: from,
      to: to,
      type: type,
      Start: start,
      End: end,
      Price: price
    };

    try {
      const response = await axios.post('https://bus-booking-server.vercel.app/api/buses', newBus);
      alert(response.data.status);
      fetchData();
      clearFields();
    } catch (error) {
      console.error('Error adding bus entry:', error);
    }
  };

  function deleteData(id) {
    let flag = window.confirm("Are you sure want to delete?");
    if (flag == false) {
      return;
    }

    let url = "https://bus-booking-server.vercel.app/api/buses/" + id;
    axios.delete(url).then((resData) => {
      alert(resData.data.status);
      fetchData();
    });
  }

  function select_click(id) {
    let url = "https://bus-booking-server.vercel.app/api/buses/" + id;
    axios.get(url).then((resData) => {
      let busObj = resData.data;
      setSno(busObj.sno)
      setName(busObj.name);
      setFrom(busObj.from);
      setTo(busObj.to);
      setType(busObj.type);
      setStart(busObj.Start);
      setEnd(busObj.End);
      setPrice(busObj.Price);
      setShowForm(true); 
    });
  }

  function updateDataButton_click() {
    let busObj = {};
    busObj.sno = sno;
    busObj.name = name;
    busObj.from = from;
    busObj.to = to;
    busObj.type = type;
    busObj.start = start;
    busObj.end = end;
    busObj.price = price;

    let url = "https://bus-booking-server.vercel.app/api/buses";
    axios.put(url, busObj).then((resData) => {
      alert(resData.data.status);
      clearFields();
      fetchData();
    });
  }

  const clearFields = () => {
    setName("");
    setFrom("");
    setTo("");
    setType("");
    setStart("");
    setEnd("");
    setPrice("");
  };

  const handleAddData = () => {
    addData();
  };

  const resultArray = busSchedulingArray.map(item => (
    <tr key={item.id}>
      <td>{item.sno}</td>
      <td>{item.name}</td>
      <td>{item.from}</td>
      <td>{item.to}</td>
      <td>{item.type}</td>
      <td>{item.Start}</td>
      <td>{item.End}</td>
      <td>{item.Price}</td>
      <td>
        <a href="javascript:void(0);" onClick={() => deleteData(item.sno)}>
          <img src='images/delete.png' width={"35px"} height={"35px"} style={{ marginLeft: "3px",margin:"3px" }} />
        </a>
      </td>
      <td>
        <a href="javascript:void(0);" onClick={() => select_click(item.sno)}>
          <img src="images/select.png" width="35px" height="35px" style={{ marginLeft: "6px", padding: "4px" }} />
        </a>
      </td>
    </tr>
  ));

  return (
    <><NavBar1/>
    <div style={{
      backgroundImage: 'url("images/des.webp")',
      width: "1490px",
      height: "1400px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }} className='page2'>
      <h3 style={{paddingTop:"40px",marginLeft:"10px"}}>Bus Scheduling</h3>
      <button  onClick={() => setShowForm(!showForm)} style={{marginBottom:"30px"}}>+&nbsp;Add Bus</button>
     
      {resultArray.length === 0 ? (
        <p>Loading...</p>
      ) : (
          <table  border="2" cellSpacing="0" width="1200" className='table2' >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>From</th>
                <th>To</th>
                <th>Type</th>
                <th>Start</th>
                <th>End</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {resultArray}
            </tbody>
          </table>
        )}

      {showForm && (
        <div className='form'>
          <input type='text' placeholder='sno' value={sno} onChange={(e) => setSno(e.target.value)} /><br /><br />
          <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
          <input type='text' placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)} /><br /><br />
          <input type='text' placeholder='To' value={to} onChange={(e) => setTo(e.target.value)} /><br /><br />
          <input type='text' placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} /><br /><br />
          <input type='text' placeholder='Start' value={start} onChange={(e) => setStart(e.target.value)} /><br /><br />
          <input type='text' placeholder='End' value={end} onChange={(e) => setEnd(e.target.value)} /><br /><br />
          <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
          <button type="button"  onClick={updateDataButton_click}>Update Data</button> 
          <button   onClick={handleAddData}>Add Data</button>
        </div>
      )}
    </div></>
  );
}

export default BusScheduling;
