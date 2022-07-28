import React, { useState } from 'react'
import "./LoginForm.css"
import { Link, useHistory } from 'react-router-dom';
import Search from './Search';
// import { useNavigate } from "react-router-dom"

function LoginForm({ Login, error }) {

  const [details, setDetails] = useState({ name: "", mobile: "", email: "", password: "" });
  const [status, setStatus] = useState("Out");
  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();
    handleLogin();
    Login(details);
    history.push("/");
  }

  const handleLogin = () => {

    if (status === "Out") {
      setStatus("In");
      localStorage.setItem("user_details: ", details);
      let getUser = document.getElementById('userIcon');
      getUser.innerHTML = `<br/><span>${details.name.trim()}</span>`;
    }

    else {
      alert("Oops, Something went wrong!...Try Logging in Again");
    }

    // alert("You have been Logged In successfully!...Click OK to continue shopping!");
  }


  return (
    <>
      <form className='formFull' onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          {(error !== "") ? (<div className="error">{error}</div>) : ""}
          <div className="form-group">
            <label htmlFor="name">UserName: </label>
            <input required type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Mobile No.: </label>
            <input required type="number" name="mobile" id="mobile" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length=10) return false;" onChange={e => setDetails({ ...details, mobile: e.target.value })} value={details.mobile} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input required type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input required type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
          </div>

          <input type="submit" value="LOGIN" />
          <br />
          <br />
          <div>
          <input className='logout' value="LOGOUT" onClick={() => { window.location.href = "/" }} />
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
