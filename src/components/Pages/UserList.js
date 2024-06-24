import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar1 from '../NavBar1';

function UsersList() {
    const [userArray, setUserArray] = useState([]);
    const [Refno, setRefno] = useState("");
    const [Qty, setQty] = useState("");
    const [Amount, setAmount] = useState("");
    const [Name, setName] = useState("");
    const [Status, setStatus] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    function clearFields() {
        setRefno("");
        setQty("");
        setAmount("");
        setName("");
        setStatus("");
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('https://bus-booking-server.vercel.app/api/user');
            setUserArray(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function select_click(Refno) {  

        let url = "https://bus-booking-server.vercel.app/api/user/" + Refno;
        axios.get(url).then((resData) =>
        {
          let userObj = resData.data;
          setRefno(userObj.Refno);
          setName(userObj.Name);
          setQty(userObj.Qty); 
          setAmount(userObj.Amount);
          setStatus(userObj.Status);   
        });
    }
    function updateDataButton_click() {
        let userObj = {};
        userObj.Refno = Refno;
        userObj.Status = Status;
      
        let url = "https://bus-booking-server.vercel.app/api/user";
        axios.put(url, userObj).then((resData) => {
          alert(resData.data.status);
          clearFields();
          fetchData();
        });
      }

    return (
        <><NavBar1/>
        <div style={{
  backgroundImage: 'url("images/des.webp")',
  width: "1490px",
  height: "870px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
 marginTop:"-130px"
}} >
    <h3 style={{paddingTop:"40px",marginLeft:"10px"}}>User List</h3>
            <table  style={{"margin-left":"350px"}}  border="2" cellSpacing="0" width="800" className='table1'>
                <thead>
                    <tr>
                        <th>Refno</th>
                        <th>Name</th>
                        <th>No of Seats</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userArray.map(item => (
                        <tr key={item.Refno}>
                            <td>{item.Refno}</td>
                            <td>{item.Name}</td>
                            <td>{item.Qty}</td>
                            <td>{item.Date}</td>
                            <td>{item.Amount}</td>
                            <td>{item.Status}</td>
                            <td>
                                <button  onClick={() => select_click(item.Refno)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

           
                <div className='box'>
                    <input type="number" placeholder='Number' value={Refno} onChange={(e) => setRefno(e.target.value)} />
                    <input type="number" placeholder='Amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
                    <input type="text" placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Status' value={Status} onChange={(e) => setStatus(e.target.value)} />
                    <input type="button" style={{margin:"5px"}} onClick={updateDataButton_click} value="update Data" />
                </div>
            
</div>
        </>
    );
}

export default UsersList;
