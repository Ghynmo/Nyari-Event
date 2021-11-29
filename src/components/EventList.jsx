import React, { useEffect, useState } from 'react'
import './eventList.css'
import useGetEvent from '../hooks/useGetEvent'
import useFilter from '../hooks/useFilter'

export default function EventList() {

    const {data, loading, error} = useGetEvent()
    const [list, setlist] = useState([])

    useEffect(() => {
        setlist(data?.events)
    }, [data])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.log(error)
        return null
    }

    return (
        <div className="search-result my-5">
            <div className="title mb-3">Search for <span>...</span> </div>
            <div className="list-event row d-flex justify-content-start">
                {list?.map((item) => {
                    return (
                    <div key={item.id} className="event-item col-12 col-sm-6 col-lg-3 card">
                        <a href="event_detail.html">
                            <div className="card-head">
                                <img src={item.banner} alt="" className="card-img-top"/>
                                <p className="price-card position-absolute top-0 end-0 p-1">{item.tickets.price}</p>
                            </div>
                            <div className="card-body">
                                <p className="card-title">{item.title}</p>
                                <div className="d-flex text-muted">
                                    <p className="card-text me-auto">{item.location}</p>
                                    <div>
                                        <p className="card-text">{item.time}<br/> {item.date}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>)
                })}

            </div>
        </div>
    )
}
