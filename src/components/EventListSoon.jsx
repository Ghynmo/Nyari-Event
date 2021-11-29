import React, { useEffect, useState } from 'react'
import useGetHotEvent from '../hooks/useGetHotEvent'
import './eventListSoon.css'


export default function EventListSoon() {
    const {data, loading, error} = useGetHotEvent()
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
        <section className=" col-12 col-sm-6">
            <div className="title mb-3">Upcoming Event</div>
            {list?.map((item, idx) => {
                return(
                    <div key={item.id} className="list-event d-flex mb-2 align-items-center">
                        <div className="number me-3"><h1>{idx+1}</h1></div>
                        <div className="event-box rounded-3 d-flex w-100 p-2">
                            <div className="w-75">
                                <p className="title-box">{item.title}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <div>
                                <p className="likes">Likes: {item.likes}</p>
                            </div>
                            <img src={item.banner} alt=""/>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
