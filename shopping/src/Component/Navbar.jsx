import React from 'react'
import img from './img/logo.png'
const Navbar = () => {
  return (
    <header>
    <a href="#" class="logo"><img src={img} alt="logo"/></a>
    <div class="bx bx-menu" id="menu-icon"></div>
    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#delivery">Delievery</a></li>
        <li><a href="#app">App</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact us">Contact us</a></li>
    </ul>
</header>
  )
}

export default Navbar
