import React,{useState} from 'react'
import { useLocation } from "react-router-dom";

const ConfirmedBooking = (props) => {

  const location = useLocation();
  const data =location.state;
  return (
    <div className='formContainer'>
        <h1>Booking Confirmed:</h1>
        <div>Name:{data.name}</div>
        <div>email:{data.email}</div>
        <div>phoneNumber:{data.phoneNumber}</div>
        <div>Date:{data.date}</div>
        <div>Time:{data.time}</div>
        <div>Guests:{data.guests}</div>
        <div>Ocasion:{data.occasion}</div>
    </div>
  )
}

export default ConfirmedBooking