import React from 'react'
import './profile.css'
import MyPic from '../assets/Profile1.jpg'

export default function Profile() {
    return (
        <div className="profile mb-5">
            <h3>Profile</h3>
            <div className="d-flex align-items-center">
                <img className="user-img me-5" src={MyPic} alt=""/>
                <form className="w-100" action="">
                    <div className="d-flex flex-column pb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="d-flex flex-column pb-3">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                </form>
            </div>
            <div className="profile-btn text-end">
                <button className="btn btn-outline-primary me-3">Edit</button>
                <button className="btn btn-primary">Save</button>
            </div>
        </div>
    )
}
