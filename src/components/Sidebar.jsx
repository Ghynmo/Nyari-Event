import React from 'react'
import './sidebar.css'
import MyPic from '../assets/Profile1.jpg'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar pt-5">
            <div className="user d-flex flex-column align-items-center">
                <img className="user-img mb-3" src={MyPic} alt=""/>
                <div className="user-name">M Ghifari</div>
            </div>
            <ul className="menu pt-5">
                <li><Link to='profile' className="profile mb-2">Profile</Link></li>
                <li><Link to='following-event' className="my-event mb-2">My Event List</Link></li>
                <li><Link to='create-event' className="create-event mb-2">Create Event</Link></li>
                <li><Link to='logout' className="Logout mb-2">Logout</Link></li>
            </ul>
        </div>
    )
}
