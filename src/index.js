import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import UserApp from './components/UserApp';
import { Booking } from './components/Pages/Booking';
import { Tickets } from './components/Pages/Tickets';
import { Contact } from './components/Pages/Contact';
import { Signup } from './components/Pages/Signup';
import { Login } from './components/Pages/Login';
import { About } from './components/Pages/About';
import { NoMatch } from './components/Pages/NoMath';
import { Forgot } from './components/Pages/Forgot';
import SeatSelection from './components/Pages/SeatSelection';
import { Payment } from './components/Pages/Payment';
import BusScheduling from './components/Pages/BusScheduling';
import BusList from './components/Pages/BusList';
import UsersList from './components/Pages/UserList';
import Schedule from './components/Pages/schedule';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from './components/Pages/Home';
import { ContactUS } from './components/Pages/ContactUs';
import Adminhome from './components/Pages/adminhome';
import { AdminLogin } from './components/Pages/AdminLogin';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRoute1 from './ProtectedRoute1';

<Router>
  <div className="pages">
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/booking" element={<Booking />} />
      <Route path="/Tickets" element={
        <ProtectedRoute returnUrl="/Tickets">
          <Tickets />
        </ProtectedRoute>
      } />

      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUS />} />
      <Route path="/forgot" element={<Forgot />} />

      <Route path="/seatselection" element={
        <ProtectedRoute returnUrl="/seatselection">
          <SeatSelection />
        </ProtectedRoute>
      } />

      <Route path="/payment" element={
        <ProtectedRoute returnUrl="/payment">
          <Payment />
        </ProtectedRoute>
      } />

      <Route path="/adminhome" element={
        <ProtectedRoute1 returnUrl="/adminhome">
          <Adminhome />
        </ProtectedRoute1>
      } />

      <Route path="/BusScheduling" element={
        <ProtectedRoute1 returnUrl="/BusScheduling">
          <BusScheduling />
        </ProtectedRoute1>
      } />

      <Route path="/BusList" element={
        <ProtectedRoute1 returnUrl="/BusList">
          <BusList />
        </ProtectedRoute1>
      } />

      <Route path="/UserList" element={
        <ProtectedRoute1 returnUrl="/UserList">
          <UsersList />
        </ProtectedRoute1>
      } />

      <Route path="/Schedule" element={
        <ProtectedRoute1 returnUrl="/Schedule">
          <Schedule />
        </ProtectedRoute1>
      } />


      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="*" element={<NoMatch />} />

    </Routes>

  </div>

</Router>

const root = createRoot(document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

