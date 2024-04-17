import React from 'react'
import one from '../Image/testimonials/testimonials-1.jpg'
import two from '../Image/testimonials/testimonials-2.jpg'
import three from '../Image/testimonials/testimonials-3.jpg'
import four from '../Image/testimonials/testimonials-4.jpg'
import five from '../Image/testimonials/testimonials-5.jpg'

const Testimonial = () => {
  return (
    
      <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-title"><h2>Reviews</h2></div>
        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src={one} class="testimonial-img" alt=""/>
                  <h3>Jacob Wilsson</h3>
                  <h4>Writer</h4>
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, lacus ac tincidunt tempor,
                    sapien justo ultrices ante, vel pharetra turpis ex ac nisi. Aliquam tempor egestas turpis, nec
                    commodo lorem egestas eleifend. Curabitur lacus ipsum, fermentum sit amet leo non, blandit tincidunt
                    turpis.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src={two} class="testimonial-img" alt=""/>
                  <h3>Ava Smith</h3>
                  <h4>Artist</h4>
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Praesent pellentesque leo vestibulum, facilisis ante eget, pharetra mi. Curabitur risus mauris,
                    dignissim ullamcorper vehicula id, aliquet ut turpis. Nunc euismod nec nulla non tincidunt. Vivamus
                    nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src={three} class="testimonial-img" alt=""/>
                  <h3>Abigail Martin</h3>
                  <h4>Teacher</h4>
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Fusce ante ipsum, convallis auctor dui sit amet, feugiat blandit ex. Etiam eget tortor sed augue
                    laoreet laoreet vel non libero. Sed in nibh ut sem ornare feugiat at at risus. Morbi gravida enim
                    vitae tortor fringilla tristique. Nulla ac mauris et elit eleifend suscipit et quis lacus. Nam nec
                    ex purus.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src={four} class="testimonial-img" alt=""/>
                  <h3>Alexander Tremblay</h3>
                  <h4>Designer</h4>
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Nam at est in nibh cursus hendrerit. Nunc commodo diam a erat fermentum aliquet. Integer at interdum
                    nisi. Vivamus risus erat, facilisis a blandit ut, sollicitudin sed est. Vestibulum volutpat luctus
                    quam sed finibus. Sed luctus odio eget ex posuere hendrerit. Donec iaculis
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src={five} class="testimonial-img" alt=""/>
                  <h3>Jayden Brown</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                  <i class="fa-solid fa-quote-left"></i>
                    Quisque tristique lectus eget pretium lacinia. Mauris suscipit sapien sit amet enim rhoncus
                    tristique. Phasellus dictum aliquam nisl vel fermentum. Duis viverra luctus justo, vel aliquam ipsum
                    mollis nec. Pellentesque quis suscipit erat. Mauris id lobortis tellus.
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  


  )
}

export default Testimonial
