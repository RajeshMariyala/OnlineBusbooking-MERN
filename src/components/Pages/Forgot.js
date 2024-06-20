import React, { useState } from "react";
import axios from "axios";
import "./Forgot.css"; 
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export const Forgot = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');
   const  navigate=useNavigate();
    async function submit(e) {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '' || captchaInput.trim() === '') {
            alert("All fields are required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Invalid email address");
            return;
        }

        if (password.length < 8) {
            alert("Password should be at least 8 characters long");
            return;
        }

        if (captchaInput !== captcha) {
            setCaptchaError('Incorrect CAPTCHA, please try again.');
            return;
        }

        try {
          
            const res = await axios.post("http://localhost:3005/Login", {
                email,
                password,
                captcha
            });

            if (res.data === "This user exists") {
                history("/");
            } else {
                alert("User has not signed up");
            }
        } catch (e) {
            
            console.error(e);
        }
      navigate("/login")
    }

    function generateCaptcha() {
        const captcha = Math.random().toString(36).substring(7);
        setCaptcha(captcha);
    }

    return (<div><NavBar/>
        <div className="forgot-password-container">
            <h2 style={{ marginBottom: "15px" }}>Forgot Password</h2>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="input-field"
                    required
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   
                     <p style={{ margin: '0px 0px', color: 'green', fontSize: '20px', fontWeight: 'bold', marginLeft:'30px' }}>{captcha}</p>
                     <button type="button" onClick={generateCaptcha} className="captcha-button">Generate CAPTCHA</button>
                   
                </div>
                <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setCaptchaError('');
                    }}
                    placeholder="Enter CAPTCHA code"
                    className="input-field"
                    required
                />
                {captchaError && <p style={{ color: 'red' }}>{captchaError}</p>}
                <button type="submit" onClick={submit}  className="submit-button">Submit</button>
            </form>
        </div></div>
    );
};
