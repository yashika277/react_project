import React from 'react'
import img from './img/home.png'

const Banner = () => {
  return (

    <section class="home" id="home">
    <div class="home-text">
        <span>Welcome To</span>
        <h1>Starbucks Coffee</h1>
        <h2>Free Coffee is a <br/>tap away</h2>
        <a href="#" class="btn">Join Now</a>
    </div>
    <div class="home-img">
        <img src={img} alt="home"/>
    </div>
</section>
   
    
  )
}

export default Banner
