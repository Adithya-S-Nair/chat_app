import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/userContext';
import axios from 'axios'

const Register = () => {
    const { user } = useContext(UserContext)
    const [registerData, setRegisterData] = useState({ username: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();
    useEffect(() => {
        if (user)
            navigate('/')
    })

    const handleInputs = (e) => {
        let { name, value } = e.target;
        setRegisterData({ ...user, [name]: value })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (user.password === user.cpassword) {
            axios.post('/register', {
                username: user.username,
                email: user.email,
                password: user.password
            },
                {
                    withCredentials: true
                })
                .then((response) => {
                    if (response.status === 201) {
                        alert("Account Created succesfully")
                        navigate('/')
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert("Password doesn't match");
        }
    }
    return (
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        value={registerData.username}
                                                        onChange={handleInputs}
                                                        name='username'
                                                        type="text"
                                                        autoComplete="off"
                                                        id="username12"
                                                        className='form-control border-bottom border-primary rounded-0'
                                                        autoFocus
                                                        required />
                                                    <label className="form-label" htmlFor="username12">User Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        value={registerData.email}
                                                        onChange={handleInputs}
                                                        name='email'
                                                        type="email"
                                                        autoComplete="off"
                                                        id="email"
                                                        className='form-control border-bottom border-primary rounded-0'
                                                        required />
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        value={registerData.password}
                                                        onChange={handleInputs}
                                                        name='password'
                                                        type="password"
                                                        autoComplete="off"
                                                        id="password"
                                                        className='form-control border-bottom border-primary rounded-0'
                                                        required />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        value={registerData.cpassword}
                                                        onChange={handleInputs}
                                                        name='cpassword'
                                                        type="password"
                                                        autoComplete="off"
                                                        id="cpassword"
                                                        className='form-control border-bottom border-primary rounded-0'
                                                        required />
                                                    <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" onClick={handleRegister} className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="login" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register