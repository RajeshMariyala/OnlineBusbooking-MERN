import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BusList.css'; 
import NavBar1 from '../NavBar1';

function BusList() {
  const [busArray, setBusArray] = useState([]);
  const [Busid, setBusid] = useState("");
  const [BusNo, setBusNo] = useState("");
  const [BusName, setBusName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3005/api/buslist');
      setBusArray(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clearFields = () => {
    setBusid("");
    setBusNo("");
    setBusName("");
  }

  const addOrUpdateData = () => {
    if (!Busid || !BusNo || !BusName) {
      alert("Please fill in all fields");
      return;
    }

    const busObj = {
      Busid: parseInt(Busid),
      BusNo,
      BusName,
    };

    const url = `http://localhost:3005/api/buslist${isEditing ? `/${editId}` : ''}`;
    const method = isEditing ? axios.put : axios.post;

    method(url, busObj)
      .then(resData => {
        alert(resData.data.status);
        fetchData();
        clearFields();
      })
      .catch(error => {
        alert("Error: " + error.message);
      });
  };

  const edit_click = (item) => {
    setIsEditing(true);
    setEditId(item.Busid);
    setBusid(item.Busid);
    setBusNo(item.BusNo);
    setBusName(item.BusName);
  };

  const delete_click = (Busid) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const url = `http://localhost:3005/api/buslist/${Busid}`;
      axios.delete(url)
        .then(resData => {
          alert(resData.data.status);
          fetchData();
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    }
  };

  return (
    <><NavBar1/><div style={{
      backgroundImage: 'url("images/des.webp")',
      width: "1490px",
      height: "1300px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",marginTop:"-130px"}}>
    <div className="container">
      <h3 style={{paddingTop:"40px",marginLeft:"10px"}}>Buses List</h3>
      <table border="2" cellSpacing="0" width="600" className='table4'>
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Bus No</th>
            <th>Bus Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {busArray.map(item => (
            <tr key={item.Busid}>
              <td>{item.Busid}</td>
              <td>{item.BusNo}</td>
              <td>{item.BusName}</td>
              <td>
                <button onClick={() => edit_click(item)}>Edit</button>&nbsp;&nbsp;
                <button  onClick={() => delete_click(item.Busid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='box1'>
        <form onSubmit={(e) => {
          e.preventDefault();
          addOrUpdateData();
        }}>
          <input type="number" placeholder='Bus ID' value={Busid} onChange={(e) => setBusid(e.target.value)} />
          <input type="text" placeholder='Bus No' value={BusNo} onChange={(e) => setBusNo(e.target.value)} />
          <input type="text" placeholder='Bus Name' value={BusName} onChange={(e) => setBusName(e.target.value)} />
          <input type="submit"  value={isEditing ? "Update Data" : "Add Data"} />
        </form>
      </div>
      </div></div>
    </>
  );
}

export default BusList;
