import React from "react"
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Shop from "./Component/Shop";
import About from "./Component/About";
import Our from "./Component/Our";
import Delivery from "./Component/Delivery";
import Contact from "./Component/Contact";

function App() {
  const menuItems = [
    {
      name: 'Caramel Macchiato',
      price: '$5.99',
      image: 'https://wallpapercave.com/uwp/uwp3958643.jpeg',
    },
    {
      name: 'Matcha Green Tea Latte',
      price: '$6.49',
      image: 'https://wallpapercave.com/wp/wp2249503.jpg',
    },
    {
      name: 'Matcha Dark Tea Latte',
      price: '$9.49',
      image: 'https://wallpapercave.com/wp/wp5694064.jpg',
    },
    {
      name: 'Matcha Green Tea Latte',
      price: '$6.49',
      image: 'https://wallpapercave.com/wp/wp2249503.jpg',
    },
    {
      name: 'Matcha Green Tea Latte',
      price: '$6.49',
      image: 'https://wallpapercave.com/wp/wp2249503.jpg',
    },
    {
      name: 'Caramel Macchiato',
      price: '$5.99',
      image: 'https://wallpapercave.com/uwp/uwp3958643.jpeg',
    },
  ];
 

  return (
    <>
      <Navbar />
      <Banner/>

      <div className="App">
      <h1>Welcome to Our Coffee Shop!</h1>
      <Shop menuItems={menuItems} />
    </div>
    <Delivery/>
    <Our/>
    <About/>
    <Contact/>
    </>
  );
}

export default App;
