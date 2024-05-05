import React from 'react'

const Footer = () => {
  return (
   <footer>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ul className="sociel">
            <li> <a href="#"><i className="fa fa-facebook-f" /></a></li>
            <li> <a href="#"><i className="fa fa-twitter" /></a></li>
            <li> <a href="#"><i className="fa fa-instagram" /></a></li>
            <li> <a href="#"><i className="fa fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="contact">
            <h3>conatct us</h3>
            <span>123 Second Street Fifth Avenue,<br />
              Manhattan, New York<br />
              +987 654 3210</span>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="contact">
            <h3>ADDITIONAL LINKS</h3>
            <ul className="lik">
              <li> <a href="#">About us</a></li>
              <li> <a href="#">Terms and conditions</a></li>
              <li> <a href="#">Privacy policy</a></li>
              <li> <a href="#">News</a></li>
              <li> <a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="contact">
            <h3>service</h3>
            <ul className="lik">
              <li> <a href="#"> Data recovery</a></li>
              <li> <a href="#">Computer repair</a></li>
              <li> <a href="#">Mobile service</a></li>
              <li> <a href="#">Network solutions</a></li>
              <li> <a href="#">Technical support</a></li>
            </ul></div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="contact">
            <h3>About lighten</h3>
            <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, </span>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a> Distributed By <a href="https://themewagon.com">ThemeWagon </a></p>
    </div>
  </div>
</footer>

  )
}

export default Footer