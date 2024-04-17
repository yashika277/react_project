import React from 'react'

const Shop = ({menuItems}) => {
  return (
    <div className="coffee-menu container">
    <div className="row">
      {menuItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className="menu-item">
            <img src={item.image} alt={item.name} className="coffee-image" />
            <div className="menu-details">
              <h2 className="coffee-name">{item.name}</h2>
              <p className="coffee-price">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Shop
