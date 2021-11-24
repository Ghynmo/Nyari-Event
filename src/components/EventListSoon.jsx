import React from 'react'
import './eventListSoon.css'

export default function EventListSoon() {
    return (
        <section className="w-50">
                <div className="title mb-3">Hot Upcoming Event</div>
                <div className="list-event d-flex mb-2 align-items-center">
                    <div className="number me-3"><h1>1</h1></div>
                    <div className="event-box d-flex w-100 p-2">
                        <div className="w-75">
                            <p className="title-box">Title</p>
                            <p className="date">Date</p>
                        </div>
                        <div>
                            <p className="likes">Likes</p>
                        </div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="list-event d-flex mb-2 align-items-center">
                    <div className="number me-3"><h1>2</h1></div>
                    <div className="event-box d-flex w-100 p-2">
                        <div className="w-75">
                            <p className="title-box">Title</p>
                            <p className="date">Date</p>
                        </div>
                        <div>
                            <p className="likes">Likes</p>
                        </div>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="list-event d-flex mb-2 align-items-center">
                    <div className="number me-3"><h1>3</h1></div>
                    <div className="event-box d-flex w-100 p-2">
                        <div className="w-75">
                            <p className="title-box">Title</p>
                            <p className="date">Date</p>
                        </div>
                        <div>
                            <p className="likes">Likes</p>
                        </div>
                        <img src="" alt=""/>
                    </div>
                </div>
            </section>
    )
}
