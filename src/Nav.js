import React from 'react'
import { Link } from "react-router-dom";
import logo from "./asset/logo.png";

const Nav = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='logoImg'></img>
        <ul className='hylink'>
           <li> <Link to="/">Home</Link></li>
            <li><Link to="/booking">Booking</Link></li>
        </ul>
    </div>
  )
}

export default Nav