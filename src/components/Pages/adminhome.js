import NavBar1 from "../NavBar1";
import "./adminhome.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
function Adminhome(){
  const Data = [
    { name: 'Buses', buses: 40 },
    { name: 'Sales', buses: 25 },
    { name: 'Avalibility', buses: 50 },
    { name: 'Profit', buses: 10 },
  ];

  const customerData = [
    { name: 'Jan', visits: 30 },
    { name: 'feb', visits: 50},
    { name: 'mar', visits: 70 },
    { name: 'apr', visits: 20 },
    { name: 'may', visits: 20 },
    { name: 'june', visits: 30 },
    { name: 'july', visits: 0 },
    { name: 'aug', visits: 10 },
    { name: 'sep', visits: 40 },
    { name: 'oct', visits: 20 },
    { name: 'nov', visits: 90 },
    { name: 'dec', visits: 20 },
  ];
    return(<>
    <NavBar1/>
     <div style={{marginTop:"-200px"}}> 
    <h2 align-item="center" style={{paddingTop:"100px"}}>Welcome Admin!!</h2>
    <div className="flex">
      <div className="circle1">
       <h4>No of Buses Booked</h4><br/>
       <h3>128</h3>
      </div>
      <div className="circle1">
      <h4>No of Buses Available</h4><br/>
       <h3>28</h3>
      </div>
      <div className="circle1">
      <h4>No of Users</h4><br/>
       <h3>18</h3>
      </div>
      <div className="circle1">
      <h4>No of views </h4><br/>
       <h3>100</h3>
      </div>
      <div className="circle1">
      <h4>No of Buses</h4><br/>
       <h3>28</h3>
      </div>
    </div>

    <div>
      <div className="container1">
    <div>
          <h2>Bus Details</h2>
          <BarChart width={400} height={300} data={Data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="buses" fill="#8884d8" />
          </BarChart>
        </div>
      
        
        <div className="chart-container">
          <h2>Users </h2>
          <LineChart width={400} height={300} data={customerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#82ca9d" />
          </LineChart>
        </div>
        
    </div>
    </div>
    </div>
    </>);

}

export default Adminhome;