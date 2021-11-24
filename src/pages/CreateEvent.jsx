import React from 'react'
import './createevent.css'
import Profile from '../components/Profile'
import Sidebar from '../components/Sidebar'
import FollowingEvent from '../components/FollowingEvent'
import CreatedEvent from '../components/CreatedEvent'
import FormCreate from '../components/FormCreate'

export default function CreateEvent() {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="main w-100 p-5">
                <Profile/>
                <FollowingEvent/>
                <CreatedEvent/>
                <FormCreate/>
            </div>
        </div>
    )
}
