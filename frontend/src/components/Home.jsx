import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
        <section className="slider_section">
          <div
            id="main_slider"
            className="carousel slide banner-main"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="first-slide"
                  src="assets/images/banner2.jpg"
                  alt="First slide"
                />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>
                      Our <br /> <strong className="black_bold">Latest </strong>
                      <br />
                      <strong className="yellow_bold">Product </strong>
                    </h1>
                    <p>
                      It is a long established fact that a r <br />
                      eader will be distracted by the readable content of a page{" "}
                    </p>
                    <a href="#">see more Products</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="second-slide"
                  src="assets/images/banner2.jpg"
                  alt="Second slide"
                />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>
                      Our <br /> <strong className="black_bold">Latest </strong>
                      <br />
                      <strong className="yellow_bold">Product </strong>
                    </h1>
                    <p>
                      It is a long established fact that a r <br />
                      eader will be distracted by the readable content of a page{" "}
                    </p>
                    <a href="#">see more Products</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="third-slide"
                  src="assets/images/banner2.jpg"
                  alt="Third slide"
                />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>
                      Our <br /> <strong className="black_bold">Latest </strong>
                      <br />
                      <strong className="yellow_bold">Product </strong>
                    </h1>
                    <p>
                      It is a long established fact that a r <br />
                      eader will be distracted by the readable content of a page{" "}
                    </p>
                    <a href="#">see more Products</a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-right" />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-left" />
            </a>
          </div>
        </section>
        {/* CHOOSE  */}
        <div className="whyschose">
          <div className="container">
            <div className="row">
              <div className="col-md-7 offset-md-3">
                <div className="title">
                  <h2>
                    Why <strong className="black">choose us</strong>
                  </h2>
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
                    <i>
                      <img src="assets/icon/1.png" alt='image'/>
                    </i>
                    <h3>Data recovery</h3>
                    <p>
                      Perspiciatis eos quos totam cum minima autPerspiciatis eos
                      quos
                    </p>
                  </div>
                </dir>
                <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="for_box">
                    <i>
                      <img src="assets/icon/2.png" alt='image'/>
                    </i>
                    <h3>Computer repair</h3>
                    <p>
                      Perspiciatis eos quos totam cum minima autPerspiciatis eos
                      quos
                    </p>
                  </div>
                </dir>
                <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="for_box">
                    <i>
                      <img src="assets/icon/3.png" alt='image'/>
                    </i>
                    <h3>Mobile service</h3>
                    <p>
                      Perspiciatis eos quos totam cum minima autPerspiciatis eos
                      quos
                    </p>
                  </div>
                </dir>
                <dir className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="for_box">
                    <i>
                      <img src="assets/icon/4.png" alt='image'/>
                    </i>
                    <h3>Network solutions</h3>
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
        <div className="service">
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
        </div>
        {/* end service */}
        {/* our product */}
        <div className="product">
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
        </div>
        <div className="product-bg">
          <div className="product-bg-white">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p1.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p2.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p3.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p4.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p5.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p2.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p6.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="product-box">
                    <i>
                      <img src="assets/icon/p7.png" />
                    </i>
                    <h3>Norton Internet Security</h3>
                    <span>$25.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Clients_bg_white">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h3>What Clients Say?</h3>
                  </div>
                </div>
              </div>
              <div
                id="client_slider"
                className="carousel slide banner_Client"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#client_slider"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#client_slider" data-slide-to={1} />
                  <li data-target="#client_slider" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="carousel-caption text-bg">
                        <div className="img_bg">
                          <i>
                            <img src="assets/images/lllll.png" />
                            <span>
                              Jone Due
                              <br />
                              <strong className="date">12/02/2019</strong>
                            </span>
                          </i>
                        </div>
                        <p>
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am really satisfied with
                          my first laptop service.
                          <br />
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption text-bg">
                        <div className="img_bg">
                          <i>
                            <img src="assets/images/lllll.png" />
                            <span>
                              Jone Due
                              <br />
                              <strong className="date">12/02/2019</strong>
                            </span>
                          </i>
                        </div>
                        <p>
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am really satisfied with
                          my first laptop service.
                          <br />
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="carousel-caption text-bg">
                        <div className="img_bg">
                          <i>
                            <img src="assets/images/lllll.png" />
                            <span>
                              Jone Due
                              <br />
                              <strong className="date">12/02/2019</strong>
                            </span>
                          </i>
                        </div>
                        <p>
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am really satisfied with
                          my first laptop service.
                          <br />
                          You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="yellow_bg">
              <div className="row">
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="yellow-box">
                    <h3>
                      REQUEST A FREE QUOTE
                      <i>
                        <img src="assets/icon/calll.png" />
                      </i>
                    </h3>
                    <p>Get answers and advice from people you want it from.</p>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="yellow-box">
                    <a href="#">Get Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end our product */}
        {/* map */}
        <div className="container-fluid padi">
          <div className="map">
            <img src="assets/images/mapimg.jpg" alt="img" />
          </div>
        </div>
        {/* end map */}
        {/*  footer */}
    </Fragment>
  );
};

export default Home;
