import React from 'react'
import './createdEvent.css'
import ConcertImg from '../assets/01_Preview 3.jpg'

export default function CreatedEvent() {
    return (
        <div className="create-event-content mb-5">
            <h3>Create Event List</h3>
            <div className="d-flex align-items-center w-100">
                <div className="event-item d-flex me-5 mb-3">
                    <a href="event_detail.html">
                    <div className="card-head">
                        <img src={ConcertImg} alt="" className="card-img-top"/>
                    </div></a>
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
                <div className="create-btn d-flex flex-column">
                    <button>Publish</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="text-center">
                <button>Create New</button>
            </div>
        </div>
    )
}
