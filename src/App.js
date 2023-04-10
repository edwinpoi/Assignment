import Nav from "./Nav"
import Homepage from  './homePage'
import BookingPage from "./bookingpage"
import ConfirmPage from "./bookingpage/confirmedBooking"
import {Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      
    <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/confirmPage" element={<ConfirmPage/>} />

    </Routes>
 
    </div>

  );
}

export default App;
