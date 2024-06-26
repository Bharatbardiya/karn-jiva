import React, { Fragment } from 'react'
import KarnJivaTeam from './Karn/KarnJivaTeam'

const About = () => {
  return (
    <Fragment>
  <div className="about">
    <div className="container">
      <div className="row">
        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about_box">
            <figure><img src="assets/images/home-img4.png" alt='image'/></figure>
          </div>
        </dir>
        <dir className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about_box">
            <h3>What is Karn jiva</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi magni beatae quae, alias asperiores magnam totam, quas doloremque cumque distinctio aliquid, reiciendis recusandae quos ab! Asperiores harum fugit hic!
            Numquam optio quisquam, quos sit eius ea vitae. Similique sint quod, repellat aspernatur corporis vel vitae cumque at sed facere porro dolore eius omnis? Quaerat temporibus nemo deleniti ipsum recusandae!
            Ea laborum, totam fugiat delectus perspiciatis facilis ad quod! Eius eveniet modi praesentium facere perspiciatis soluta harum tempore sapiente quia id. Cupiditate earum velit recusandae quia numquam fugit molestiae inventore.</p>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </dir> 
      </div>
    </div>
  </div>
  {/* CHOOSE  */}
  {/* <div className="whyschose">
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
  </div> */}
  {/* <div className="choose_bg">
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
  </div> */}
  {/* end CHOOSE */}
    <KarnJivaTeam/>
    </Fragment>
  )
}

export default About