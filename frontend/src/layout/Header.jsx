import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  // const { addToast } = useToasts();

  const logoutHandler = () => {
    dispatch(logout());
    if (error) {
      // addToast(error.message, { appearance: 'error', autoDismiss: true, });
      console.log(error);
    } else {
      // addToast('logout Successfully', { appearance: 'success', autoDismiss: true, });
      console.log("logout successfull");
      navigate("/");
    }
  };
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    {" "}
                    <Link to={"/"}>
                      <img src="assets/images/logo.jpg" width={150} height={150} alt="logo" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
              <div className="menu-area">
                <div className="limit-box">
                  <nav className="main-menu">
                    <ul className="menu-area-main">
                      <li className="active">
                        {" "}
                        <Link to={"/"}>Home</Link>{" "}
                        {/* <a href="index.html">Home</a>{" "} */}
                      </li>
                      <li>
                        {" "}
                        <Link to="/about">About</Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/product">Product</Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/blog">Blog</Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to="/contact">Contact</Link>{" "}
                      </li>
                      {user ? (
                        <li className="mb-0">
                          <a className="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hello, {user?.name?.split(" ")[0]}
                          </a>

                          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <Link to={"/profile"} className="dropdown-item">profile</Link>
                            {user && user?.role==="admin" && <Link to={"/dashboard"} className="dropdown-item">Dashboad</Link>}
                            <a className="dropdown-item" onClick={logoutHandler}>Logout</a>
                          </div>
                          </li>
                      ) : (
                        <li>
                        <Link to="/login">login</Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
