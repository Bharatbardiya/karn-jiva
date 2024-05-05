import React, { Fragment } from 'react'

const About = () => {
  return (
    <Fragment>
  <div className="about">
    <div className="container">
      <div className="row">
        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about_box">
            <figure><img src="assets/images/pc_layout.png" alt='image'/></figure>
          </div>
        </dir>
        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about_box">
            <h3>Who is Lighten</h3>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </dir> 
      </div>
    </div>
  </div>
  {/* CHOOSE  */}
  <div className="whyschose">
    <div className="container">
      <div className="row">
        <div className="col-md-7 offset-md-3">
          <div className="title">
            <h2>Why <strong className="black">choose us</strong></h2>
            <span>Fastest repair service with best price!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="choose_bg">
    <div className="container">
      <div className="white_bg">
        <div className="row">
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/1.png" alt='image'/></i>
              <h3>Data recovery</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/2.png" alt='image'/></i>
              <h3>Computer repair</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/3.png" alt='image'/></i>
              <h3>Mobile service</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="for_box">
              <i><img src="assets/icon/4.png" alt='image'/></i>
              <h3>Network solutions</h3>
              <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
            </div>
          </dir>
          <div className="col-md-12">
            <a className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end CHOOSE */}
  {/* service */} 
  <div className="service">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="title">
            <h2>service <strong className="black">proces</strong></h2>
            <span>Easy and effective way to get your device repaired.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service1.png" alt='image'/></i>
            <h3>Fast service</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service2.png" alt='image'/></i>
            <h3>Secure payments</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service3.png" alt='image'/></i>
            <h3>Expert team</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service4.png" alt='image'/></i>
            <h3>Affordable services</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service5.png" alt='image'/></i>
            <h3>90 Days warranty</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="service-box">
            <i><img src="assets/icon/service6.png" alt='image'/></i>
            <h3>Award winning</h3>
            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end service */}

    </Fragment>
  )
}

export default About