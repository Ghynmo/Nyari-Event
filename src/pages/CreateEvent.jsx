import React from 'react'
import './createevent.css'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function CreateEvent() {
    return (
        <div>
            <Navbar/>
            <div className="d-flex">
                <Sidebar/>
                <div className="main d-flex col-sm-10 py-5 px-2 justify-content-center">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
