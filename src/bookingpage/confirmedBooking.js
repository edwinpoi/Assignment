import React,{useState} from 'react'
import { useLocation } from "react-router-dom";

const ConfirmedBooking = (props) => {

  const location = useLocation();
  const data =location.state;
  return (
    <div className='confirmContainer'>
        <h1>Booking Confirmed:</h1>
        <h3>Thank for your booking, hope you love our serve</h3>
        <div>
        <div>Name:{data.name}</div>
        <div>Email:{data.email}</div>
        <div>Phone Number:{data.phoneNumber}</div>
        <div>Date:{data.date}</div>
        <div>Time:{data.time}</div>
        <div>Guests:{data.guests}</div>
        <div>Ocasion:{data.occasion}</div>
        </div>
    </div>
  )
}

export default ConfirmedBooking