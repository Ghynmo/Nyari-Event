import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand px-5">
            <div className="container-fluid">
                <div className="nav-left d-flex me-auto">
                    <img src="" alt="Logo" className="logo pe-2"/>
                    <div className="searchbar">
                        <input type="text" placeholder="Search Here..." name="searchbar"/>
                    </div>
                </div>
                <ul className="nav-right navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>
                    <li className="nav-item"><a href="create_event.html" className="nav-link">+ Create Event</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Notification</a></li>
                    <li className="nav-item"><a href="login.html" className="nav-link">Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}
