import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">
                    <div class="logo">
                        <a href="index.html">
                            <h1 class="logo me-auto">City</h1><br />
                            <h2 class="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav class="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to={'/'} className='nav-link scrollto'>Home</Link></li>
                            <li><Link to={'/department'} className='nav-link scrollto' >Departments</Link></li>
                            <li><Link to={'/doctor'} className='nav-link scrollto'>Doctors</Link></li>
                            <li><Link to={'/about'} className='nav-link scrollto'>About</Link></li>
                            <li><Link to={'/contact'} className='nav-link scrollto'>Contact</Link></li>
                        </ul>

                    </nav>

                    <Link to={'/appointment'} className="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span>
                        Appointment</Link>
                    <a href="#" class="appointment-btn scrollto">
                        <span class="d-none d-md-inline">Login/ Signup</span>
                    </a>

                </div>
            </header>
        </>
    )
}

export default Navbar
