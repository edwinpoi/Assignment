import { useEffect, useState } from "react"
import React, { useReducer }  from 'react'
import{fetchAPI} from "../bookingApi"


const Main = (props) => {

const [date,setDate]=useState(formatDate())
const [time,setTime]=useState("")
const [guests,setGuests]=useState(0)
const [occasion,setOccasion]=useState("")


function formatDate(date = new Date()) {
  var day, month, year;

  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }
  return year+"-"+month+"-"+day;
}


const updateTimes=(state,action)=>
{
  return fetchAPI(state)

}

const initializeTimes=new Date();

const test=initializeTimes;


const [availableTimes,dispatch]=useReducer(updateTimes, fetchAPI(initializeTimes));

const availTimeList= availableTimes.map((number)=>{
  return(
    <option value={number}>{number}</option>
  )
})



useEffect(()=>{console.log("Date:",{date})},[date]);
useEffect(()=>{console.log("Time:",{time})},[time]);
useEffect(()=>{console.log("Guests:",{guests})},[guests]);
useEffect(()=>{console.log("Occasion:",{occasion})},[occasion]);

useEffect(()=>{console.log("available Time :",{availableTimes})},[availableTimes]);
useEffect(()=>{console.log("Test :",{test})},[test]);


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