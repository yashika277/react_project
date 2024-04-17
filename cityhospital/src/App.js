

import './App.css';
import NavCon from './Component/NavCon';

import Home from './Component/Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './Component/Pages/Department';
import Doctor from './Component/Pages/Doctor';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Appointment from './Component/Pages/Appointment';

import Navbar from './Component/Navbar';
import Footer from './Component/Pages/Footer';


function App() {
  return (
    
    <>
    <NavCon/>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/department' exact element={<Department/>}/>
      <Route path='/doctor' exact element={<Doctor/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='/appointment' exact element={<Appointment/>}/>
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
