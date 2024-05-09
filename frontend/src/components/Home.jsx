import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Fragment>
      <section className="slider_section">
        <div id="main_slider" className="  banner-main" data-ride="">
          {/* <div className="home-bg-image"> */}
          <div className="home-bg-image">
            <div className="my-5">
              <div className="container">
                <div className="">
                  <h1>
                    Karn Jiva <br />{" "}
                    <strong className="black_bold">Hearing And </strong>
                    <br />
                    <strong className="yellow_bold">Speech Clinic </strong>
                  </h1>
                  <Link className="btn btn-primary" to={"appointment"}>
                    Book Appointment
                  </Link>
                  {/* Hearing Care</a></li>
              <li> <a href="#">Speech Therapy</a></li>
              <li> <a href="#">Occupational Therapy</a></li> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CHOOSE  */}
      <div className="whyschose">
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-3">
              <div className="title">
                <h2>
                  {/* Why <strong className="black">choose us</strong> */}
                  Services
                </h2>
                {/* <span>Fastest repair service with best price!</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose_bg">
        <div className="container">
          <div className="white_bg">
            <div className="row">
              <dir className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="for_box">
                  <i>
                    <img src="assets/icon/1.png" alt="image" />
                  </i>
                  <h3>Hearing Care</h3>
                  <p>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos
                    quos
                  </p>
                </div>
              </dir>
              <dir className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="for_box">
                  <i>
                    <img src="assets/icon/2.png" alt="image" />
                  </i>
                  <h3>Speech Therapy</h3>
                  <p>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos
                    quos
                  </p>
                </div>
              </dir>
              <dir className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="for_box">
                  <i>
                    <img src="assets/icon/3.png" alt="image" />
                  </i>
                  <h3>Occupational Therapy</h3>
                  <p>
                    Perspiciatis eos quos totam cum minima autPerspiciatis eos
                    quos
                  </p>
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
      {/* <div className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="title">
                  <h2>
                    Service <strong className="black">Process</strong>
                  </h2>
                  <span>Easy and effective way to get your device repair</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service1.png" alt='image'/>
                  </i>
                  <h3>Fast service</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service2.png" alt='image'/>
                  </i>
                  <h3>Secure payments</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service3.png" alt='image'/>
                  </i>
                  <h3>Expert team</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service4.png" alt='image'/>
                  </i>
                  <h3>Affordable services</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service5.png" alt='image'/>
                  </i>
                  <h3>90 Days warranty</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img src="assets/icon/service6.png" alt='image'/>
                  </i>
                  <h3>Award winning</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* end service */}
      {/* our product */}
      {/* <div className="product">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2>
                    our <strong className="black">products</strong>
                  </h2>
                  <span>
                    We package the products with best services to make you a
                    happy customer.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </Fragment>
  );
};

export default Home;
