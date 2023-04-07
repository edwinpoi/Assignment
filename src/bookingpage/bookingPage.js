import React, { useReducer } from 'react'
import BookingForm from './bookingForm'

const initializeTimes="";

const BookingPage = () => {

  const updateTimes=()=> {return("")}

  const [availableTimes,dispatch]=useReducer(updateTimes, initializeTimes);

  return (
    <div>
        <BookingForm availableTime={availableTimes}/>
    </div>
  )
}

export default BookingPage