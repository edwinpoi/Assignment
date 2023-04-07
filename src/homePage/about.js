import React from 'react'
import Photo from "../asset/logo.png"

const about = () => {
  return (
    <div className='AboutContainer'>
    <div className='flexDer '>
      <h1>Little Lemon </h1>
      <p>The best restaurant and got a lot of award</p>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    </div>


    <div className='flexDer'>
     <img src={Photo} className='heroImg' alt='img'>
     </img>
    </div>

  </div>
  )
}

export default about