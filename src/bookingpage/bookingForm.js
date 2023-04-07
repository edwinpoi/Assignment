import { useEffect, useState } from "react"
import React from 'react'


const Main = (props) => {

const [date,setDate]=useState("")
const [time,setTime]=useState("")
const [guests,setGuests]=useState(0)
const [occasion,setOccasion]=useState("")


const availableTime=["17:00","18:00","19:00","20:00","21:00","22:00"]
const availTimeList= availableTime.map((number)=>{
  return(
    <option value={number}>{number}</option>
  )
})



useEffect(()=>{console.log("Date:",{date})},[date]);
useEffect(()=>{console.log("Time:",{time})},[time]);
useEffect(()=>{console.log("Guests:",{guests})},[guests]);
useEffect(()=>{console.log("Occasion:",{occasion})},[occasion]);


  return (
    <div>
<form>
<label for="res-date">Choose date</label>
   <input type="date" id="res-date" onChange={(e)=>{setDate(e.target.value)}} value={date} />

   <label for="res-time">Choose time</label>
   <select id="res-time " onChange={(e)=>{setTime(e.target.value)}} value={time}>
     {availTimeList}
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>{setGuests(e.target.value)}} value={guests}/>
   <label for="occasion">Occasion</label>
   <select id="occasion" onChange={(e=>{setOccasion(e.target.value)})} value={occasion}>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>


</form>

    </div>
  )
}

export default Main