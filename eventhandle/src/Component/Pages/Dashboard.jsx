import React, { useState } from 'react'
import CardAdd from './CardAdd'
import DashboardData from '../Data/DashboardData'
import Navbar from '../Navbar'
import abac from '../../Img/abacavir-300-mg-tablet.jpg'
import Elt from '../../Img/product-jpeg.jpeg'
import melo from '../../Img/downloadsd.jpeg'
import allo from '../../Img/allopurinol-tablets.jpg'
import last from '../../Img/download.jpeg'






const medicinesData = [
    {
        id: 101,
        name: 'Abacavir',
        image:abac,
        quantity: 25,
        price: 150,
        expiry: 2022
    },
    {
        id: 102,
        name: 'Eltrombopag',
        image:Elt,
        quantity: 90,
        price: 550,
        expiry: 2021
    },
    {
        id: 103,
        name: 'Meloxicam',
        image:melo,
        quantity: 85,
        price: 450,
        expiry: 2025
    },
    {
        id: 104,
        name: 'Allopurinol',
        image:allo,
        quantity: 50,
        price: 600,
        expiry: 2023
    },
    {
        id: 105,
        name: 'Phenytoin',
        image:last,
        quantity: 63,
        price: 250,
        expiry: 2021
    },
]

const Dashboard = () => {
    const [medicines, setMedicines] = useState(medicinesData);
    const [showModal, setShowModal] = useState(false);
  
    const handleAddCard = (newCard) => {
        setMedicines([...medicines, newCard]);
      setShowModal(false); // Close the modal after adding the card
    };
  
    const handleClose = () => {
      setShowModal(false); // Close the modal
    };


    return (
        <div>
        <Navbar/>
        <DashboardData medicines={medicines} />
  
        {showModal && (
          <CardAdd onAddCard={handleAddCard} onClose={handleClose} />
        )}
        <button onClick={() => setShowModal(true)}>Add New Card</button>
        </div>
    )
}

export default Dashboard
