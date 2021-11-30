import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Filter from '../components/Filter'
import EventList from '../components/EventList'
import EventListSoon from '../components/EventListSoon'
import AnotherEvent from '../components/AnotherEvent'
import Footer from '../components/Footer'

export default function Home() {

    const [SearchData, setSearchData] = useState(null)
    const [SearchTitle, setSearchTitle] = useState(null)

    const [FilterData, setFilterData] = useState(null)

    const getSearchData = (value) => {
        setSearchData(value);
    }
    const getSearchTitle = (title) => {
        setSearchTitle(title);
    }
    const getFilterData = (value) => {
        setFilterData(value);
    }
    
    return (
        <div>
            <header>
                <Navbar getSearchData={getSearchData} getSearchTitle={getSearchTitle}/>
                <Carousel/>
            </header>
            <div className="content mx-5 p-4">
                <Filter getFilterData={getFilterData}/>
                <EventList SearchData={SearchData} SearchTitle={SearchTitle} FilterData={FilterData}/>
                <div className="upcoming-list row">
                    <EventListSoon/>
                    <AnotherEvent/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
