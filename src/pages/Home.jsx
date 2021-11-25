import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Filter from '../components/Filter'
import EventList from '../components/EventList'
import EventListSoon from '../components/EventListSoon'
import AnotherEvent from '../components/AnotherEvent'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <header>
                <Navbar/>
                <Carousel/>
            </header>
            <div className="content mx-5 p-4">
                <Filter/>
                <EventList/>
                <div className="upcoming-list row">
                    <EventListSoon/>
                    <AnotherEvent/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
