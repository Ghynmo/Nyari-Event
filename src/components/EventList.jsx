import React, { useEffect, useState } from 'react'
import './eventList.css'
import useGetEvent from '../hooks/useGetEvent'
import {Link} from 'react-router-dom'

export default function EventList(props) {

    const {data, loading, error} = useGetEvent()
    const [searchTitle, setsearchTitle] = useState('Event')
    const [list, setlist] = useState([])

    useEffect(() => {
        setlist(data?.events)
    }, [])

    useEffect(() => {
        setlist(data?.events)
    }, [data])

    useEffect(() => {
        setlist(props.SearchData?.events)
        if (props.SearchTitle){
            setsearchTitle(props.SearchTitle)
        }
    }, [props.SearchData])

    useEffect(() => {
        setlist(props.FilterData?.events)
    }, [props.FilterData])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.log(error)
        return null
    }

    return (
        <div className="search-result my-5">
            <div className="title mb-3">Search for {searchTitle} </div>
            <div className="list-event row d-flex justify-content-center">
                {list?.map((item) => {
                    return (
                    <div key={item.id} className="event-item col-12 col-sm-5 col-lg-3 card m-2">
                        <Link to={`/event/${item.id}`}>
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
                        </Link>
                    </div>)
                })}
            </div>
        </div>
    )
}
