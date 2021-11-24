import React from 'react'
import './carousel.css'
import ConcertImg from '../assets/01_Preview 3.jpg'

export default function Carousel() {
    return (
        <div className="banner">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ConcertImg} className="d-block w-100" alt="img-A"/>
                    </div>
                    <div className="carousel-item">
                        <img src={ConcertImg} className="d-block w-100" alt="img-B"/>
                    </div>
                    <div className="carousel-item">
                        <img src={ConcertImg} className="d-block w-100" alt="img-C"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
