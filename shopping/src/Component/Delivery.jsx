import React from 'react'
import img from './img/delivery.png'

const Delivery = () => {
  return (
    <section class="delivery" id="delivery">
        <div class="heading">
            <span>Get Now</span>
            <h1>ORDER WITH UBER EATS</h1>
        </div>
        <div class="container">
            <div class="delivery-img">
                <img src={img}/>
            </div>
            <div class="delivery-text">
                <h2>Today Deserve Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius inventore nam molestiae aut iusto iure saepe quod ducimus dignissimos quasi!</p>
                <a href="#" class="btn">Order Now</a>

            </div>
        </div>
    </section>
  )
}

export default Delivery
