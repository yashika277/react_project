import React from 'react'
import img from './img/app.png'

const Our = () => {
  return (
    <section class="app" id="app">
    <div class="heading">
        <span>Our App</span>
        <h1>Download App</h1>
    </div>
    <div class="container">
        <div class="app-text">
            <h2>Fall into an easier routine</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
            <a href="#" class="btn">Get App</a>
        </div>
        <div class="app-img">
            <img src={img} alt="app"/>
        </div>
        </div>
        </section>
  )
}

export default Our
