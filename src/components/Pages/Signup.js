import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css"; // Import the CSS file
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    let navigate = useNavigate();
    let location = useLocation();

    function validateForm() {
        setError("");

        if (!/^[a-zA-Z\s]*$/.test(username)) {
            alert("Name should contain only letters");
            return;
        }

        if (!username || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return false;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
            setError("Invalid email format.");
            return false;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return false;
        }





        return true;
    }
    function addDataButton_click() {
        const isValid = validateForm();
        if (!isValid) return;

        let registerObj = {
            email: email,
            username: username,
            password: password
        };

        let url = "http://localhost:3005/api/Register";
        axios.post(url, registerObj)
            .then((resData) => {
                alert(resData.data.status);
                navigate("/Login");
            })
            .catch(error => {
                alert("Error: " + error.message);
            });
    }
    return (
        <div><NavBar />
            <div className="card1">

                <p className="signup">Signup</p><br />
                <label className="text2">User Name : </label>
                <input className="text1"
                    type="text"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value); setError(""); }} // Clear error
                />
                <br />
                <br />

                <label className="text3">Email : </label>
                <input className="text1"
                    type="email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value); setError(""); }} // Clear error
                />
                <br />
                <br />

                <label className="text4">Password : </label>
                <input className="text1"
                    type="password"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value); setError(""); }} // Clear error
                />
                <br />
                <br />

                <label className="text5">Confirm Password : </label>
                <input className="text1"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => { setConfirmPassword(event.target.value); setError(""); }} // Clear error
                />
                <br />
                <br />

                <button type="button" onClick={addDataButton_click}>Register</button>
                <p style={{ color: "red" }}>{error}</p><br />

                <Link to="/Login" >Login</Link>
            </div></div>
    );

};
