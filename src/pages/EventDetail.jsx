import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Information from '../components/Information'
import Comment from '../components/Comment'
import Ticket from '../components/Ticket'

export default function EventDetail() {
    return (
        <div className="mx-5 p-4">
            <BreadCrumb/>
            <div className="w-100 d-flex">
                <div className="w-75">
                    <Information/>
                    <Comment/>
                </div>
                <Ticket/>
            </div>
        </div>
    )
}
