import React from 'react'
import './anotherEvent.css'
import FIFA19 from '../assets/FIFA19.jpg'

export default function AnotherEvent() {
    return (
        <section className="another-event w-50 ps-3 text-center">
            <div className="title mb-3">Another Event</div>
                <img className="w-100" src={FIFA19} alt=""/>
            <button>Join The Event</button>
        </section>
    )
}
