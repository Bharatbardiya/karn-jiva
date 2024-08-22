import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import KarnJivaTeam from "./Karn/KarnJivaTeam";
import Therapy from "./therepy";
const Home = () => {
  return (
    <Fragment>
    <div className="main-layout">
    <section className="slider_section">
  <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="first-slide" src="assets/images/banner2.jpeg" alt="First slide" style={{width:"100%"}}/>
        <div className="container">
          <div className="carousel-caption relative">
            <h1 style={{textAlign:"left"}}>Karn Jiva<br /> <strong className="black_bold">Hearing </strong><br />
              <strong className="yellow_bold">& Speech Clinic </strong></h1>
              <Link className="btn btn-warning" style={{display:"flex", paddingLeft:"15px"}} to={"appointment"}>
                Book Appointment
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
    </div>
     
    
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
      <Therapy />
      {/* <div className="choose_bg">
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
            </div>
          </div>
        </div>
      </div> */}
      {/* end CHOOSE */}
      {/* service */}
      <KarnJivaTeam/>
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
