import React from 'react'
import './sidebar.css'
import MyPic from '../assets/Profile1.jpg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="user d-flex flex-column align-items-center">
                <img className="user-img mb-3" src={MyPic} alt=""/>
                <div className="user-name">M Ghifari</div>
            </div>
            <ul className="menu pt-5">
                <li className="profile mb-2"><a href="">Profile</a></li>
                <li className="my-event mb-2"><a href="">My Event List</a></li>
                <li className="create-event mb-2"><a href="">Create Event</a></li>
                <li className="Logout mb-2"><a href="">Logout</a></li>
            </ul>
        </div>
    )
}
