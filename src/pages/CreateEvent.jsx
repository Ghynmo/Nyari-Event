import React from 'react'
import './createevent.css'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router';

export default function CreateEvent() {
    return (
        <div className="d-flex">
            <Sidebar/>
            <div className="main d-flex col-sm-10 py-5 px-2 justify-content-center">
                <Outlet/>
            </div>
        </div>
    )
}
