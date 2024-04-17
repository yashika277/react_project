import React from 'react'
import one from '../Image/gallery/gallery-1.jpg'
import two from '../Image/gallery/gallery-2.jpg'
import three from '../Image/gallery/gallery-3.jpg'
import four from '../Image/gallery/gallery-4.jpg'
import five from '../Image/gallery/gallery-5.jpg'
import six from '../Image/gallery/gallery-6.jpg'
import seven from '../Image/gallery/gallery-7.jpg'
import eight from '../Image/gallery/gallery-8.jpg'

const Gallery = () => {
  return (
    <>
    
    <section id="gallery" class="gallery">
      <div class="container">

        <div class="section-title">
          <h2>Gallery</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row no-gutters">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={one} class="galelry-lightbox">
                <img src={one} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={two} class="galelry-lightbox">
                <img src={two} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={three} class="galelry-lightbox">
                <img src={three} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={four} class="galelry-lightbox">
                <img src={four} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={five} class="galelry-lightbox">
                <img src={five} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={six} class="galelry-lightbox">
                <img src={six} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={seven} class="galelry-lightbox">
                <img src={seven} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={eight} class="galelry-lightbox">
                <img src={eight} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Gallery
