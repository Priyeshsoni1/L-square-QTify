
import React from 'react'
import headphone from "../../assets/vibrating-headphone 1.png"
import './heroSection.css'
const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className='container'>
            <div className='container-left'>
                <div className='text-1'>100 Thousand Songs, ad-free</div>
                <div className='text-2'>Over thousands podcast episodes</div>
            </div>
            <div className='container-right'>
                <img src={headphone} alt="headphone" />
            </div>
        </div>
    </section>
  )
}

export default HeroSection