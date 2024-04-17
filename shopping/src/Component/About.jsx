import React from 'react'
import img from './img/about.png'

const About = () => {
  return (
    <section class="about" id="about">
        <div class="about-img">
            <img src={img} alt="about"/>
        </div>
        <div class="about-text">
            <h2>50 Years of serving communities</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
            <a href="#" class="btn">Learn More</a>
        </div>
    </section>
  )
}

export default About
