import React from 'react'
import HeroSection from './HeroSection'
import Special from './Special'
import Testimonial from './Testimonial'
import About from './about'
import Footer from './Footer'

const index = () => {
  return (
    <div>
        <div className='greenColor'><HeroSection/></div>
        <div className=''><Special/></div>
        <div className='testBackground'><Testimonial/></div>
     
        <div className='slimeGreenColor'><About/></div>
        <div className='blackColor'><Footer/></div>
    </div>
  )
}

export default index