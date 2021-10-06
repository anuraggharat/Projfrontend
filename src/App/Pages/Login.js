import React, { useState } from "react";

export default function Login() {
  
  const [values, setValues] = useState({
    name: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //handle submit

    console.log(values);
  };

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
              name="name"
              value={values.name}
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
            <button className="btn bg-purple text-white btn-block w-100 btn-lg">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
}
