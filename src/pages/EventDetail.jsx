import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Information from '../components/Information'
import Comment from '../components/Comment'
import Ticket from '../components/Ticket'

export default function EventDetail() {
    return (
        <div className="mx-5 p-4">
            <BreadCrumb/>
            <div className="w-100 row d-flex">
                <div className="col-12 col-sm-9">
                    <Information/>
                    <Comment/>
                </div>
                <Ticket/>
            </div>
        </div>
    )
}
