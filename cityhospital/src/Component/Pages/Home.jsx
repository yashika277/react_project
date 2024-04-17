import React from 'react'
import Testimonial from './Testimonial'
import Gallery from './Gallery'
import Footer from './Footer'
import Navbar from '../Navbar'


const Home = () => {
  return (
    <>
   
    <div id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to City <br/>Multispeciality Hospital</h1>
      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
    </div>
  </div>

  <section id="counts" class="counts">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="count-box">
              <i class="fas fa-user-md"></i>
              <span>23</span>
              <p>Doctors</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
              <i class="far fa-hospital"></i>
              <span>18</span>
              <p>Departments</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="fas fa-heartbeat"></i>
              <span>980</span>
              <p>Patients</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
              <i class="fas fa-award"></i>
              <span>12</span>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Our Facilities</h2>
          <p>Nunc aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat sollicitudin. Fusce tincidunt sit
            amet ex in volutpat. Donec lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus placerat mi et
            suscipit pulvinar. Donec quis tristique lectus.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-hospital-alt"></i></div>
              <h4><a href="">24x7 Emergency Available</a></h4>
              <p>Nullam accumsan, velit et porta consequat, purus leo congue risus</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-bed"></i></div>
              <h4><a href="">40+ Bed Facilities</a></h4>
              <p>Pellentesque id felis elit. Pellentesque blandit sem a nisi dictum</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-hospital-user"></i></div>
              <h4><a href="">Cardiogram Machine</a></h4>
              <p>Donec lacinia finibus tortor. Curabitur luctus eleifend odio.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-dna"></i></div>
              <h4><a href="">X-ray and Sonography</a></h4>
              <p>Aliquam auctor felis ut sem elementum, ac rutrum turpis venenatis.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-wheelchair"></i></div>
              <h4><a href="">Semi Special, Special and Delux Room Available</a></h4>
              <p>Etiam in massa eu neque euismod consectetur.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-notes-medical"></i></div>
              <h4><a href="">Medical</a></h4>
              <p>Morbi vulputate, tortor nec pellentesque molestie</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <Testimonial/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home
