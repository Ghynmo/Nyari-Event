import React from 'react'
import './comment.css'
import MyPic from '../assets/Profile1.jpg'

export default function Comment() {
    return (
        <div>
            <div className="comment-container me-5">
                <h3>Comment</h3>
                <hr/>
                <div className="user d-flex">
                    <img className="profile-img me-3" src={MyPic} alt=""/>
                    <div className="comment">
                        <p className="name mb-1">Name</p>
                        <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo, sit magni corrupti quaerat tempore enim odio tempora sed ratione temporibus! Tempore sapiente provident porro deleniti rerum ipsum, ratione sed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
