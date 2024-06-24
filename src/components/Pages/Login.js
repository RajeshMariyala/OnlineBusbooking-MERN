import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation,Link } from "react-router-dom";
import "./Login.css";
import NavBar from "../NavBar";


export const Login = () => {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
   
  let navigate = useNavigate();
  let location = useLocation();

  function loginButton_click() {
    const queryString = location.search;
    let strReturnUrl = new URLSearchParams(queryString).get("returnUrl");
   
    if (strReturnUrl == null) {
      strReturnUrl = "/booking";
    }

    let url = "https://bus-booking-server.vercel.app/api/Login";

    let userObj = {
      username: username,
      password: password,
    };

    axios
      .post(url, userObj)
      .then((resData) => {
        console.log(resData);
        if (resData.data.message === "User already exists") {
          let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
          sessionStorage.setItem("user-token", token);
          sessionStorage.setItem("username", username);
          navigate(strReturnUrl);
          // navigate("/booking");
        } else {
          setResult("Invalid User Id or Password");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        setResult("Invalid User Id or Password ", error);
      });
  }

    return (
        <><NavBar/>
      <div className="card">
        <p className="signup">Login</p>
        <label>User Id : </label>
        <input className="text1"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <br />

        <label className="text4">Password : &nbsp;&nbsp;</label>
        <input className="text3"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <button type="button" onClick={loginButton_click} >Login</button>
        <p style={{ color: "red" }}>{result}</p><br/>
        <Link to="/signup" >Create Account</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/forgot" >Forgot Password</Link><br/><br/>
        <button type="button"  onClick={()=>navigate("/AdminLogin")}>Adminapp</button>
        </div>
    </>
    );
};
