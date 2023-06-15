import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../Context/userContext';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (user)
      navigate('/')
  })

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/login', {
      email: loginData.email,
      password: loginData.password
    },
      {
        withCredentials: true
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  value={loginData.email}
                  onChange={handleInputs}
                  type="email"
                  id="form1Example13"
                  name='email'
                  className='form-control border-bottom border-primary rounded-0'
                  required
                  autoComplete='off'
                  autoFocus
                />
                <label className="form-label" htmlFor="form1Example13">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  value={loginData.password}
                  onChange={handleInputs}
                  type="password"
                  id="form1Example23"
                  name='password'
                  className='form-control border-bottom border-primary rounded-0'
                  required
                  autoComplete='off'
                />
                <label className="form-label" htmlFor="form1Example23">Password</label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div>
                <Link to="/">Forgot password?</Link>
              </div>
              <button type="submit" onClick={handleLogin} className="btn btn-primary btn-lg btn-block">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login