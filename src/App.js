import Nav from "./Nav"
import Homepage from  './homePage'
import BookingPage from "./bookingpage"
import {Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      
    <Routes>
          <Route path="/"  element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage/>} />

    </Routes>
 
    </div>

  );
}

export default App;
