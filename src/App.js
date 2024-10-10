import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/booking" element={<Booking/>} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;