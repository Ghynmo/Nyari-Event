import React from 'react'
import './followingEvent.css'
import ConcertImg from '../assets/01_Preview 3.jpg'

export default function FollowingEvent() {
    return (
        <div className="my-event-content mb-5">
            <h3>My Event List</h3>
            <div className="event-item d-flex w-75">
                <div className="card-head">
                    <a href="event_detail.html"><img src={ConcertImg} alt="" className="card-img"/></a>
                </div>
                <div className="card-body">
                    <p className="card-title">Title Event</p>
                    <div className="d-flex text-muted">
                        <p className="card-text me-auto">Location</p>
                        <div>
                            <p className="card-text">Time <br/> Date</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
