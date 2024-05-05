import { Link } from 'react-router-dom'
import React, { Fragment, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phoneNo: "",
      confirm_password: "",
  });

  const { name, email, password, phoneNo, confirm_password } = user;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
      (state) => state.auth
  );
  const navigateLogin = (e)=>{
      navigate("/login");
  }
  useEffect(() => {
      if (isAuthenticated) {
          navigate("/");
      }
      if (error) {
          alert(error);
          toast.error(error);
          dispatch(clearErrors());
      }
  }, [dispatch, navigate, isAuthenticated, error]);

  const submitHandler = (e) => {
      console.log(name, email, password)
      e.preventDefault();
      if (password?.length < 6) {
          toast.error("password must be more then 6 charchter");
          return;
      }

      dispatch(register(name,email,password));
  };
  const onChange = (e) => {
      
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user);
      
  };

  return (
    <Fragment>
  <div className="brand_color">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Signup</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Signup */}
  <div className="Signup contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="main_form">
            <div className="row">
              <div className="col-md-12">
                <input className="form-control" placeholder="Your name" type="text" name="name"
                            value={name}
                            onChange={onChange}/>
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="Email" type="text" value={email}
                            name="email"
                            onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="Phone" type="text" name="PhoneNo"  value={phoneNo} onChange={onChange}/>
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="password" name="password"
                            value={password}
                            onChange={onChange} />
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="confirm password" name="confirm_password"  value={confirm_password} onChange={onChange}/>
              </div>
              <div className="col-md-12" style={{display:"flex", justifyContent:"center", marginBottom:"10px", fontSize:"1.1rem"}}>
                already have an account? <Link to={'/login'} style={{color:"blue", marginLeft:"10px"}}
                onClick={navigateLogin}>Login</Link>
              </div>

              <div className=" col-md-12">
                <button className="send" onClick={submitHandler}>Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* end Signup */}
</Fragment>

  )
}

export default Signup