import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <footer className="navbar-expand text-center bottom-0 py-4">
            <img src="" alt="logo" className="logo"/>
            <ul className="menu navbar-nav justify-content-center">
                <li className="nav-item"><a href="home.html" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                <li className="nav-item"><a href="helps.html" className="nav-link">Helps</a></li>
            </ul>
            <div className="copyright">
                © 2021 NyariEvent®. <br/>Use of this site constitutes acceptance of our Terms and Conditions and Privacy Policy
            </div>
        </footer>
    )
}
