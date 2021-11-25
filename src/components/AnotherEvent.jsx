import React from 'react'
import './anotherEvent.css'
import FIFA19 from '../assets/FIFA19.jpg'

export default function AnotherEvent() {
    return (
        <section className="another-event ps-3 text-center col-12 col-sm-6">
            <div className="title mb-3 text-start">Another Event</div>
                <img className="w-100 rounded-3" src={FIFA19} alt=""/>
            <button className="btn btn-dark w-100">Join The Event</button>
        </section>
    )
}
