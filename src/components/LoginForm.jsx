import React, { useState } from 'react'
import './loginForm.css'
import {Link} from 'react-router-dom'
// import GoogleLogin from 'react-google-login'
import { auth } from '../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function LoginForm() {

    const [loginData, setloginData] = useState({
        email:'',
        password:''
    })
    const [user, setuser] = useState({})

    onAuthStateChanged(auth, (currentUser) => { // After Login Get CurrentUser
        setuser(currentUser)
        console.log(user);
    });

    const onChangeLogin = (e) => {
        setloginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            console.log(user);
        } catch (err) {
            console.log(err.message);
        }
    }

    const logout = async (e) => {
        e.preventDefault()
        await signOut(auth)
    }

    // ======= GetLogin With OAuth
    // const responseGoogle = (response)=>{
    //     console.log('response',response);
    //     console.log('responseobj',response.profileObj);
    // }

    return (
        <div className="signin-card card p-5 text-center">
            {user?.email}
            <h2>Sign In</h2>
            <button className="my-2">
                <i className="fab fa-google me-3"></i>
                Sign in with Google
            </button>
            {/* <GoogleLogin
                clientId="351814492129-i3r4gc13rf2g15jljksfbriafkuo2rdp.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> */}
            <div className="have-account d-flex text-muted justify-content-evenly">
                <hr className="hr-short"/><p>or Already have an account?</p><hr className="hr-short"/>
            </div>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={onChangeLogin}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={onChangeLogin}/>
                    <label for="floatingPassword">Password</label>
                    <div className="d-flex justify-content-end"><a href="">Forgot Password</a></div>
                </div>

                {/* <Link to={`/`}> */}
                    <button className="w-100 mb-3" type="submit" onClick={login}>
                        <i className="fas fa-sign-in-alt me-3"></i>
                        Sign In
                    </button>

                    <button className="w-100" type="submit" onClick={logout}>
                        <i className="fas fa-sign-in-alt me-3"></i>
                        Sign Out
                    </button>
                {/* </Link> */}
            </form>
        </div>
    )
}
