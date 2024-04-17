import React from 'react'

const DashboardData = ({medicines}) => {
  return (
    <>
    <div className="container mt-5 row col-12">
        {medicines.map((medicine, index) => (
            <>
          <div className="card-container col-2" key={index}>
            <div className="card">
              <img src={medicine.image} className="card-img-top" alt={medicine.name} />
              <div className="card-body">
                <h5 className="card-title">{medicine.name}</h5>
                <p className="card-text">{medicine.quantity}</p>
                <p className="card-text">{medicine.price}</p>
                <p className="card-text">{medicine.expiry}</p>
              </div>
            </div>
          </div>
          <div className="mx-3"></div>
          </>
        ))}
      </div>
    </>
  )
}

export default DashboardData
