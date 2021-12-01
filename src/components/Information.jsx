import React, { useEffect, useState } from 'react'
import './information.css'
import MapImg from '../assets/map.png'
import useInfo from '../hooks/useInfo'

const initialState = {
    banner: '',
    title: '',
    date: '',
    time: 0,
    location: '',
    description: ''
}

const event_contacts = {
    name: '',
    email: '',
    phone: 0
}

export default function Information() {

    const {InfoEvent, InfoData} = useInfo()
    const [state, setstate] = useState(initialState)
    const [contact, setcontact] = useState(event_contacts)

    useEffect(() => {
        InfoEvent({ 
            variables: {
                id: 18 //props
            }
        })
    }, [])

    useEffect(() => {
        setstate(InfoData?.events_by_pk)
        setcontact(InfoData?.events_by_pk.event_contacts[0])
    }, [InfoData])

    return (
        <div className="information-container pb-3">
            <div className="event-banner mb-4">
                <img className="w-100" src={state?.banner} alt=""/>
            </div>
            <div className="information">
                <h2 className="title">{state?.title}</h2>
                <p className="description pe-1">{state?.description}</p>
                <div className="date mb-2 d-flex flex-column">
                    <span className="sub-title">Date</span>
                    <span>{state?.date}</span>
                </div>
                <div className="location mb-2 d-flex flex-column">
                    <span className="sub-title">Location</span>
                    <span>{state?.location}</span>
                </div>
                <div className="contact mb-2">
                    <span className="sub-title">Contact Person</span>
                    <div className="d-flex flex-column">
                        <span>Name : {contact?.name}</span>
                        <span>Email : {contact?.email}</span>
                        <span>Phone : {contact?.phone}</span>
                    </div>
                </div>
                <div className="addional-info row d-flex mb-3">
                    <div className="map col-sm-8">
                        <p className="sub-title">Map</p>
                        <img className="map-img w-100" src={MapImg} alt=""/>
                    </div>
                    <div className="share-info col-sm-4 d-flex bottom-0">
                        <p>Share</p>
                        <div className="icon d-flex">
                            <span>Facebook</span>
                            <span>Instagram</span>
                            <span>Twitter</span>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}
