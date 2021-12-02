import React from 'react'
import './loginForm.css'
import {Link} from 'react-router-dom'

export default function LoginForm() {
    return (
        <div className="signin-card card p-5 text-center">
            <h2>Sign In</h2>
            <button className="my-2">
                <i className="fab fa-google me-3"></i>
                Sign in with Google
            </button>
            <div className="have-account d-flex text-muted justify-content-evenly">
                <hr className="hr-short"/><p>or Already have an account?</p><hr className="hr-short"/>
            </div>
            <form action="home.html">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    <div className="d-flex justify-content-end"><a href="">Forgot Password</a></div>
                </div>

                <Link to={`/`}>
                    <button className="w-100" type="submit">
                        <i className="fas fa-sign-in-alt me-3"></i>
                        Sign In
                    </button>
                </Link>
            </form>
        </div>
    )
}
