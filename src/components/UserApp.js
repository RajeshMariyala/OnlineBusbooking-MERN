import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Booking } from "./Pages/Booking";
import { Tickets } from "./Pages/Tickets";
import { Contact } from "./Pages/Contact";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { NoMatch } from "./Pages/NoMath";
import { About } from "./Pages/About";
import { ContactUS } from "./Pages/ContactUs";
import { Forgot } from "./Pages/Forgot";
import SeatSelection from "./Pages/SeatSelection";
import { Payment } from "./Pages/Payment";
import "./UserApp.css";
import Schedule from "./Pages/schedule";
import UsersList from "./Pages/UserList";
import BusList from "./Pages/BusList";
import BusScheduling from "./Pages/BusScheduling";
import Adminhome from "./Pages/adminhome";
import { Success } from "./Pages/Success";
import { AdminLogin } from "./Pages/AdminLogin";
import ProtectedRoute from "../ProtectedRoute";
import ProtectedRoute1 from "../ProtectedRoute1";

function UserApp() {
  return (
    <>
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
            <Route path="*" element={<NoMatch />} />
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

            <Route path="/success" element={
              <ProtectedRoute returnUrl="/success">
                <Success />
              </ProtectedRoute>
            } />
            <Route path="/success" element={<Success />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />

          </Routes>

        </div>

      </Router>
    </>
  );
}

export default UserApp;



