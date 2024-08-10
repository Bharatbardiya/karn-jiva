import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login, clearErrors , forgotPassword } from "../../actions/userActions";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useSelector(
      (state) => state.auth
  );
//   const dispatch = useDispatch();

//   const {  error , loading ,  message } = useSelector(state => state.forgotPassword)

  useEffect(() => {

      if (error) {
          alert("something went wrong")
          dispatch(clearErrors());
      }

      

  }, [dispatch])

  const submitHandler = async (e) => {
      e.preventDefault();
      if(email === ""){
        alert("All fields are required");
        return;
    }
      const formData = new FormData();
      formData.set('email', email);
    console.log(email)
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const { data } = await axios.post('/api/v1/password/forgot', formData, config)
          alert("mail has been sent successfully")
    }
    catch (err) {
        console.log(err.message)
        alert("error");
    }
    //   dispatch(forgotPassword(formData))
  }
  
  const navigateSignup = (e) =>{
      navigate("/login");
  }
 
//   useEffect(() => {
//       if (isAuthenticated) {
//           navigate("/");
//       }
//       if (error) {
//           alert(error)
//           dispatch(clearErrors());
//       }
//   }, [navigate, error, dispatch, isAuthenticated]);

  return (
    <Fragment>
  <div className="brand_color">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage">
            <h2>Forget Password</h2>
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
              <div className="col-md-12" style={{display:"flex", justifyContent:"center", marginBottom:"10px", fontSize:"1.1rem"}}>
                Don't have an account? <Link to={'/signup'} style={{color:"blue", marginLeft:"10px"}}
                onClick={navigateSignup} >Signup</Link>
              </div>
              <div className=" col-md-12">
                <button className="send" onClick={submitHandler} >Send Email</button>
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

export default ForgetPassword