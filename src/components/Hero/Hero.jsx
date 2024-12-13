import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
      <h1>Welcome To Wolkite Univessity</h1>
           <p>
        <h2>We Ensure better education for a better world</h2>
     
            Our cutting-edge curriculum is designed to empower students with the knowledge,
            skill,and experience needed to excel in the dynamic field of educatin
        </p>
       <button className='btn'>Explore more<img src={dark_arrow} alt=""/></button>
        </div>
        </div>
  )
}

export default Hero
