import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import axios from "axios";
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const { token } = useParams();
  const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
      (state) => state.auth
  );

  const submitHandler = async (e) => {
    //   console.log("hdklfsdl");
      e.preventDefault();
      if(password === "" || confirmPassword === "" ){
          alert("All fields are required");
          return;
      }
      try {
          const formData = new FormData();
            formData.set('password', password);
            formData.set('confirmPassword', confirmPassword);
    
          // console.log(email, password);
    
          const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.put(`/api/v1/password/reset/${token}`, formData, config)
        alert("Password Reset Successfully")
      }
      catch (err) {
        alert("Error")
      }

    //   dispatch(login(email, password));
  };
  const navigateLogin = (e) =>{
      navigate("/login");
  }
  const navigateForgetPassword = (e) =>{
    navigate("/forgetpassword");
}
  useEffect(() => {
      if (isAuthenticated) {
          navigate("/");
      }
      if (error) {
          alert(error)
          dispatch(clearErrors());
      }
  }, [navigate, error, dispatch, isAuthenticated]);

  return (
    <Fragment>
  <div className="brand_color">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Reset Password</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Login */}
  <div className="login contact">
  <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="main_form">
            <div className="row">
              <div className="col-md-12">
                <input className="form-control" placeholder="password"  name="confirm password" 
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value);}}
                />
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="password" name="confirm password" 
                  value={confirmPassword}
                  onChange={(e)=>{setConfirmPassword(e.target.value);}}
                />
              </div>
              {/* <div className="col-md-12" style={{display:"flex", justifyContent:"center", marginBottom:"10px", fontSize:"1.1rem"}}>
                Navigate to login? <Link to={'/login'} style={{color:"blue", marginLeft:"10px"}}
                onClick={navigateLogin}>Login</Link>
              </div> */}
              <div className=" col-md-12">
                <button className="send" onClick={submitHandler} >Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* end Login */}
</Fragment>

  )
}

export default ResetPassword