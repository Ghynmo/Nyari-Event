import React from 'react'
import './eventList.css'
import ConcertImg from '../assets/01_Preview 3.jpg'

export default function EventList() {
    return (
        <div className="search-result my-5">
            <div className="title mb-3">Search for <span>...</span> </div>
            <div className="list-event row d-flex justify-content-start">
                <div className="event-item col-12 col-sm-6 col-lg-3 card">
                    <a href="event_detail.html">
                        <div className="card-head">
                            <img src={ConcertImg} alt="" className="card-img-top"/>
                            <p className="price-card position-absolute top-0 end-0 p-1">$25</p>
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
                    </a>
                </div>
                <div className="event-item col-12 col-sm-6 col-lg-3 card">
                    <div className="card-head">
                        <img src={ConcertImg} alt="" className="card-img-top"/>
                        <p className="price-card position-absolute top-0 end-0 p-1">$25</p>
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
                <div className="event-item col-12 col-sm-6 col-lg-3 card">
                    <div className="card-head">
                        <img src={ConcertImg} alt="" className="card-img-top"/>
                        <p className="price-card position-absolute top-0 end-0 p-1">$25</p>
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
                <div className="event-item col-12 col-sm-6 col-lg-3 card">
                    <div className="card-head">
                        <img src={ConcertImg} alt="" className="card-img-top"/>
                        <p className="price-card position-absolute top-0 end-0 p-1">$25</p>
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
        </div>
    )
}
