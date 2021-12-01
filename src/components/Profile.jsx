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
                        <label for="">Name</label>
                        <input type="text"/>
                    </div>
                    <div className="d-flex flex-column pb-3">
                        <label for="">Email</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
            <div className="profile-btn text-end">
                <button>Edit</button>
                <button>Save</button>
            </div>
        </div>
    )
}
