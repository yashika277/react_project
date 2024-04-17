import React from 'react'

const NavCon = () => {
  return (
    <>
    <div className="main-header ">
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div class="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
        <i className="fa-solid fa-envelope"></i> <a href="mailto:contact@example.com">cityhospital@example.com</a>
        <i className="fa-solid fa-phone"></i> +91 9988776655
        </div>
        <div class="d-none d-lg-flex social-links align-items-center">
          <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default NavCon
