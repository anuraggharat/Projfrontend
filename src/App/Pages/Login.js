import React, { useState } from "react";
import { connect } from "react-redux";

import {loginUser} from '../Redux/Actions/auth'
import { toast } from "react-toastify";
import { Redirect } from "react-router";


function Login({loginUser , user, isLoggedIn}) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

    console.log(user);
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    setLoading(true)
    e.preventDefault();
    loginUser(values)
      .then(async (res) => {
        console.log(res)
        if (res) {
          toast.success("Login success");
          
        } else {
          toast.error(res.error);
        }
        setLoading(false)
      })
      .catch((err) => toast.warning(err));

    console.log(values);
  };


  if(user){
    console.log(user)
    
    return <Redirect to="user/dashboard"  />
  }

  return (
    <div className=" w-100 min-vh-100 d-flex flex-column justify-content-center bg-purple">
      <div className="text-center w-50 mx-auto bg-white p-5 rounded shadow-lg">
        <h4 className="mb-5">SIGN IN TO YOUR ACCOUNT</h4>
        <form>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-grey border-0"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={values.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating mb-5">
            <input
              type="password"
              className="form-control bg-grey border-0"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div>
            <button className="btn bg-purple text-white btn-block w-100 btn-lg" type="submit" disabled={loading} onClick={(e)=>handleSubmit(e)}>
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user,
});
export default connect(mapStateToProps, { loginUser})(
  Login
);