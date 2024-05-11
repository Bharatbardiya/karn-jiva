import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
      (state) => state.auth
  );

  const submitHandler = (e) => {
      console.log("hdklfsdl");
      e.preventDefault();
      if(email === "" || password === ""){
          alert("All fields are required");
          return;
      }
      // console.log(email, password);
      dispatch(login(email, password));
  };
  const navigateSignup = (e) =>{
      navigate("/signup");
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
            <h2>Login</h2>
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
                <input className="form-control" placeholder="Email" type="text" name="Email" 
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value);}}
                />
              </div>
              <div className="col-md-12">
                <input className="form-control" placeholder="password" name="password" 
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value);}}
                />
              </div>
              <div className="col-md-12" style={{display:"flex", justifyContent:"center", marginBottom:"10px", fontSize:"1.1rem"}}>
                Don't have an account? <Link to={'/signup'} style={{color:"blue", marginLeft:"10px"}}
                onClick={navigateSignup} >Signup</Link>
              </div>
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

export default Login