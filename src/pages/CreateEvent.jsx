import React from 'react'
import './createevent.css'
import Sidebar from '../components/Sidebar'
// import Profile from '../components/Profile'
// import FollowingEvent from '../components/FollowingEvent'
// import CreatedEvent from '../components/CreatedEvent'
import FormCreate from '../components/FormCreate'

export default function CreateEvent() {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="main d-flex col-sm-10 py-5 px-2 justify-content-center">
                {/* <Profile/>
                <FollowingEvent/>
                <CreatedEvent/> */}
                <FormCreate/>
            </div>
        </div>
    )
}
